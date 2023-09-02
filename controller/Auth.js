import DB from "../DBConnet.js";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { createTableIfNotExists } from "../Model/User.js";
import JWT from "jsonwebtoken";
import { OtpTable } from "../Model/OTP.js";
export const Register = async (req, res) => {
  createTableIfNotExists();

  const sql = `select*from user where email=?`;
  const { name, mobile, email, password, isTeacher } = req.body;
  try {
    const query =
      "INSERT INTO user (name, mobile, email, password,isTeacher) VALUES (?, ?, ?, ?,?)";
    if (req.body.password != req.body.cnfPass) {
      return res.send({
        success: false,
        message: "Password not match",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    DB.query(sql, email, (err, user) => {
      if (user.length > 0) {
        return res.send({
          success: false,
          message: "you have already account, please login",
        });
      } else {
        DB.query(
          query,
          [req.body.name, req.body.mobile, req.body.email, hash, isTeacher],
          (err, result1) => {
            if (err) {
              return res.send(err);
            } else {
              return res.send({
                success: true,
                message: "Your Account created successfully.....",
              });
            }
          }
        );
      }
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "An error occurred", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = `select*from user where email=?`;
    DB.query(sql, email, (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      if (result.length == 0) {
        return res.send({
          success: false,
          message: "we have no any account please make one account",
        });
      } else {
        const islogin = bcrypt.compareSync(password, result[0]?.password);
        if (!islogin)
          return res.send({
            success: false,
            message: "your Password is wrong",
          });
        else {
          const token = JWT.sign({ id: result[0].id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });
          res.send({
            success: true,
            message: result[0],
            token: token,
          });
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred", error: error.message });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const sql = "select*from user";
    DB.query(sql, (err, ress) => {
      if (err) {
        res.send({ success: false, message: err.message });
      } else {
        res.send({ success: true, message: ress });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const UpdatePassword = async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    DB.query("SELECT * FROM user WHERE id = ?", [userId], (err, response) => {
      if (response.length === 0) {
        res.status(404).json({ error: "User not found" });
        return;
      }
    });

    const updateFields = [];
    const updateValues = [];

    for (const [key, value] of Object.entries(updatedData)) {
      updateFields.push(`${key} = ?`);
      updateValues.push(value);
    }

    updateValues.push(userId);

    const updateQuery = `UPDATE user SET ${updateFields.join(
      ", "
    )} WHERE id = ?`;
    const salt = bcrypt.genSaltSync(10);
    if (updatedData.password) {
      const hash = bcrypt.hashSync(updatedData.password, salt);
      updateValues[3] = hash;
    }
    console.log(updateValues[3]);

    DB.query(updateQuery, updateValues, (err, result) => {
      if (!err) {
        res.send({
          success: true,
          message: "user profile updated successfully....",
        });
      } else {
        res.send({ success: false, message: result });
      }
    });

    // res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ success: false, message: "something went wrong...." });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from user where id=?`;
    const sql2 = `delete from user where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This user is not exist" });
        return;
      } else {
        DB.query(sql2, id, (err, result) => {
          if (err) {
            res.send({ success: false, message: "Something went wrong...." });
            return;
          } else {
            res.send({
              success: true,
              message: "user Deleted Successfully...",
            });
            return;
          }
        });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// get one user by id
export const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from user where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This user not exist" });
      } else {
        res.send({ success: true, message: ress });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//  forget password
export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const password = req.body.password;
  if (!password) {
    return res.send({ success: false, message: "Password Empty" });
  }
  if (!email) {
    return res.send({ success: false, message: "email Empty" });
  }
  try {
    // Check if the user with the provided email exists
    const userQuery = "SELECT * FROM user WHERE email = ?";
    DB.query(userQuery, [email], async (err, userResult) => {
      // console.log(userResult.length);
      if (userResult.length === 0) {
        console.log("Error checking user:", err);
        return res.send({ success: false, message: "This Email Not Exist" });
      } else {
        // Hash the new password
        const salt = bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(password, salt);

        // Update the user's password
        const updateQuery = "UPDATE user SET password = ? WHERE email = ?";
        DB.query(updateQuery, [hash, email], (updateErr, updateResult) => {
          if (updateErr) {
            console.error("Error updating user password:", updateErr);
            return res.send({
              success: false,
              message: "Password update error",
            });
          } else {
            return res.json({
              success: true,
              message: "Password updated successfully",
            });
          }
        });
      }
    });
  } catch (error) {
    console.error("Error in forgetPassword:", error);
    res.send({ success: false, message: "Something went wrong" });
  }
};

export const sendOtp = async (req, res) => {
  const { email } = req.body;
  console.log(req.body.email);
  const OTP = Math.floor(Math.random() * 100 + 100000);
  console.log(OTP);
  const transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // host: "smtp.ethereal.email",
    port: 587 || 465,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: "Oriental Public School OTP",
    html: `<h1>Orietal Public School</h1><p> I hope you are aware our privacy. This is the one time password when you use this password after that its useless </p<h4>your OTP:</h4> <h3>
       ${OTP} 
      </h3>`,
  };
  transpoter.sendMail(mailOption, (errr, info) => {
    if (errr) {
      console.log(errr);
      res.json({
        status: 500,
        success: false,
        message: "message sending fail",
      });
    } else {
      // transpoter.off();
      OtpTable();
      console.log("seccessfully sent");
      const query = "INSERT INTO otptable (otp, email) VALUES (?, ?)";
      DB.query(query, [OTP, email], (err, result1) => {
        if (err) {
          console.log(err);
          console.log("otp working");
          return res.send({ success: false, message: err.message });
        } else {
          return res.send({
            success: true,
            message: "Otp send Successfully...",
          });
        }
      });
    }
  });
};
export const verifyOtp = async (req, res) => {
  try {
    const OTP = req.body.OTP;
    const query = "SELECT * FROM otptable WHERE otp = ?";
    DB.query(query, [OTP], (err, result1) => {
      if (err) {
        console.log(err);
        return res.send({ success: false, message: err.message });
      } else {
        return res.send({
          success: true,
          message: "Otp Verify successfully...",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

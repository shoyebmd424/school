import DB from "../DBConnet.js";
import { addmissionEnquiryTable } from "../Model/Enquery.js";

export const CreateEnquery = async (req, res) => {
  addmissionEnquiryTable();
  try {
    const { name, email, mobile, address, city, country, message } = req.body;
    const query =
      "INSERT INTO enquery (name, email,mobile, address, city, country, message) VALUES (?, ?, ?, ?, ?, ?, ?)";
    DB.query(
      query,
      [name, email, mobile, address, city, country, message],
      (err, result1) => {
        if (err) {
          console.log(err);
          return res.send({ success: false, message: err.message });
        } else {
          return res.send({
            success: true,
            message: "your enquery sent successfully.....",
            result1,
          });
        }
      }
    );
  } catch (error) {
    console.error("Error inserting user:", error);
    res.send({ success: "An error occurred", message: error.message });
  }
};

// all studentss
export const getAllEnquery = async (req, res) => {
  try {
    const sql = "select*from enquery";
    DB.query(sql, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "something went wrong...." });
      } else {
        res.send({ success: true, message: ress });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.send({ success: false, message: "Internal server error" });
  }
};

// get one enquery
export const getOneEnquery = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from enquery where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This student not exist" });
      } else {
        res.send({ success: true, message: ress });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// get one enquery by email id
export const getOneEnqueryByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const sql = `select*from enquery where email=?`;
    DB.query(sql, email, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This student not exist" });
      } else {
        res.send({ success: true, message: ress });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delete one student
export const deleteEnquery = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from enquery where id=?`;
    const sql2 = `delete from enquery where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This enquery is not exist" });
        return;
      } else {
        DB.query(sql2, id, (err, result) => {
          if (err) {
            res.send({ success: false, message: "Something went wrong...." });
            return;
          } else {
            res.send({
              success: true,
              message: "enquery Deleted Successfully...",
            });
            return;
          }
        });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

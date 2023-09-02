import { createStudentTable } from "../Model/Student.js";
import DB from "../DBConnet.js";

export const CreateStudent = async (req, res) => {
  createStudentTable();
  try {
    const {
      name,
      rollNumber,
      studentemail,
      standard,
      fatherName,
      motherName,
      attendanceTotalDays,
      attendancePresent,
      totalFees,
      feesPaid,
      unit1marks,
      unit2marks,
      halfYearlymarks,
      yearlymarks,
      teacherEmail,
    } = req.body;
    const sql = `select*from student where rollNumber=?`;
    const sql2 = `select*from student where studentemail=?`;
    const usersql = `select*from user where email=?`;
    const query =
      "INSERT INTO student (name, rollNumber,studentemail, standard, fatherName, motherName, attendanceTotalDays, attendancePresent, totalFees, feesPaid, unit1marks, unit2marks, halfYearlymarks,yearlymarks,teacherEmail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?)";

    DB.query(usersql, studentemail, (err3, user3) => {
      if (user3.length === 0) {
        return res.send({
          success: false,
          message: "This user is not register you can not add",
        });
      } else {
        DB.query(sql2, studentemail, (err2, user2) => {
          if (user2.length > 0) {
            return res.send({
              success: false,
              message: "This student already added",
            });
          } else {
            DB.query(sql, rollNumber, (err, user) => {
              if (user.length > 0) {
                return res.send({
                  success: false,
                  message: "This student already added",
                });
              } else {
                DB.query(
                  query,
                  [
                    name,
                    rollNumber,
                    studentemail,
                    standard,
                    fatherName,
                    motherName,
                    attendanceTotalDays,
                    attendancePresent,
                    totalFees,
                    feesPaid,
                    unit1marks,
                    unit2marks,
                    halfYearlymarks,
                    yearlymarks,
                    teacherEmail,
                  ],
                  (err, result1) => {
                    if (err) {
                      console.log(err);
                      return res.send({ success: false, message: err.message });
                    } else {
                      return res.send({
                        success: true,
                        message: "Student added successfully.....",
                        result1,
                      });
                    }
                  }
                );
              }
            });
          }
        });
      }
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "An error occurred", error: error.message });
  }
};

export const UpdateStudent = async (req, res) => {
  const studentId = req.params.id;
  const updatedData = req.body;

  try {
    DB.query(
      "SELECT * FROM student WHERE id = ?",
      [studentId],
      (err, response) => {
        if (response.length === 0) {
          res
            .status(404)
            .json({ success: false, message: "Student is not found" });
          return;
        }
      }
    );

    const updateFields = [];
    const updateValues = [];

    for (const [key, value] of Object.entries(updatedData)) {
      updateFields.push(`${key} = ?`);
      updateValues.push(value);
    }

    updateValues.push(studentId);

    const updateQuery = `UPDATE student SET ${updateFields.join(
      ", "
    )} WHERE id = ?`;

    DB.query(updateQuery, updateValues, (err, result) => {
      if (!err) {
        res.send({
          success: true,
          message: "Student updated succesfully.......",
        });
      } else {
        res.send({ success: false, message: result });
      }
    });

    // res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

// all studentss
export const getAllStudent = async (req, res) => {
  try {
    const sql = "select*from student";
    DB.query(sql, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "something went wrong...." });
      } else {
        res.send({ success: true, message: ress });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// get one student
export const getOneStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from student where id=?`;
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

// get one student by email id
export const getOneStudentByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const sql = `select*from student where studentemail=?`;
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
export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from student where id=?`;
    const sql2 = `delete from student where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This student is not exist" });
        return;
      } else {
        DB.query(sql2, id, (err, result) => {
          if (err) {
            res.send({ success: false, message: "Something went wrong...." });
            return;
          } else {
            res.send({
              success: true,
              message: "Student Deleted Successfully...",
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

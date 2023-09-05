import DB from "../DBConnet.js";
import { create8thClassTable } from "../Model/Class8thReg.js";

// Function to insert data into the 'student' table
export const create8thClass = async (req, res) => {
  try {
    create8thClassTable();
    const data = req.body;
    const columns = Object.keys(data).join(", ");
    const placeholders = Object.keys(data)
      .map(() => "?")
      .join(", ");
    const values = Object.values(data);
    if (values.length === 0) {
      return res.send({ success: false, message: "Fields empty..." });
    }
    DB.query(
      `
        INSERT INTO class8th (${columns})
        VALUES (${placeholders});
      `,
      values,
      (err, result) => {
        if (result.length === 0) {
          console.error(err);
          return res.send({ success: false, message: err.message });
        } else {
          console.log("Data inserted into 'class8th' table.");
          return res.send({
            success: true,
            message: "Registration completed....",
          });
        }
      }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    res.send({ success: false, message: "Something went wrong...." });
  }
};

// all regiter student
export const getAll8thReg = async (req, res) => {
  try {
    const sql = "select*from class8th";
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

// get one class8th
export const getOneclass8th = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from class8th where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This details not exist" });
      } else {
        res.send({ success: true, message: ress });
      }
    });
  } catch (error) {
    console.error("Error selecting user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// delete one regitration
export const deleteRegiteration = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from class8th where id=?`;
    const sql2 = `delete from class8th where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This Regiteration is not exist" });
        return;
      } else {
        DB.query(sql2, id, (err, result) => {
          if (err) {
            res.send({ success: false, message: "Something went wrong...." });
            return;
          } else {
            res.send({
              success: true,
              message: "Regitration Deleted Successfully...",
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

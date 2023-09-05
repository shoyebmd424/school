import DB from "../DBConnet.js";
import { contactTable } from "../Model/Contact.js";

export const CreateContact = async (req, res) => {
  contactTable();
  try {
    const { name, email, message } = req.body;
    const query =
      "INSERT INTO contact (name, email, message) VALUES (?, ?, ? )";
    DB.query(query, [name, email, message], (err, result1) => {
      if (err) {
        console.log(err);
        return res.send({ success: false, message: err.message });
      } else {
        return res.send({
          success: true,
          message: "your contact has beet sent successfully.....",
          result1,
        });
      }
    });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.send({ success: "An error occurred", message: error.message });
  }
};

// all studentss
export const getAllContact = async (req, res) => {
  try {
    const sql = "select*from contact";
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
export const getOneContact = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from contact where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This contact not exist" });
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
export const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `select*from contact where id=?`;
    const sql2 = `delete from contact where id=?`;
    DB.query(sql, id, (err, ress) => {
      if (err) {
        res.send({ success: false, message: "This contact is not exist" });
        return;
      } else {
        DB.query(sql2, id, (err, result) => {
          if (err) {
            res.send({ success: false, message: "Something went wrong...." });
            return;
          } else {
            res.send({
              success: true,
              message: "contact Deleted Successfully...",
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

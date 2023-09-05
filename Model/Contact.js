import DB from "../DBConnet.js";

export const contactTable = async () => {
  try {
    await DB.query(`
      CREATE TABLE IF NOT EXISTS contact (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message VARCHAR(255)
      )
    `);
    console.log("Table created or already exists");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

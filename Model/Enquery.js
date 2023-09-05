import DB from "../DBConnet.js";

export const addmissionEnquiryTable = async () => {
  try {
    await DB.query(`
      CREATE TABLE IF NOT EXISTS enquery (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        mobile VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        country VARCHAR(255),
        message VARCHAR(255)
      )
    `);
    console.log("Table created or already exists");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

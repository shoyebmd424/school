import DB from "../DBConnet.js";

export const OtpTable = async () => {
  try {
    await DB.query(`
    CREATE TABLE IF NOT EXISTS otptable (
        id INT PRIMARY KEY AUTO_INCREMENT,
        otp VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );
    `);
    console.log("Table created or already exists");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

import DB from "../DBConnet.js";
export const createTableIfNotExists = async () => {
  try {
    await DB.query(`
    CREATE TABLE IF NOT EXISTS user (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20),
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        isTeacher BOOLEAN DEFAULT FALSE,
        isAdmin BOOLEAN DEFAULT FALSE
      );
      `);
    console.log("Table created or already exists");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

import DB from "../DBConnet.js";

// Define the keys for the table columns
export const tableColumns = [
  "name",
  "phone",
  "whatsAppNo",
  "aadhaar",
  "gender",
  "DOB",
  "father",
  "mother",
  "guardian",
  "presentAddress",
  "permanentAddress",
  "lastQualification",
  "lastinstitute",
  "busAddress",
  "religion",
  "caste",
  "typeStudent1",
  "typeStudent2",
  "hindi",
  "english",
  "chois1",
  "science",
  "sscience",
  "choise2",
];
export const create9thClassTable = async () => {
  try {
    await DB.query(`
    CREATE TABLE IF NOT EXISTS class9th (
          id INT PRIMARY KEY AUTO_INCREMENT,
          ${tableColumns.map((column) => `${column} VARCHAR(255)`).join(", ")}
        );
      `);
    console.log("Table 9th class already exists.");
  } catch (error) {
    console.error("Error creating/checking table:", error);
  }
};

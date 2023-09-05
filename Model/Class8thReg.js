import DB from "../DBConnet.js";

// Define the keys for the table columns
export const tableColumns = [
  "name",
  "permanentAddress",
  "presentAddress",
  "mothersWhatsAppNo",
  "aadhaar",
  "father",
  "gender",
  "fathersOccupation",
  "fathersQualification",
  "mothersOccupation",
  "mother",
  "mothersQualification",
  "guadian",
  "fathersWhatsNo",
  "caste",
  "DOB",
  "age",
  "lastQualification",
  "lastIntitution",
  "forAddmission",
  "medium",
  "lastMarkSheet",
  "additionalSubject",
  "busAddress",
];
export const create8thClassTable = async () => {
  try {
    await DB.query(`
    CREATE TABLE IF NOT EXISTS class8th (
          id INT PRIMARY KEY AUTO_INCREMENT,
          ${tableColumns.map((column) => `${column} VARCHAR(255)`).join(", ")}
        );
      `);
    console.log("Table 8th class already exists.");
  } catch (error) {
    console.error("Error creating/checking table:", error);
  }
};

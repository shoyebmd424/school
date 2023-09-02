import DB from "../DBConnet.js";
export const createStudentTable = async () => {
  try {
    await DB.query(`
    CREATE TABLE IF NOT EXISTS student (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      rollNumber VARCHAR(255) NOT NULL UNIQUE,
      studentemail VARCHAR(255) NOT NULL UNIQUE,
      standard VARCHAR(255) NOT NULL,
      fatherName VARCHAR(255) NOT NULL,
      motherName VARCHAR(255),
      attendanceTotalDays VARCHAR(255),
      attendancePresent VARCHAR(255),
      totalFees VARCHAR(255),
      feesPaid VARCHAR(255),
      unit1marks VARCHAR(255),
      unit2marks VARCHAR(255),
      halfYearlymarks VARCHAR(255),
      yearlymarks VARCHAR(255),
      teacherEmail VARCHAR(255) NOT NULL
    )
  `);
    console.log("Table created or already exists");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

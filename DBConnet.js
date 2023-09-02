import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
// const Connection = mysql.createConnection({
//   host: "localhost",
//   user: process.env.User,
//   password: process.env.Password,
//   database: process.env.database,
//   port: 3306,
// });
const Connection = mysql.createConnection({
  // host:  "localhost",
  host: "sql12.freemysqlhosting.net",
  user: process.env.User,
  password: process.env.Password,
  database: process.env.database,
  port: 3306,
});
Connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

export default Connection;

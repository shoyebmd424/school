import Express from "express";
import Db from "./DBConnet.js";
import dotenv from "dotenv";
import AuthRouter from "./Router/Auth.js";
import StudentRouter from "./Router/Student.js";
import EnqueyRouter from "./Router/Enquery.js";
import class8thRouter from "./Router/class8th.js";
import class9thRouter from "./Router/class9th.js";
import ContactRouter from "./Router/Contact.js";
import cors from "cors";
import path from "path";
// dotenv.config({ path: "./config.env" });
dotenv.config();
const __dirname = path.resolve();
const app = Express();
const PORT = process.env.PORT || 8080;
// app.get("/", (req, res) => {
//   res.send("App on testing and working fine");
// });
app.use(Express.json());
app.use(cors());
app.use(Express.static(path.join(__dirname, "./frontEnd/build")));

app.use("/api/auth", AuthRouter);
app.use("/api/student", StudentRouter);
app.use("/api/enquery", EnqueyRouter);
app.use("/api/class8th", class8thRouter);
app.use("/api/class9th", class9thRouter);
app.use("/api/contact", ContactRouter);
//rest api
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontEnd/build/index.html"));
});
app.listen(PORT, () => {
  Db;
  console.log(`Application is runing on port ${PORT}`);
});

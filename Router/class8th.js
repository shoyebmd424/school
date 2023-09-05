import Express from "express";
import {
  create8thClass,
  deleteRegiteration,
  getAll8thReg,
  getOneclass8th,
} from "../controller/class8th.js";
import { verifyUser } from "../Middleware/VerifyToken.js";
const Router = Express.Router();
Router.post("/", create8thClass);
Router.get("/", verifyUser, getAll8thReg);
Router.get("/:id", verifyUser, getOneclass8th);
Router.delete("/:id", verifyUser, deleteRegiteration);

export default Router;

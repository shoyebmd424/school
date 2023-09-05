import Express from "express";
import {
  create9thClass,
  deleteRegiteration,
  getAll9thReg,
  getOneclass9th,
} from "../controller/class9th.js";
import { verifyUser } from "../Middleware/VerifyToken.js";
const Router = Express.Router();
Router.post("/", create9thClass);
Router.get("/", verifyUser, getAll9thReg);
Router.get("/:id", verifyUser, getOneclass9th);
Router.delete("/:id", verifyUser, deleteRegiteration);

export default Router;

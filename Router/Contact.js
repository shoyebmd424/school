import Express from "express";
import { verifyUser } from "../Middleware/VerifyToken.js";
import {
  CreateContact,
  deleteContact,
  getAllContact,
} from "../controller/Contact.js";
const Router = Express.Router();
Router.post("/", CreateContact);
Router.get("/", verifyUser, getAllContact);
Router.delete("/:id", verifyUser, deleteContact);

export default Router;

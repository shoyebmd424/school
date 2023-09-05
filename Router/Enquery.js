import Express from "express";
import {
  CreateEnquery,
  deleteEnquery,
  getAllEnquery,
} from "../controller/Enquery.js";
import { verifyUser } from "../Middleware/VerifyToken.js";
const Router = Express.Router();
Router.post("/", CreateEnquery);
Router.get("/", verifyUser, getAllEnquery);
Router.delete("/:id", verifyUser, deleteEnquery);

export default Router;

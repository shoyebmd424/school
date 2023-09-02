import express from "express";
import {
  CreateStudent,
  UpdateStudent,
  deleteStudent,
  getAllStudent,
  getOneStudent,
  getOneStudentByEmail,
} from "../controller/Student.js";
import { verifyUser } from "../Middleware/VerifyToken.js";
const router = express.Router();

router.post("/", verifyUser, CreateStudent);
router.put("/:id", verifyUser, UpdateStudent);
router.get("/", verifyUser, getAllStudent);
router.get("/:id", verifyUser, getOneStudent);
router.delete("/:id", verifyUser, deleteStudent);
router.get("/get-by-email/:email", verifyUser, getOneStudentByEmail);

export default router;

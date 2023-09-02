import Express from "express";
import {
  Register,
  UpdatePassword,
  deleteUser,
  forgetPassword,
  getAllUser,
  getOneUser,
  login,
  sendOtp,
  verifyOtp,
} from "../controller/Auth.js";
import { verifyUser } from "../Middleware/VerifyToken.js";
const router = Express.Router();
router.post("/register", Register);
router.get("/", getAllUser);
router.get("/getoneUser/:id", getOneUser);
router.post("/login", login);
router.put("/:id", UpdatePassword);
router.delete("/:id", verifyUser, deleteUser);
router.post("/send-otp", sendOtp);
router.post("/verify", verifyOtp);
router.post("/forget/password", forgetPassword);
export default router;

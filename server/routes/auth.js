import express from "express";
import { logIn, logOut, singUp } from "../Controllers/auth.js";

const router = express.Router();

//posts route
router.post("/SignUp", singUp);
router.post("/SignUp", logIn);
router.post("/SignUp", logOut);

export default router;

import express from "express";
import { logIn, logOut, signUp } from "../Controllers/auth.js";

const router = express.Router();

// Sign up route
router.post("/signUp", signUp);

// Log in route
router.post("/logIn", logIn);

// Log out route
router.post("/logOut", logOut);

export default router;

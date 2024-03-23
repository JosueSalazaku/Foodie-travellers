import express from "express";
import { addPost } from "../Controllers/posts";

const router = express.Router();


//posts route
router.get("/", addPost); 

export default router;
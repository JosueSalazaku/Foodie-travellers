import express from "express";
import { addPost } from "../Controllers/posts.js";


const router = express.Router();


//posts route
router.get("/", addPost); 
router.get("/:id", addPost); 
router.post("/", addPost); 
router.delete("/", addPost); 
//this is Update by id
router.put("/:id",); 

export default router;
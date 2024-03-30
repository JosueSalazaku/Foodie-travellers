import express from "express";
import { addPost, deletePost, getPosts, updatePost } from "../Controllers/posts.js";


const router = express.Router();


//posts route
router.get("/", getPosts); 
router.get("/:id", getPosts); 
router.post("/", addPost); 
router.delete("/", deletePost); 
//this is Update by id
router.put("/:id", updatePost); 

export default router;
import express from "express";
import cors from "cors";
import multer from "multer"

import postRoutes from "./routes/posts.js"

import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.use("/api/posts", postRoutes);

// Handle POST requests to '/api/posts'
app.post("/api/posts", upload.single("image"), (req, res) => {
  const { title, content } = req.body;
  const imagePath = req.file.path;
});

app.get("/test/", (req, res) => {
  res.json("it works?");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

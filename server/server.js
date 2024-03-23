import express from "express";
import cors from "cors";
import multer from "multer"
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js"


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
const upload = multer({ dest: "uploads/" });

app.use(express.json());
// posts route
app.use("/api/posts", postRoutes);

app.get("/test/", (req, res) => {
  res.json("it works?");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

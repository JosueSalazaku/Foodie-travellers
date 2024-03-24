import express from "express";
import multer from "multer"
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

app.use(express.json());
// posts route
app.use("/api/signUp", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);

app.get("/test/", (req, res) => {
  res.json("it works?");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

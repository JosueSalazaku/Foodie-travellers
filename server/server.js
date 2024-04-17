import express from "express";
import cors from "cors"; // Import the cors middleware
import multer from "multer";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import db from "./db.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const upload = multer({ dest: "uploads/" });

db();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Routes
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);

// Test route
app.get("/test", (req, res) => {
  res.json("Server is running");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
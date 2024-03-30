import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signUp = (req, res) => {
  // Check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json({ error: err.message }); // Handle database query error

    if (data.length > 0) {
      return res.status(409).json({ error: "User already exists!" }); // User already exists, return a 409 Conflict status
    }
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Insert the new user into the database
    const insertQuery =
      "INSERT INTO users(username, email, password) VALUES (?, ?, ?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(insertQuery, values, (err, result) => {
      if (err) return res.status(500).json({ error: err.message }); // Handle database insert error

      // User successfully created
      return res.status(201).json({ message: "User has been created" });
    });

    console.log("Received signUp request:", req.body); // Add this line
    console.log("Sign up successful"); // Add this line
  });
};


export const logIn = (req, res) => {
     // Check USERS
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "An internal server error occurred" });
      }
      if (data.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ error: "Wrong username or password" });
      }
  
      const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET);
      const { password, ...other } = data[0];
  
      res.cookie("access_token", token, {
        httpOnly: true
      }).status(200).json(other);
    });
  };
  

export const logOut = (req, res) => {
  res.clearCookie("acces_token", {
    sameSite: "none",
    secure:true
    }).status(200).json("User Has been logged out")
};

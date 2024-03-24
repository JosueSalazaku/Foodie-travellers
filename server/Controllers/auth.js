import { json } from "express";
import db from "../db.js";
import bcrypt, { hash } from "bcryptjs";

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
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
      if (!isPasswordCorrect) return res.status(404).json("Wrong username or password")
  });
};

export const logOut = (req, res) => {
  // Implement logout logic here
};

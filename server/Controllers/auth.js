import db from '../db.js';
import bcrypt from 'bcryptjs';

export const signUp = (req, res) => {
    // Check existing user 
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        //Hash the passwords and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const insertQuery = 'INSERT INTO users(username, email, password) VALUES (?, ?, ?)';
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ];
        
        db.query(insertQuery, values, (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const logIn = (req, res) => {
    // Implement login logic here
};

export const logOut = (req, res) => {
    // Implement logout logic here
};

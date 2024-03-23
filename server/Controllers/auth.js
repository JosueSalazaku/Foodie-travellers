import db from '../db.js';
import bcrypt from 'bcryptjs'


export const singUp = (res, req) => {
    // Check existing user 
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.name], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User already exists!")

        //Hash the passwords and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

    })
}

export const logIn = (res, req) => {
    
}

export const logOut = (res, req) => {
    
}
import db from '../db.js';


export const singUp = (res, req) => {
    // Check existing user 
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.name])
}

export const logIn = (res, req) => {
    
}

export const logOut = (res, req) => {
    
}
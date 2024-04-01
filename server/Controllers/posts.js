import db from "../db.js";

export const getPosts = (req, res) => {
    const q = req.query.category ? "SELECT * FROM posts WHERE category=?" :
        "SELECT * FROM posts";
    const category = req.query.category; // Get the category from the query params
    db.query(q, [category], (err, data) => { // Pass the category as a parameter to the query
        if (err) return res.status(500).json({ error: err.message });
        return res.status(200).json(data);
    });
}

export const getPost = (req, res) => {
    res.json("From controller");
}

export const addPost = (req, res) => {
    res.json("From controller");
}

export const deletePost = (req, res) => {
    res.json("From controller");
}

export const updatePost = (req, res) => {
    res.json("From controller");
}

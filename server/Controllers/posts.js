import db from "../db";

export const getPosts = (req, res) => {
    const q = res.query.category ? "SELECT * FROM posts WHERE category=?" :
        "SELECT * FROM posts";
    db.query(q[req.query.category], (err, data) => {
        if (err) return res.send(err);

        return res.status(200).json(data);
    })
}

export const getPost = (req, res) => {
    res.json("From controller")
}

export const addPost = (req, res) => {
    res.json("From controller")
}

export const deletePost = (req, res) => {
    res.json("From controller")
}

export const updatePost = (req, res) => {
    res.json("From controller")
}
import express from 'express';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo"]})
});

app.listen(3000, () => {
    console.log(`Server running on ${port}`)
})
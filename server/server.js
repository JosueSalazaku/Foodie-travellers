import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api", (req, res) => {
    res.send({"users": ["userOne", "userTwo"]})
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
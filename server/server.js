import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
  
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

app.use(cors());
const upload = multer({ dest: 'uploads/' });

// Handle POST requests to '/api/posts'
app.post('/api/posts', upload.single('image'), (req, res) => {
    const { title, content } = req.body;
    const imagePath = req.file.path;
  });
  

app.get("/api/post", (req, res) => {

});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
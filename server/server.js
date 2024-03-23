import express from 'express';
import cors from 'cors';
import multer from 'multer';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const upload = multer({ dest: 'uploads/' });

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

// Handle POST requests to '/api/posts'
app.post('/api/posts', upload.single('image'), (req, res) => {
    // Save post data and image path to database
    // You'll need to implement this logic
  });
  

app.get("/api/post", (req, res) => {

});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
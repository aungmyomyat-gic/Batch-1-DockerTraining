const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
require('dotenv').config(); // Load environment variables

const app = express()

app.use(cors())
app.use(express.json())

// Database connection configuration
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',        // Changed to 'mysql' as default container name
    user: process.env.MYSQL_USER || 'root',         // Using DB_ prefix for consistency
    password: process.env.MYSQL_ROOT_PASSWORD || 'rootPassword',  // Using DB_ prefix for consistency
    database: process.env.MYSQL_DATABASE || 'bookdb',   // Using DB_ prefix for consistency
    port: process.env.MYSQL_PORT || 3307,                            // Unlimited queue
});

console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_ROOT_PASSWORD);
console.log(process.env.MYSQL_DATABASE);
console.log(process.env.MYSQL_PORT);

// Add connection test
const connectWithRetry = async (maxRetries = 5, delay = 5000) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const connection = await pool.getConnection();
            console.log('Database connected successfully');
            connection.release();
            return true;
        } catch (err) {
            console.error(`Connection attempt ${attempt}/${maxRetries} failed:`, err);
            if (attempt === maxRetries) {
                console.error('Max retries reached. Could not connect to database.');
                throw err;
            }
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

// Initialize connection with retry mechanism
connectWithRetry()
    .catch(err => {
        console.error('Failed to establish database connection:', err);
        process.exit(1); // Exit if we can't connect to database
    });

app.get('/books', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM books')
        res.json(rows)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message })
    }
})

app.post('/books', async (req, res) => {
    const { title, author } = req.body
    try {
        const [result] = await pool.query(
            'INSERT INTO books (title, author) VALUES (?, ?)',
            [title, author]
        )
        const newBook = {
            id: result.insertId,
            title,
            author
        }
        res.status(201).json(newBook)
    } catch (error) {
        res.status(500).json({ message: 'Error creating book', error: error.message })
    }
})

app.delete('/books/:id', async (req, res) => {
    const { id } = req.params
    try {
        await pool.query('DELETE FROM books WHERE id = ?', [id])
        res.status(200).json({ message: 'Book deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error: error.message })
    }
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})
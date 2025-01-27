const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')

const app = express()

app.use(cors())
app.use(express.json())

// Database connection configuration
const pool = mysql.createPool({
  host: 'mysql-db',
  user: 'user',
  password: 'password',
  database: 'bookdb'
})

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
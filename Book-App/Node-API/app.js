const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// --------- Mock Data ---------
const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 5, title: 'Brave New World', author: 'Aldous Huxley' }
];

const music = [
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen' },
    { id: 2, title: 'Imagine', artist: 'John Lennon' },
    { id: 3, title: 'Hotel California', artist: 'Eagles' },
    { id: 4, title: 'Billie Jean', artist: 'Michael Jackson' },
    { id: 5, title: 'Smells Like Teen Spirit', artist: 'Nirvana' }
];

const movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan' },
    { id: 2, title: 'The Matrix', director: 'The Wachowskis' },
    { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
    { id: 4, title: 'Pulp Fiction', director: 'Quentin Tarantino' },
    { id: 5, title: 'The Godfather', director: 'Francis Ford Coppola' }
];

// --------- Endpoints ---------
app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/music', (req, res) => {
    res.json(music);
});

app.get('/movies', (req, res) => {
    res.json(movies);
});

// --------- Server ---------
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
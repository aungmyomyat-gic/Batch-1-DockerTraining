const API_URL = 'http://localhost:4000';

// Fetch all books
async function fetchBooks() {
    try {
        const response = await fetch(`${API_URL}/books`);
        const books = await response.json();
        displayBooks(books);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

// Display books in the DOM
function displayBooks(books) {
    const booksListDiv = document.getElementById('booksList');
    booksListDiv.innerHTML = '';

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-card';
        bookDiv.innerHTML = `
            <div>
                <h3>${book.title}</h3>
                <p>By: ${book.author}</p>
            </div>
            <button class="delete-btn" onclick="deleteBook('${book.id}')">Delete</button>
        `;
        booksListDiv.appendChild(bookDiv);
    });
}

// Add new book
document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    try {
        const response = await fetch(`${API_URL}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author })
        });

        if (response.ok) {
            document.getElementById('bookForm').reset();
            fetchBooks();
        }
    } catch (error) {
        console.error('Error adding book:', error);
    }
});

// Delete a book
async function deleteBook(id) {
    // Add confirmation dialog
    const confirmDelete = confirm('Are you sure you want to delete this book?');
    
    if (!confirmDelete) {
        return; 
    }

    try {
        const response = await fetch(`${API_URL}/books/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            fetchBooks();
        }
    } catch (error) {
        console.error('Error deleting book:', error);
    }
}

// Load books when page loads
fetchBooks(); 
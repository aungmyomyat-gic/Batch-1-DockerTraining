import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:4000/books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex">
      {/* Main Content */}
      <main className="main-content">
        <div className="cards-container">
          {books.map(book => (
            <div key={book.id} className="card">
              {/* Default Image */}
              <img
                src={book.image || 'https://via.placeholder.com/150'}
                alt={book.title || 'Book Image'}
                className="card-image"
              />

              {/* Book Details */}
              {Object.entries(book).map(([key, value]) => {
                if (key !== 'id' && key !== 'image') {
                  return (
                    <div key={key} className="card-info">
                      <h3 className="card-title">{key}</h3>
                      <p>{value}</p>
                    </div>
                  );
                }
                return null;
              })}

              {/* Price and Buttons */}
              <div className="card-footer">
                <p className="card-price">
                  {book.price ? `$${book.price}` : 'Price not available'}
                </p>
                <div className="button-group">
                  <button className="buy-button">Buy</button>
                  <button className="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

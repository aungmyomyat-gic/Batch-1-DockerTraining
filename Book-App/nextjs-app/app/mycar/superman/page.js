'use client'

import axios from 'axios';
import { useEffect,useState } from 'react';

function Superman() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:4000/books').then((response) => {
            setBooks(response.data);
            setLoading(false);
        }); 
    }, []);
    
    console.log("Books Lists" ,books);
    

    return ( 
        <>
            <span className='text-4xl font-bold'>Book List </span>
            {loading && <span>Loading...</span>}
            <div>
                {books.map((book) => (
                    <div key={book.id} className="p-4 ">
                            <span>{book.title}</span>
                            <span>{book.author}</span>
                    </div>
                ))}
            </div>
        </> 
    );
}

export default Superman;
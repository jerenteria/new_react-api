import './App.css';
import React, { useState } from 'react';
import BookList from './components/BookList';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([]);

  fetch('https://openlibrary.org/search/authors.json?q=twain')
    .then(response => response.json())
    .then(data => setBooks(data));


  return (
    <section>
      <h1>Welcome!</h1>
      <BookList books={books} />
    </section>
  );
}

export default App;

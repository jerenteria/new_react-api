import './App.css';
import React, { useState } from 'react';
import BookList from './components/BookList';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([]);

  fetch('https://billboard-api2.p.rapidapi.com/hot-100')
    .then(response => response.json())
    .then(data => console.log(data));


  return (
    <section>
      <h1>Welcome!</h1>
      <BookList books={books} />
    </section>
  );
}

export default App;

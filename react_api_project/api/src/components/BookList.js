import React from 'react';
import Book from './Book';

const BookList = (props) => {
    <ul>
        {props.books.map((book) => (
            <Book 
            key={book.key}
            name={book.name}
            date={book.date} />
        ))}
    </ul>
}

export default Book;
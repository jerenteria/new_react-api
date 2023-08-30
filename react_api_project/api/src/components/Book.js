import React from 'react';


const Book = (props) => {
    return (
        <section className="bookList">
            <li>
            <h2>{props.key}</h2>
            <h2>{props.name}</h2>
            <h2>{props.date}</h2>
            </li>
        </section>
    )
};

export default Book;
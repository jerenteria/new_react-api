import React from 'react';


const Book = (props) => {
    return (
        <section className="bookList">
            <li>{props.key}</li>
            <li>{props.name}</li>
            <li>{props.date}</li>
        </section>
    )
};

export default Book;
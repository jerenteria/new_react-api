import React from 'react';


const User = (props) => {
    return (
        <section className="userList">
            <li>
                <h2>{props.id}</h2>
                <h2>{props.name}</h2>
                <h2>{props.email}</h2>
            </li>
        </section>
    )
};

export default User;
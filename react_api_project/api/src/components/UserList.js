import React from 'react';
import User from './User';

const UserList = (props) => {
    <ul>
        {props.users.map((user) => (
            <User 
            id={user.id}
            name={user.name}
            email={user.email}
            />
        ))}
    </ul>
}

export default UserList;
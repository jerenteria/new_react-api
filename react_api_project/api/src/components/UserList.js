import React from 'react';
import User from './User';

const UserList = (props) => {
    return (
        <ul>
            {props.users.map((user) => (
                <User
                    name={user.name}
                    email={user.email}
                />
            ))}
        </ul>
    );
}

export default UserList;
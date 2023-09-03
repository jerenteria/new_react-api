import './App.css';
import React, { useState } from 'react';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => {
    return response.json();
  }).then(data => { 
    setUsers(data);
  });


  return (
    <section>
      <UserList users={users} />
    </section>
  );
}

export default App;

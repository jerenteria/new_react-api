import './App.css';
import React, { useState } from 'react';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    }).then(data => { 
      setUsers(data);
    });
  };


  return (
    <div class="container"> 
      <section class="rendered-data">
        <UserList users={users} />
        <button id="button" onClick={fetchData}>Fetch Data!</button>
      </section>
    </div>
  );
}

export default App;

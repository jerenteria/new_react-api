import './App.css';
import React, { useState } from 'react';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);


  const searchInput = document.querySelector("[dataSearch]")

  searchInput.addEventListener("input", e => {
    const value = e.target.value
    console.log(value)
  })

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
        <input type="search" id="search-bar" placeholder="Search..." dataSearch />
        <UserList users={users} />
        <button id="button" onClick={fetchData}>Fetch Data!</button>
      </section>
    </div>
  );
}

export default App;

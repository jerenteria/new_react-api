import './App.css';
import React, { useState } from 'react';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      }).then(data => {
        setUsers(data);
      });
  };

  // if we havent searched for anything yet show all the users
  const filterNames = query.length === 0 ? users :
  // if not filter the results by the input(get event.target.value in line 31 during onChange!)
  users.filter(users => users.name.toLowerCase().includes(query.toLowerCase()));


  return (
    <div class="container">
      <section class="rendered-data">
        <input type="search" 
        id="search-bar" 
        placeholder="Search..." 
        onChange={e => {
          setQuery(e.target.value) 
          }} 
          />
        <UserList users={filterNames} />
        <button id="button" onClick={fetchData}>Fetch Data!</button>
      </section>
    </div>
  );
}

export default App;

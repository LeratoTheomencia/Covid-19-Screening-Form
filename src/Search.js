import React, { useState } from 'react';

import './style.css';

const USERS = [
  { id: 1, name: 
  'Lerato', age: 20 },
  { id: 2, name: 
  'Palesa', age: 30 },
  { id: 3, name:
  'Thuto', age: 33},
  { id: 4, name:
  'Boitshoko', age: 50 },
  { id: 5, name: 
  'Masego', age: 25},
  { id: 6, name: 
  'Lindiwe', age: 30 },
  { id: 7, name: 
  'Kagisho', age: 16},
  { id: 8, name: 
  'Obakeng', age: 55 },
  { id: 9, name: 
  'Tshepo', age: 23 },
];

function Search() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
       
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search;
import React from 'react'
import { useState } from 'react';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const addUser = () =>{
    setUsers([...users, user]);
  }

  //derived state --> calculated from state/props
  const totalUsers = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUser = [... new Set(users)].length;

  return (
    <div>
      
      <h2>Total User: {totalUsers}</h2>
      <h2>Last User: {lastUser}</h2>
      <h2>Unique User: {uniqueUser}</h2>


      <input type="text" value={user} onChange={(e) =>{setUser(e.target.value)}}/>
      <button onClick={addUser}>add user</button>

      {
        users.map((item, index) =>{
          return (<h4 key={index}>{item}</h4>)
        })
      }

    </div>
  )
}

export default App
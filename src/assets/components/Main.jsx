import React from 'react';
import { useState } from 'react';
import usersData from "../data/users";

import Search from './Search';
import UsersMap from './UsersMap';


function Main() {
    let [inputVal, setInputVal] = useState("");
    let [users, setUsers] = useState(usersData);

      function handleDelete(id) {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );
  }

    let filteredUsers = users.filter((user) => {
        if(user.firstName.toLowerCase().includes(inputVal.toLowerCase())) {
            return user;
        }
    });
  return (
    <main className='grow'>
        <Search setInputVal={setInputVal}/>
        <UsersMap  
        users={filteredUsers}
        onDelete={handleDelete}
        />
    </main>

  )
}

export default Main;
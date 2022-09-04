import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import UserList from './components/UserList'
import "./App.css"
import axios from 'axios'

const App = () => {
const [persons, setpersons] = useState([]);
 useEffect(() => {
let result = axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => setpersons(res.data));
  
}, [])
  return (
    <div>
      <Header />
      <div className="list">
        {persons.map((el) => (
          <UserList user={el}/>
        ))}
      </div>
    </div>
  );
}

export default App
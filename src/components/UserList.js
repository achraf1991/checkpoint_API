import React from 'react'

const Person = ({user}) => {
  return (
    <div className="card">
      <img
        className="avatar"
        src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
        alt="kk"
      ></img>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <ul>
        <li>{user.address.street}</li>
        <li>{user.address.suite}</li>
        <li>{user.address.city}</li>
        <li>{user.address.zipcode}</li>
        
      </ul>
    </div>
  );
}

export default Person
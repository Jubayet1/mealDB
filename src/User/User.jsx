import React from 'react'
import { Link, Outlet } from 'react-router'

const User = ({user}) => {
    const userStyle = {
        border: "2px solid black",
        padding : "20px",
        borderRadius : "20px", 
    }
  return (
    <div style={userStyle}>
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
        <h4>{user.website}</h4>
        <h4>{user.phone}</h4>
        <button><Link to={`${user.id}`}>Go There</Link></button>
        <Outlet />
    </div>
  )
}

export default User
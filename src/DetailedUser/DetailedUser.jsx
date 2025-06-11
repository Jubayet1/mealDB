import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

const DetailedUser = () => {
    const user = useLoaderData();
    const userStyle = {
        border: "2px solid black",
        padding : "20px",
        borderRadius : "20px", 
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };
  return (
    <div style={userStyle}>
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
        <h4>{user.website}</h4>
        <h4>{user.phone}</h4>
        <button onClick={() => navigate(-1)}>User Page</button>
    </div>
  )
}

export default DetailedUser
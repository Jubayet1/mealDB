import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import User from '../User/User'
import "./Users.css"

const Users = () => {
    const users = useLoaderData()
  return (
    <div className='users'>
        <h1>Users</h1>
        {users.map((user) => {
            return <User key={user.id} user={user}></User>
        })}
    </div>
  )
}

export default Users
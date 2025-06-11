import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div>
        <h2>Hi from Home components</h2>
        <Header />
        <Outlet />
    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
        <h3>Header components</h3>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/menu'>Menu</Link>
        </nav>
    
    </div>
  )
}

export default Header
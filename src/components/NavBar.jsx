import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <h1> <Link to="/">Budget App!</Link></h1>
        <ul>
            <li>
                <Link to="/summary">Summary</Link>
            </li>
            <li>
                <Link to="/transactions">Transactions</Link>
            </li>
        </ul>
        <div className="userInfo">
        <h5>Welcome!</h5>
        <p>Username</p>
        </div> 
    </nav>
  )
}

export default NavBar

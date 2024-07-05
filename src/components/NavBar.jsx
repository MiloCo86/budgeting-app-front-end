import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/NavBar.css'

import defaultUserImg from '../assets/default-user-img.svg'


const NavBar = () => {
  return (
    <nav className='main_navbar'>
        <h1 className='title'> <Link to="/">Budget App!</Link></h1>
        <ul className='main-sites'>
            <li>
                <Link to="/summary">Summary</Link>
            </li>
            <li>
                <Link to="/transactions">Transactions</Link>
            </li>
        </ul>
        <div className="userInfo">
          <img src={defaultUserImg} alt="user img" />
          <div className="userInfo-details">
            <h5 className='user-welcome'>Welcome!</h5>
            <p className='username'>Username</p>
          </div>
        </div> 
    </nav>
  )
}

export default NavBar

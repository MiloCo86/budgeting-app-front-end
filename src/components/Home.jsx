import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'



const Home = () => {
    

  return (
    <div className='home-container'>
      <h1 className='home-title'>Welcome to Budget App!</h1>

      <Link className='home-links' to={'/summary'}>Summary</Link>

      <Link className='home-links' to={'/transactions'}>Transactions</Link>

    </div>
  )
}

export default Home

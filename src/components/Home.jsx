import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'



const Home = () => {
    

  return (
    <div>
      <h1 className='home-title'>Welcome to Budget App!</h1>

      <Link to={'/summary'}>Summary</Link>

      <Link to={'/transactions'}>Transactions</Link>

    </div>
  )
}

export default Home

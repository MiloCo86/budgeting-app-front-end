import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

//import components
import NavBar from './components/NavBar'
import Home from './components/Home'
import Transactions from './components/Transactions'


import './App.css'

function App() {


  return (
    <div className='main_container'>
      <NavBar />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Transactions />} />
        {/* <Route path='/transactions/new' element={<NewTransaction />} />
        <Route path='/transactions/:index' element={<ShowTransaction />} />
        <Route path='/transactions/:index/edit' element={<EditTransaction />} /> */}
      </Routes>
        
    </div>
  )
}

export default App

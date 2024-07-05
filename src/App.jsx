import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

//import components
import NavBar from './components/NavBar'
import Home from './components/Home'
import Transactions from './components/Transactions'
import ShowTransaction from './components/ShowTransaction'
import NewTransaction from './components/NewTransaction'
import EditTransaction from './components/EditTransaction'
import Summary from './components/Summary'


import './App.css'

function App() {


  return (
    <div className='main_container'>
      <NavBar />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/transactions/new' element={<NewTransaction />} />
        <Route path='/transactions/:idx' element={<ShowTransaction />} />
        <Route path='/transactions/:idx/edit' element={<EditTransaction />} />

      </Routes>
        
    </div>
  )
}

export default App

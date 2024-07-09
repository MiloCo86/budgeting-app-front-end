import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Transactions.css'

import newIcon from '../assets/new.svg'



const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const API = import.meta.env.VITE_BASE_URL

  useEffect(()=>{
      fetch(API)
          .then(res => res.json())
          .then(res => {
            setTransactions(res)
          })
          .catch(err => console.error(err))
  },[])

  const handleSort = (e)=>{
    const sortTransactions = [...transactions]

    switch(e.target.value){
      case "low":
        setTransactions(sortTransactions.sort((a,b)=>a.amount -b.amount))
        break;
      case "high":
        setTransactions(sortTransactions.sort((a,b)=>b.amount -a.amount))
        break;
      case "name":
        setTransactions(sortTransactions.sort((a,b)=>{
          if(a.description < b.description) { return -1; }
          if(a.description > b.description) { return 1; }
          return 0;
        }))
        break;      
    }
   
    
  }

  return (
    <div className='transactions-container'>
      <h3 className="transactions-title">Transactions</h3>
      <div className="sortAndNew">
        <select className='sort' name="sort" id="sort" onChange={handleSort}>
          <option value="" hidden></option>
          <option value="low">Price (low to high)</option>
          <option value="high">Price (high to low)</option>
          <option value="name">Name (A to Z)</option>
        </select>
        <Link className='newicon' to={'/transactions/new'}>
          <img src={newIcon} alt="New Transaction" />
        </Link>
      </div>
      <div className='transactions-list'>
        { transactions.map((transaction, idx) =>{
          return (
              <div key={idx}>
                  <Link className='transaction-element' to={`/transactions/${idx}`}>
                    <div>{transaction.date}</div>
                    <div>{transaction.description}</div>
                    <div>$ {transaction.amount}</div>
                  </Link>
              </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Transactions

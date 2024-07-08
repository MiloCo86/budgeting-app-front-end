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

  return (
    <div className='transactions-container'>
      <h3 className="transactions-title">Transactions</h3>
      
      <Link className='newicon' to={'/transactions/new'}>
        <img src={newIcon} alt="New Transaction" />
      </Link>
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

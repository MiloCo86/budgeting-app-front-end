import React, { useEffect, useState } from 'react'
import '../styles/Summary.css'

const Summary = () => {

    const [transactions, setTransactions] = useState([])
    const [totalAmount, setTotalAmount]= useState(0)
    const [totalTransactions, setTotalTransactions] = useState(0)

    const API = import.meta.env.VITE_BASE_URL

    useEffect(()=>{
        fetch(API)
            .then(res => res.json())
            .then(res => {
              setTransactions(res)
            })
            .catch(err => console.error(err))
    },[])

    useEffect(()=>{

        setTotalAmount(transactions.reduce((total,transaction)=> total+ Number(transaction.amount),0))
        setTotalTransactions(transactions.length)

    },[transactions])



  return (
    <div className='summary-container'>
      <h1>Transactions Summary</h1>
      <div className="total-summary">
        <h6>Number of transactions:</h6>
        <p>{totalTransactions}</p>
        <h6>Total Amount:</h6>
        <p>${totalAmount}</p>

      </div>
      
    </div>
  )
}

export default Summary

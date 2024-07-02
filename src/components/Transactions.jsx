import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



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
    <div>
      { transactions.map((transaction, idx) =>{
        return (
            <div key={idx}>
                <Link to={`/transaction/${idx}`}>{transaction.description}</Link>    
            </div>
        )
      })
      }
    </div>
  )
}

export default Transactions

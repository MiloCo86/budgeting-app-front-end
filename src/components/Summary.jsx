import React, { useEffect, useState } from 'react'

const Summary = () => {

    const [transactions, setTransactions] = useState([])
    const [total, setTotal]= useState(0)

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

        setTotal(transactions.reduce((total,transaction)=> total+ Number(transaction.amount),0))

    },[transactions])



  return (
    <div>
      {total}
    </div>
  )
}

export default Summary

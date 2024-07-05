import React, { useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import '../styles/ShowTransaction.css'

import deleteIcon from '../assets/delete.svg'
import editIcon from '../assets/edit.svg'
import closeIcon from '../assets/close.svg'

const ShowTransaction = () => {
  const {idx} = useParams()

  const [transaction, setTransaction] = useState({})
  const API = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()

  const handleDelete= () =>{

    if(window.confirm('Are you sure you want to delete')){

      fetch(`${API}/${idx}`,{
        method:"DELETE"
        })
          .then(res => res.json())
          .then(res => {
            navigate('/transactions')
          })
          .catch(err=> console.error(err))
      }

    }  
  
  useEffect(()=>{
      fetch(`${API}/${idx}`)
        .then(res => res.json())
        .then(res => {
          setTransaction(res)
        })
        .catch(err => console.error(err))
  },[])

  return (
    <div className='transaction-container'>
      <Link to={'/transactions'} className='closeicon'>
        <img  src={closeIcon} alt="Close transaction"/>
      </Link>
      <h2>Transaction Details</h2>
      <div className="icons">
        <Link to={`/transactions/${idx}/edit`}>
          <img src={editIcon} alt="Edit transaction"/>
        </Link>
        <img onClick={handleDelete} src={deleteIcon} alt="Delete transaction"/>
      </div>
      <div className="id-and-date">
        <h6 className='static-keys'>Id:</h6>
        <p className='transaction-values'>{transaction.id}</p>
        <h6 className='static-keys'>Date:</h6>
        <p className='transaction-values'>{transaction.date}</p>
      </div>
      <h6 className='static-keys description-title' >Description</h6>
      <p className='transaction-values description'>{transaction.description}</p>
      <div className="type-amount">
        <h6 className='static-keys'>Type:</h6>
        <p className='transaction-values'>{transaction.type}</p>
        <h6 className='static-keys'>Amount:</h6>
        <p className='transaction-values amount'>$ {transaction.amount}</p>
      </div>
    </div>
  )
}

export default ShowTransaction

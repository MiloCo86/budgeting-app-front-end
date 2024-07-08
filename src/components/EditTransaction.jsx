import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

import '../styles/EditTransaction.css'

import closeIcon from '../assets/close.svg'

const EditTransaction = () => {
    const API = import.meta.env.VITE_BASE_URL
    const [transaction, setTransaction] = useState({
        date: "",
        description: "",
        type: "",
        amount: 0
    })
    const navigate = useNavigate()
    const { idx } = useParams()

    useEffect(() => {
        fetch(`${API}/${idx}`)
            .then(res => res.json())
            .then(res => {
                setTransaction((prevState) => res)
            })
            .catch(err => console.log(err))
    }, [idx])

    const handleChange = (e) => {
        // console.log(e)
        setTransaction((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${API}/${idx}`,{
            method:"PUT",
            body: JSON.stringify(transaction),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res =>{
                console.log(res)
                navigate(`/transactions/${idx}`)
            })
            .catch()
        
    }

    if(!transaction) return <div>Loading...</div>
    return (
        
        <form className='editTransaction-container' onSubmit={handleSubmit}>
            
            <fieldset className='editTransaction-form'>
                <Link to={`/transactions/${idx}`} className='editTransaction-CloseIcon'>
                    <img  src={closeIcon} alt="Close transaction"/>
                </Link>
                <legend className='editTransaction-title'>Edit this transaction</legend>
                <label htmlFor="id">Id:</label>
                <input
                    className='editTransaction-input'
                    type="text"
                    placeholder="Transaction ID"
                    name="id"
                    value={transaction.id}
                    readOnly
                    disabled
                />
                <label htmlFor="date">Date:</label>
                <input 
                    className='editTransaction-input'
                    type="date"
                    placeholder="Transaction Date"
                    name="date"
                    value={transaction.date}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
                <input 
                    className='editTransaction-input'
                    type="text" 
                    placeholder='Description'
                    name="description"
                    value={transaction.description}
                    onChange={handleChange}
                />
                <label htmlFor="type">Type:</label>
                <select className='editTransaction-input' name="type" id="type" onClick={handleChange}>
                    <option value="" selected hidden></option>
                    <option value="Groceries">Groceries</option>
                    <option value="Personal">Personal</option>
                    <option value="Banking">Banking</option>
                    <option value="Rent">Rent</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="amount">Amount:</label>
                <input
                    className='editTransaction-input' 
                    type="text"
                    placeholder='Amount'
                    name="amount"
                    value={transaction.amount}
                    onChange={handleChange}
                />
                <br/>
                    <input className='editTransaction-btn' type="submit" value="Submit"/>
            </fieldset>
        </form>
        
    );
};

export default EditTransaction; 
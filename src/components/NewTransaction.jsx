import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import '../styles/NewTransaction.css'

import closeIcon from '../assets/close.svg'

const NewTransaction = () => {
    const navigate = useNavigate()
    const [newTransaction, setNewTransaction] = useState({
        date: "",
        description: "",
        type: "",
        amount: 0
    })
    const API = import.meta.env.VITE_BASE_URL

    const handleChange = (e) => {
        console.log(e.target.value)
        setNewTransaction((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        newTransaction.amount = Number(newTransaction.amount)
        fetch(API,{
            method:"POST",
            body: JSON.stringify(newTransaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                navigate('/transactions')
            })
            .catch(err=>console.log(err))
    }

    return (
        <form className='newTransaction-container' onSubmit={handleSubmit}>
            
            <fieldset className='newTransaction-form'>
                <Link to={'/transactions'} className='newTransaction-CloseIcon'>
                    <img  src={closeIcon} alt="Close transaction"/>
                </Link>
                <legend className='newTransaction-title'>New Transaction</legend>
                <label htmlFor="date">Date:</label>
                <input
                    className='newTransaction-input'
                    type="date"
                    placeholder="Transaction Date"
                    name="date"
                    value={newTransaction.date}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    className='newTransaction-input'
                    type="text" 
                    placeholder='Description'
                    name="description"
                    value={newTransaction.description}
                    onChange={handleChange}
                />
                <label htmlFor="type">Type:</label>
                <select className='newTransaction-input' name="type" id="type" onClick={handleChange}>
                    <option value="" selected hidden></option>
                    <option value="Groceries">Groceries</option>
                    <option value="Personal">Personal</option>
                    <option value="Banking">Banking</option>
                    <option value="Rent">Rent</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="amount">Amount:</label>
                <input
                    className='newTransaction-input' 
                    type="text"
                    placeholder='Amount'
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleChange}
                />
                <br/>
                <input className='newTransaction-btn' type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default NewTransaction;
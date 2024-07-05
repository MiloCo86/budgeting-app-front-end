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
        <form onSubmit={handleSubmit}>
            <Link to={'/transactions'} className='closeicon'>
                <img  src={closeIcon} alt="Close transaction"/>
            </Link>
            <fieldset>
                <legend>New Transaction</legend>
                <input 
                    type="date"
                    placeholder="Transaction Date"
                    name="date"
                    value={newTransaction.date}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Description'
                    name="description"
                    value={newTransaction.description}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Type'
                    name="type"
                    value={newTransaction.type}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text"
                    placeholder='Amount'
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleChange}
                />
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default NewTransaction;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

import closeIcon from '../assets/close.svg'

const EditTransaction = () => {
    const API = import.meta.env.VITE_BASE_URL
    const [transaction, setTransaction] = useState({
        id:"",
        name: "",
        url: "",
        category: "",
        is_favorite: false
    })
    const navigate = useNavigate()
    const { idx } = useParams()

    useEffect(() => {
        fetch(`${API}/${idx}`)
            .then(res => res.json())
            .then(res => {
                // console.log("Edit page: ", res)
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
        <div>
            <form onSubmit={handleSubmit}>
                <Link to={`/transactions/${idx}`} className='closeicon'>
                    <img  src={closeIcon} alt="Close transaction"/>
                </Link>
                <fieldset>
                    <legend>Edit this transaction</legend>
                    <input 
                    type="text"
                    placeholder="Transaction ID"
                    name="id"
                    value={transaction.id}
                    readOnly
                    />
                    <br/>
                    <input 
                    type="date"
                    placeholder="Transaction Date"
                    name="date"
                    value={transaction.date}
                    onChange={handleChange}
                    />
                    <br/>
                    <input 
                        type="text" 
                        placeholder='Description'
                        name="description"
                        value={transaction.description}
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        type="text" 
                        placeholder='Type'
                        name="type"
                        value={transaction.type}
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        type="text"
                        placeholder='Amount'
                        name="amount"
                        value={transaction.amount}
                        onChange={handleChange}
                    />
                    <br/>
                        <input type="submit" value="Submit"/>
                </fieldset>
            </form>
        </div>
    );
};

export default EditTransaction; 
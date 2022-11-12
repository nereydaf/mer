import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
const EditItem = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const {varId} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + varId)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.log('that didnt work',err))
    }, [varId])

    const EditItem = (e) =>{
        e.preventDefault();
        console.log(title, price, description)
        axios.put("http://localhost:8000/api/product/" + varId, {title, price, description})
        .then(res => {
            console.log("added to server")
            console.log(res.data)
            navigate("/items")
        })
        .catch(err => {
            console.log("didn't add")
            console.log(
                err
            )
        })
    }

    return (
        <div>
        state variables <br/>
        {JSON.stringify(title)} <br/>
        {JSON.stringify(price)} <br/>
        {JSON.stringify(description)} <br/>
        <label>Change Item for Sale</label>
        <form onSubmit={EditItem}>
            Title: <input onChange ={e => setTitle(e.target.value)} value={title}/> <br/>
            Price: <input type="number" min="1" onChange ={e => setPrice(e.target.value)} value={price}/> <br/>
            Description: <input onChange ={e => setDescription(e.target.value)} value={description}/> <br/>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default EditItem
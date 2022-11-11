import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Add = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const AddItem = (e) =>{
        e.preventDefault();
        console.log(title, price, description)
        axios.post("http://localhost:8000/api/product", {title, price, description})
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
            <label>Add Item for Sale</label>
            <form onSubmit={AddItem}>
                Title: <input onChange ={e => setTitle(e.target.value)} value={title}/> <br/>
                Price: <input type="number" min="1" onChange ={e => setPrice(e.target.value)} value={price}/> <br/>
                Description: <input onChange ={e => setDescription(e.target.value)} value={description}/> <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Add
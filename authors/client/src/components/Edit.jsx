import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = (props) => {
    const [name, setName] = useState("");
    const {varId} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author/" + varId)
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
        })
        .catch(err => console.log('that didnt work',err))
    }, [varId])

    const EditAuthor = (e) =>{
        e.preventDefault();
        console.log(name)
        axios.put("http://localhost:8000/api/author/" + varId, {name})
        .then(res => {
            console.log("added to server")
            console.log(res.data)
            navigate('/author')
        })
        .catch(err => {
            console.log("didn't add", err)
        })
    }

    return (
        <div>
            {JSON.stringify(name)}
            Edit Author
            <form onSubmit={EditAuthor}>
                Name: <input onChange={e => setName(e.target.value)} value={name}></input><br/>
                <button>Edit Author</button>
            </form>
        </div>
    )
}

export default Edit
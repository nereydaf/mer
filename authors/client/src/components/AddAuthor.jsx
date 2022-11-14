import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const AddAuthor = (e) =>{
        e.preventDefault();
        console.log(name)
        axios.post("http://localhost:8000/api/author", {name})
        .then( res =>{
            console.log('added to server')
            console.log(res.data)
            navigate("/author")
        })
        .catch(err =>{
            console.log("didn't add", err)
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }

    return (
        <div>
            {JSON.stringify(name)}<br/>
            <>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </>
            <h2>Add an Author</h2>
            <form onSubmit={AddAuthor}>
                Name: <input onChange={e => setName(e.target.value)} value={name}></input><br/>
                <button>Add Author</button>
            </form>
        </div>
    )
}

export default AddAuthor
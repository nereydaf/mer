import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    //get the authors from db
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/")
        .then(res => {
            console.log(res.data)
            setAuthors(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const goToEdit = (authId) => {
        navigate("/authors/"+authId+"/edit")
    }

    const deleteAuthor = (authId) => {
        console.log("delete" + authId)
        axios.delete("http://localhost:8000/api/author/" + authId)
        .then(res => {
            console.log('delete successful')
            setAuthors(authors.filter((author) => author._id !== authId))
        })
        .catch(err => {
            console.log("error deleting", err)
        })
    }
    return (
        <div>
            {/* {JSON.stringify(authors)} */}
            <h1>Authors in your Collection</h1> 
            {
                authors.map((oneAuthor)=> {
                    return(
                        <div key={oneAuthor._id}>
                            <Link to={`/authors/${oneAuthor._id}`}><h3>{oneAuthor.name}</h3></Link>
                            <button onClick={()=> goToEdit(oneAuthor._id)}>Edit</button>
                            <button onClick={()=> deleteAuthor(oneAuthor._id)}>Delete</button>
                        </div>
                    )
                })
                
            }
        </div>
    )
}

export default Main
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Author = (props) => {
    const {varId} = useParams();
    const [thisAuthor, setAuthor] = useState(null);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author/" + varId)
        .then(res => {
            console.log(res.data)
            setAuthor(res.data)
        })
        .catch(err => console.log("that didn't work", err))
    }, [varId])
    return (
        <div>Author
        {thisAuthor ? (
            <>
            <h1>{thisAuthor.name}</h1>
            </>
        ): "loading...."}
        </div>
    )
}

export default Author
import React from 'react';
import {useState, useEffect} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Add from './Add';

const Home = (props) => {
    const [items, setItems] = useState([])
    const navigate = useNavigate();

    //get all the products
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then(res => {
            console.log(res.data)
            setItems(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    ,[])

    const goToUpdate = (itemId) =>{
        navigate("/items/"+itemId+"/edit")
    }

    const deleteItem = (itemId) => {
        console.log("delete the item " + itemId)
        axios.delete("http://localhost:8000/api/product/" + itemId)
        .then( res => {
            console.log("delete successful", res.data)

            setItems(items.filter((item) => item._id !== itemId))
        })
        .catch( err => {
            console.log("error deleting", err)
        })
    }
    return (
        <div>
            {/* {JSON.stringify(items)} */}
            <Add/>
            {
                items.map((oneItem)=>{
                    return(
                        <div key={oneItem._id}>
                            <Link to={`/items/${oneItem._id}`}><h3>{oneItem.title}</h3></Link>
                            <h5>{oneItem.price}</h5>
                            <button onClick={() => goToUpdate(oneItem._id)}>Edit</button>
                            <button onClick={() => deleteItem(oneItem._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
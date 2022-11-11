import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Add from './Add';

const Home = (props) => {
    const [items, setItems] = useState([])

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
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
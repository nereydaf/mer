import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Item = (props) => {
    const {varId} = useParams();
    const [thisItem, setThisItem] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + varId)
        .then(res => {
            console.log(res.data)
            setThisItem(res.data)
        })
        .catch(err => console.log('that didnt work',err))
    }, [varId])

    return (
        <div>
            {thisItem ?(
                <div>
                    <h1>{thisItem.title}</h1> <br/>
                    <h3>{thisItem.price}</h3> <br/>
                    {thisItem.description}
                </div>
                
            ): "loading..."
            }
        </div>
    )
}

export default Item
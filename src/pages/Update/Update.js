import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {inventoryId} = useParams()
    console.log(inventoryId)
    const [update,setUpdate] = useState({})
    useEffect(()=>{
        fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/${inventoryId}`, 
        {
            headers : { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                           }
        }
        )
        .then(res => res.json())
        .then(data => setUpdate(data))
    },[inventoryId])
    return (
        <div className='mt-5'>
            <h2 className='mt-5'>this is the update page {update.name}</h2>
            
        </div>
    );
};

export default Update;
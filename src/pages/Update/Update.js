import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {inventoryId} = useParams()
    const [update,setUpdate] = useState({})
    const [reload, setReload] = useState(true)

    useEffect(()=>{
        fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/${inventoryId}`
 )
        .then(res => res.json())
        .then(data => setUpdate(data))
    },[inventoryId,reload])

   

    const deliveryBtn = (event) => {
        
       let quantity = `${update.quantity}` -1
    
       const updateQuantity = {quantity}

       fetch(`http://localhost:5000/inventory/${inventoryId}`,{
           method: 'PUT',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(updateQuantity)

       })
       .then(response => response.json())
       .then(result => {
          alert('quantity update successfully')

       })
         
    }
    return (
        <div className='mt-5 mx-auto w-50'>
            <img className='mt-4' src={update.img} alt="" />
            <h2 className='text-secondary'>Name: {update.name}</h2>
            <h2 className='text-secondary'>Quantity: {update.quantity}</h2>
            <h3 className='text-secondary'>Price: {update.price}$</h3>
            <p className='text-secondary'> Description: {update.description} </p>
            <button className='mb-3' onClick={()=>deliveryBtn(inventoryId)}>Delivered</button>
            
        </div>
    );
};

export default Update;
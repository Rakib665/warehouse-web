import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {_id,name,price,img,quantity,description} = item
    const navigate = useNavigate()
    const updateItem = (id)=>{
        navigate(`/inventory/${id}`)

    }
    return (
        <div className='each-item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-secondary mx-auto ' onClick={()=> updateItem(_id)}>Update</button>
        </div>
    );
};
 
export default Item;
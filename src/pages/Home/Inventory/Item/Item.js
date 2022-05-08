import React from 'react';

const Item = ({item}) => {
    const {name,price,img,quantity,description} = item
    return (
        <div className='each-item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity: {quantity}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-secondary mx-auto'>Update</button>
        </div>
    );
};
 
export default Item;
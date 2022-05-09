import React, { useEffect, useState } from 'react';
import Item from '../Inventory/Item/Item'
import './Inventory.css'

const Inventory = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch('https://sleepy-springs-76170.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div id="items" className='container'>
        <div className="row">
        <h1 className='text-secondary text-center mt-6'> Our Inventories</h1>
        <div className="items-container">
        {
           items.slice(0,6).map(item => <Item
           key={item._id}
           item = {item}
           ></Item>

           )
        }
        </div>
        </div>
    </div>
    );
};

export default Inventory;
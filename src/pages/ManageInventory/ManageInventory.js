import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageAllInventory from '../ManageAllInventory/ManageAllInventory';

const ManageInventory = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch('https://sleepy-springs-76170.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center bold'>Manage Inventory Page</h2>
            {
                items.map(manageItem => <ManageAllInventory
                key={manageItem._id}
                manageItem={manageItem}
                ></ManageAllInventory> )
            }

           <div className='w-50 mx-auto'>
           <Link to='/additem' ><button className='btn btn-secondary w-50'>Add Item</button></Link>
           </div>
        </div>
    );
};

export default ManageInventory;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Update = () => {
    const { inventoryId } = useParams()
    const [update, setUpdate] = useState({})
    // const [reload, setReload] = useState(true)

    useEffect(() => {
        fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/${inventoryId}`
        )
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [inventoryId])



    const deliveryBtn = (event) => {

        let quantityUpdate = `${update.quantity}` - 1

        const updateQuantity = {quantity: quantityUpdate }

        fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)

        })
            .then(response => response.json())
            .then(result => {
                toast('quantity update successfully')
                window.location.reload()

            })

    }

    const handleRestock = (event) =>{
        event.preventDefault()
        const restock = parseInt(event.target.restock.value);
        const quantity = parseInt(`${update.quantity}`) +restock
        const updateQuantity = {quantity}
        fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/${inventoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)

        })
            .then(response => response.json())
            .then(result => {
                alert('Restock update successfully')
                window.location.reload()


            })
    }
    return (
        <div >
           <div className='mt-5 mx-auto w-50 d-flex '>
           <div>
                <img className='mt-4' src={update.img} alt="" />
            </div>

            <div className='mt-4 ms-3'>
                <h2 className='text-secondary mt-4'>Name: {update.name}</h2>
                <h4 className='text-secondary'>Supplier Name: {update.supplier_name}</h4>
                <h2 className='text-secondary'>Quantity: {update.quantity}</h2>
                <h3 className='text-secondary'>Price: {update.price}$</h3>
                <p className='text-secondary'> Description: {update.description} </p>
                <button className='mb-3' onClick={() => deliveryBtn(inventoryId)}>Delivered</button>
                <br />
                <form onSubmit={handleRestock}>
                    <input type="number" name="restock" placeholder='you can restock' />
                    <input className='ms-2' type="submit" value="Restock" />
                </form>
            </div>
           </div>

            <div className='w-50 mx-auto mt-5'>
                <Link to='/manage'><button className='btn btn-secondary'>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Update;
import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            alert('Add Item successfully')
            window.location.reload()
        })

    }

    return (
        <div className='mt-5 text-center'>
            <h2 className='text-secondary'>ADD NEW ITEM</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'   {...register("name")} />
                <br />
                <input className='mb-3' placeholder='Supplier Name'   {...register("supplier_name")} />
                <br />
                <input className='mb-3' placeholder='Description' {...register("description")} />
                <br />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <br />
                <input className='mb-3' placeholder='Photo Url' type="text" {...register("img")} />
                <br />
                <input className='mb-3' placeholder='Quantity' type="text" {...register("quantity")} />
                <br />
                <input className='mb-3' type="submit" value='Add Service' />

                </form>
            </div>
        </div>
    );
};

export default AddItem;
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllInventory = ({ manageItem }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://sleepy-springs-76170.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const { _id, name, img, supplier_name, quantity, price } = manageItem;
    const deleteItem = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(i => i._id !== id)
                    setItems(remaining)
                })
        }

    }
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Item QUantity</th>
                        <th>Item supplier Name</th>
                        <th>Item Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img
                                            className='rounded-pill'
                                            src={img}
                                            alt=""
                                            style={{ width: "45px", height: "45px" }}

                                        /></td>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{supplier_name}</td>
                        <td>{price}</td>
                        <td><button onClick={() => deleteItem(_id)}>Delete</button></td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllInventory;
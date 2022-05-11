import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/oading';



const MyItems = () => {
    const [user, loading] = useAuthState(auth)
    const [items, setItems] = useState([])
    if (loading) {
        <Loading></Loading>
    }
    let email;
    email = user?.email
    console.log(email)
    useEffect(() => {
        fetch(`https://sleepy-springs-76170.herokuapp.com/inventory?email=${email}`)
            .then(res => res.json())
            .then(data => {
               const datas= data.filter(item => item.email === email)
               setItems(datas)
            })
    }, [])

    const handleDeleteItem = id => {
        // console.log(id)

        const proceed = window.confirm('Are you sure?')

        if (proceed) {

            fetch(`https://sleepy-springs-76170.herokuapp.com/inventory/${id}`, {
                method: 'DELETE',
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
            
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id)

                    setItems(remaining)
                    toast('delete successfully')
                })


        }

    }

    return (
        <div>
            <div className='py-5'>

                <Table className="table align-middle mb-0 bg-white table-responsive " >
                    <thead className="fw-bold gradient-custom text-white shadow">
                        <tr>
                            <th>Item Name</th>
                            <th>Item QUantity</th>
                            <th>Item supplier Name</th>
                            <th>Item Price</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            items.map(item => <tr  key={item._id}>
                                <td>
                                    <div className="d-flex   align-items-center">
                                        <img
                                            className='rounded-pill'
                                            src={item.img}
                                            alt=""
                                            style={{ width: "45px", height: "45px" }}

                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{item.name}</p>

                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <p className="fw-bold  mb-1">{item.price}</p>

                                </td>
                                <td>
                                    <p className="fw-bold mb-1">{item.quantity}</p>

                                </td>
                                <td>
                                    <p className="fw-bold mb-1">{item.supplier}</p>

                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item._id)} type="button" className="btn btn-dark btn-sm rounded-pill">
                                        <i className="fa-solid fa-trash"></i> Delete
                                    </button>
                                </td>


                            </tr>
                            )
                        }

                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default MyItems;
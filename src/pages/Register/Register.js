import React, { useState } from 'react';
import './Register.css'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const [agree,setAgree] = useState('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = async(event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email,password)

        navigate('/home')
        
        
    }
    return (
        <div className='register-form mt-5'>
            <h2 className='reg'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name"  placeholder='Your Name' />

                <input type="email" name="email"  placeholder='Email Address' required />

                <input type="password" name="password"  placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className='mx-3' htmlFor="terms">All Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>

        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [agree, setAgree] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,


    ] = useSignInWithEmailAndPassword(auth)



    const handleLogIn = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email,password)
        



    }
    return (
        <div className='mt-5 register-form'>
            <h2 className='reg'>Please Login</h2>
            <form onSubmit={handleLogIn}>

                <input type="email" name="email" placeholder='Email Address' required />

                <input type="password" name="password" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className='mx-3 text-secondary' htmlFor="terms">Accept All Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>If you are a new user? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
            <p></p>

        </div>
    );
};

export default Login;
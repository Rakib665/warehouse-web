import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/oading';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
    const [agree, setAgree] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth)

    const [sendEmailVerification, sending] = useSendEmailVerification(auth)

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if(user){
        navigate(from, { replace: true });

    }



    const handleLogIn = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email,password)



    }

    // const sendEmailVerify = () => {

    // }
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
            {errorElement}
            <p>If you are a new user? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
            <p>If email is not verify? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}>Verify Email</button> </p>

            <SocialLogin> </SocialLogin>
        </div>
    );
};

export default Login;
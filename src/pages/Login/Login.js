import React, { useState } from 'react';

const Login = () => {
    const [agree,setAgree] = useState('')

    const handleLogIn = async (event) =>{
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)
    }
    return (
        <div className='mt-5 register-form'>
              <h2 className='reg'>Please Login</h2>
            <form onSubmit={handleLogIn}>

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className='mx-3 text-secondary' htmlFor="terms">Accept All Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
        </div>
    );
};

export default Login;
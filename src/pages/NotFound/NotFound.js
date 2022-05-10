import React from 'react';
import notFound from './404.jpg'

const NotFound = () => {
    return (
        <div className='mt-5 p-lg-5 w-50 mx-auto'>
            <img  src={notFound} alt="" />
            
        </div>
    );
};

export default NotFound;
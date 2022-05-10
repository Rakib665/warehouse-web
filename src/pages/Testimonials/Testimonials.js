import React from 'react';
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='mt-5 container'>
            <h2 className='text-center'>Testimonials</h2>

            <div className='tes-header d-flex'>
                <div className='customer-comment w-50 mx-auto'>
                    <p>A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.</p>
                </div>
                <div className='customer-comment'>
                    <p>A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.</p>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
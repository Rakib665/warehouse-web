import React from 'react';
import './WhyChoosingUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleRight, faAlignRight } from '@fortawesome/free-solid-svg-icons'



const OurServices = () => {
    return (
        <div className='mt-5 w-75 mx-auto'>
            <h2 className='text-center title'>Why Choosing Us?</h2>
            <div>
                <div className=' p-2 heading'>
                    <h2 className='text-center text-light'>We are Creative and Professional</h2>
                </div>
                <div className='details mb-2'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quaerat quisquam sapiente veritatis minus, iste et, numquam, officiis labore distinctio asperiores at? Quae blanditiis, nam rem ullam alias accusantium debitis dolores culpa consectetur distinctio harum quia nobis aliquid. Laborum, quaerat?</p>
                </div>
                <div className='p-2 expertness mb-sm-1'>
                    <h3 className='txt'><FontAwesomeIcon icon={faAlignRight} className='me-2 '/> Honest And Dependable</h3>
                </div>
                <div className='p-2 expertness mb-sm-1'>
                    <h3 className='txt'><FontAwesomeIcon icon={faAlignRight} className='me-2 '/>Quality Commitment</h3>
                </div>
                <div className='p-2 expertness mb-2'>
                    <h3 className='txt'><FontAwesomeIcon icon={faAlignRight} className='me-2'/>We Are Always Improving</h3>
                </div>

            </div>
        </div>
    );
};

export default OurServices;
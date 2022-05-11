import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="carousel-img d-block w-100"
                        src="https://i.ibb.co/Km0fQDJ/banner2.jpg"

                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://i.ibb.co/F89TYhX/banner1.jpg"

                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://i.ibb.co/BcCFw3y/banner3.jpg"
                        alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
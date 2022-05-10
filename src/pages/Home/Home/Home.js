import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner'
import Inventory from '../Inventory/Inventory';
import WhyChoosingUs from '../../WhyChoosingUs/WhyChoosingUS'
import Footer from '../../Footer/Footer';
// import Testimonials from '../../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Inventory></Inventory>
            <WhyChoosingUs></WhyChoosingUs>
            {/* <Testimonials></Testimonials> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;
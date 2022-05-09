import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner'
import Inventory from '../Inventory/Inventory';
import WhyChoosingUs from '../../WhyChoosingUs/WhyChoosingUS'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Inventory></Inventory>
            <WhyChoosingUs></WhyChoosingUs>
        </div>
    );
};

export default Home;
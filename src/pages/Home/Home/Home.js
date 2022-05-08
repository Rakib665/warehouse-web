import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner'
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;
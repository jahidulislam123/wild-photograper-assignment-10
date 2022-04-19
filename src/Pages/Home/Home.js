import React from 'react';
import Banner from './Banner/Banner';
import Experts from './Home/Experts/Experts';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Experts></Experts>
        </div>
    );
};

export default Home;
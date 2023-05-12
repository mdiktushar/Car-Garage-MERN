import React from 'react';
import HomeBanner from './Components/Banner/HomeBanner';
import About from './Components/About/About';
import Services from './Components/Services/Services';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <About />
            <Services />
        </div>
    );
};

export default Home;
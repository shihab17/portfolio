import React from 'react';
import PFiveJS from '../Project/PFiveJS/PFiveJS';
import Navbar from '../Shared/Navbar/Navbar';
import SocialButtons from '../Shared/SocialButtons/SocialButtons';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SocialButtons></SocialButtons>
            <PFiveJS></PFiveJS>
        </div>
    );
};

export default Home;
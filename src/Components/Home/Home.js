import React from 'react';
import Projects from '../Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import SocialButtons from '../Shared/SocialButtons/SocialButtons';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SocialButtons></SocialButtons>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;
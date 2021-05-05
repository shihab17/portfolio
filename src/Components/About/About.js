import React from 'react';
import AboutHeader from './AboutHeader/AboutHeader';
import './About.css';
import Skills from '../Skills/Skills';
const About = () => {
    return (
        <div className="p-5">
            <div className="row about-header p-2 m-5 ">
                <AboutHeader></AboutHeader>
            </div>
            <br/>
            <div className="row p-5">
                <Skills></Skills>
            </div>
        </div>
    );
};

export default About;
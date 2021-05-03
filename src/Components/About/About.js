import React from 'react';
import AboutHeader from './AboutHeader/AboutHeader';
import './About.css';
import Skills from '../Skills/Skills';
const About = () => {
    return (
        <div>
            <div className="row">
                <AboutHeader></AboutHeader>
            </div>
            <br/>
            <div className="row">
                <Skills></Skills>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import AboutHeader from './AboutHeader/AboutHeader';
import './About.css';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
const About = () => {
    return (
        <div className="p-5 my-bg">
            <div className="row about-header p-2 m-5 ">
                <AboutHeader></AboutHeader>
            </div>
            <br/>
            <div className="row p-5">
                <Skills></Skills>
            </div>
            <div className="row p-5">
                <Education></Education>
            </div>
        </div>
    );
};

export default About;
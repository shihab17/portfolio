import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../About.css';
const AboutHeader = () => {
    return (
        <section className="d-flex align-items-center row  ">
            <div className="d-flex justify-content-center  col-md-6">
                <img style={{ width: '70%' }} className="p-5" src="https://raw.githubusercontent.com/shihab17/personal-website/main/images/shihab-ahmed.png" alt="" />
            </div>
            <div className="text-right col-md-6">
                <span className="">
                    <h1 className="hello hello-animation">HELLO, I A'M</h1> <br />
                    <h2 className="name name-animation">SHIHAB AHMED EFTY</h2>
                </span>
                <p className="text-white">I count myself as a creative and hardworking person and a passionate web developer</p>
                <br />
                <Link class="my-btn p-3 text-white text-decoration-none" to="/contact">Contact Me</Link>
                <a className="p-3 my-resume-btn text-white text-decoration-none m-2" href='../../../file/Shihab_Ahmed_Efty_Resume.pdf' download> <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download Resume</a>
            </div>
        </section>
    );
};

export default AboutHeader;
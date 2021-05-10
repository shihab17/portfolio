import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../About.css';
const AboutHeader = () => {
    return (
        <section className="d-flex align-items-center row  ">
            <div className="d-flex justify-content-center  col-md-6">
                {/* <img style={{ width: '70%' }} className="p-5" src="https://raw.githubusercontent.com/shihab17/personal-website/main/images/shihab-ahmed.png" alt="" /> */}
                <img style={{ width: '90%' }} src="https://i.ibb.co/fvxcsDr/Shihab-Ahmed-Efty-removebg-preview.png" alt="Shihab-Ahmed-Efty" border="0"></img>
            </div>
            <div className="text-right col-md-6">
                <span className="">
                    <h1 className="hello ">HELLO, I A'M</h1> <br />
                    <h2 className="hello">SHIHAB AHMED EFTY</h2>
                </span>
                <h5 className="my-tittle"> Front-end Developer</h5>
                <p className="my-tittle"> I count myself as a creative and hardworking person and a passionate web developer</p>
                <br />
                {/* <Link class="my-btn p-3 text-white text-decoration-none" to="/contact">Contact Me</Link> */}
                <a className="m-1 p-3 my-resume-btn  text-decoration-none" href='https://drive.google.com/file/d/1pWejGsfB6Kfi3-D1nFmAE-HB2om8NMa2/view?usp=sharing' target='_blank' download> <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon> Download CV</a>
            </div>
        </section>
    );
};

export default AboutHeader;
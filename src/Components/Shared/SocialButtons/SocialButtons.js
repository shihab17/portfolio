import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialButtons = () => {
    return (
        <div className="d-flex justify-content-center my-bg">
            <a href="http://github.com/shihab17" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="p-3 fa-4x text-white" icon={faGithub}></FontAwesomeIcon> </a>
            <a href="http://linkedin.com/in/shihab-ahmed-efty" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon className="p-3 fa-4x text-white" icon={faLinkedinIn}></FontAwesomeIcon></a>
            <a href="http://facebook.com/shihabahmed17" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className="p-3 fa-4x text-white" icon={faFacebook}></FontAwesomeIcon></a>
        </div>
    );
};

export default SocialButtons;
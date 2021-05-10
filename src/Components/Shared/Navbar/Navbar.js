import { faFileAlt, faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBlog, faHome, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light my-navbar ">
        <div className="container-fluid">
          <Link style={{ color:'white',fontFamily: 'monospace' }} className="navbar-brand p-2" to='/'>Shihab Ahmed</Link>
          <button className="navbar-toggler "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon " style={{ color: '#3DEAA4' }}> <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link className=" p-3 my-nav-link" aria-current="page" to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</Link>
              <Link className="p-3 my-nav-link" to='/about'> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> About</Link>
              <Link className=" p-3 my-nav-link" to='/projects'> <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon> Projects</Link>
              <Link className=" p-3 my-nav-link" to='/blog'> <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog</Link>
              <Link className="p-3 my-nav-link" to='/contact'> <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon> Contact</Link>
              <a className=" p-3 my-resume-btn  text-decoration-none" href='https://drive.google.com/file/d/1pWejGsfB6Kfi3-D1nFmAE-HB2om8NMa2/view?usp=sharing' target='_blank' download> <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon> Download CV</a>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
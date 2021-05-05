import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faBlog, faDownload, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-lg navbar-light my-navbar ">
        <div className="container-fluid">
          <Link style={{ color:'white', fontSize: '32px', fontFamily: 'monospace' }} className="navbar-brand p-2" to='/'>Shihab</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link className=" p-3 my-nav-link" aria-current="page" to='/'>Home</Link>
              <Link className="p-3 my-nav-link" to='/about'> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> About</Link>
              <Link className=" p-3 my-nav-link" to='/projects'> <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon> Projects</Link>
              <Link className=" p-3 my-nav-link" to='/blog'> <FontAwesomeIcon icon={faBlog}></FontAwesomeIcon> Blog</Link>
              <Link className="p-3 my-nav-link" to='/contact'> <FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon> Contact</Link>
              <a className=" p-3 my-resume-btn text-white text-decoration-none" href='https://drive.google.com/file/d/1pWejGsfB6Kfi3-D1nFmAE-HB2om8NMa2/view?usp=sharing' target='_blank' download> <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download Resume</a>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
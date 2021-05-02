import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Shihab</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link className="nav-link active p-3" aria-current="page" to='/'>Home</Link>
              <Link className="nav-link p-3" to='/about'>About</Link>
              <Link className="nav-link p-3" to='/projects'>Projects</Link>
              <Link className="nav-link p-3" to='/blog'>Blog</Link>
              <Link className="nav-link p-3" to='/contact'>Contact</Link>
              <a className="nav-link p-3 my-btn text-white" href='../../../file/Shihab_Ahmed_Efty_Resume.pdf' download>Download Resume</a>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
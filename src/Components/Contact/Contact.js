import { faComment, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import './Contact.css'
const Contact = (props) => {
    console.log(props)
    const handleSubmit = event => {
        console.log(event);
    }
    return (
        <>
            <Navbar></Navbar>
            <section>
                <div className="row">
                    <div className="col-md-5 contact-info">
                        <h3 className="p-3">Contact Information</h3><hr/>
                        <h5 className="p-3">
                            <span className="p-3">Name</span> <br/>  <Link className="text-decoration-none p-3" to="/">Shihab Ahmed Efty</Link> <br/> <br/>
                            <span className="p-3">Email me</span> <br/> <a className="text-decoration-none p-3 " href="mailto:shihabahmed620@gmail.com">shihabahmed620@gmail.com</a> <br/><br/>
                            <span className="p-3">Call me</span> <br/> <a className="text-decoration-none p-3" href="tel:+8801533908624">+88 01533908624</a> <br/>
                        </h5>
                    </div>
                    <div className="col-md-7">
                        <h3 className="p-3">Message Me</h3>
                        <hr/>
                        <form className="p-3" action="" onSubmit={()=> handleSubmit()}>
                            <div className="row">
                                <div className="col-12 col-md-6 form-group">
                                    <input className="form-control contact-input" type="text" name="contact-name" id="contact-name" placeholder="Name" required />
                                </div>
                                <div className="col-12 col-md-6 form-group">
                                    <input className="form-control contact-input" type="email" name="contact-email" id="contact-name" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="col-12 form-group">
                                <input className="form-control contact-input" type="text" name="contact-email" id="contact-email" placeholder="Subject" required />
                            </div>
                            <div className="col-12 form-group">
                                <textarea className="form-control contact-input" name="contact-message" id="contact-message" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-lg my-btn p-3 text-white"> Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Contact;
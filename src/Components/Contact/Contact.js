import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
const Contact = (props) => {
    console.log(props)
    const sendEmail = e => {
        e.preventDefault();
        console.log(e.target.value)
    }
    return (
        <section className="p-5 my-bg text-white my-bg">
            <div className="row">
                <div className="col-md-5 contact-info">
                    <h3 className="p-3 my-color">Contact Information</h3><hr />
                    <h5 className="p-3">
                        <span className="p-3 my-color">Name</span> <br />  <Link className="text-decoration-none p-3 " to="/">SHIHAB AHMED EFTY</Link> <br /> <br />
                        <span className="p-3 my-color">Email me</span> <br /> <a className="text-decoration-none p-3 " href="mailto:shihabahmed620@gmail.com">shihabahmed620@gmail.com</a> <br /><br />
                        <span className="p-3 my-color">Call me</span> <br /> <a className="text-decoration-none p-3" href="tel:+8801533908624">+88 01533908624</a> <br />
                    </h5>
                </div>
                <div className="col-md-7">
                    <h3 className="p-3 my-color">Message Me</h3>
                    <hr />
                    <form className="p-3 " action="" onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-12 col-md-6 form-group">
                                <input className="form-control contact-input bg-dark" type="text" name="contact-name" id="contact-name" placeholder="Name" required />
                            </div>
                            <div className="col-12 col-md-6 form-group">
                                <input className="form-control contact-input bg-dark" type="email" name="contact-email" id="contact-name" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <input className="form-control contact-input bg-dark" type="text" name="contact-subject" id="contact-subject" placeholder="Subject" required />
                        </div>
                        <div className="col-12 form-group">
                            <textarea className="form-control contact-input bg-dark" name="contact-message" id="contact-message" rows="5" placeholder="Message"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-lg my-btn p-3 text-white"> <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon> Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    );
};

export default Contact;
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Contact.css';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
const Contact = (props) => {
    console.log(props)
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_e50tz9s', 'template_8tn8hzj', e.target, 'user_HQkb3WLrWYNhNaXWaYby2')
            .then((result) => {
                console.log(result.text);
                alert('Your message sent successfully ');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('message').value = '';
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section className="p-5 my-bg text-white my-bg">
            <div className="row">
                <div className="col-md-5 contact-info">
                    <h3 className="p-3 my-color">Contact Information</h3><hr />
                    <h5 className="p-3">
                        {/* <span className="p-3 my-color">Name</span> <br />  <Link className="text-decoration-none p-3 my-info" to="/">SHIHAB AHMED EFTY</Link> <br /> <br /> */}
                        <span className="p-1 my-info"> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> </span> <a className="text-decoration-none my-color" href="mailto:shihabahmed620@gmail.com">shihabahmed620@gmail.com</a> <br /><br />
                        <span className="p-1 my-info"> <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon> </span><a className="text-decoration-none my-color" href="tel:+8801533908624">+88 01533908624</a> <br />
                    </h5>
                </div>
                <div className="col-md-7">
                    <h3 className="p-3 my-color">Get in Touch</h3>
                    <hr />
                    <form className="p-3" action="" onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-12 col-md-6 form-group">
                                <input className="form-control contact-input" type="text" name="name" id="name"  placeholder="Name" required />
                            </div>
                            <div className="col-12 col-md-6 form-group">
                                <input className="form-control contact-input " type="email" name="email" id="email"  placeholder="Email" required />
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <input className="form-control contact-input " type="text" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="col-12 form-group">
                            <textarea className="form-control contact-input " name="message" id="message" rows="5" placeholder="Message"></textarea>
                        </div>
                        <br />
                        <div className="col-12">
                            <button className="btn btn-lg my-btn p-3 my-btn-color"> <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon> Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    );
};

export default Contact;
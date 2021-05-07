import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import SocialButtons from '../Shared/SocialButtons/SocialButtons';
import './ProjectDetails.css'
const ProjectDetails = () => {
    let { projectId } = useParams();
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch(`https://shihabahmed.herokuapp.com/projectDetails/${projectId}`)
            .then(res => res.json())
            .then(data => setProject(data[0]))
    }, [])
    console.log(project)
    const { _id, img, title, source, live } = project;
    return (
        <div className="my-bg projectDetails-bg">
            <Navbar></Navbar>
            <SocialButtons></SocialButtons>
            <section>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 p-5">
                        <div className="row">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>First slide label</h5>
                                            <p>Some representative placeholder content for the first slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Second slide label</h5>
                                            <p>Some representative placeholder content for the second slide.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Third slide label</h5>
                                            <p>Some representative placeholder content for the third slide.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="row p-4">
                            <div className="col-6 d-flex justify-content-center">
                                <button className="my-btn p-3"> <a className="text-decoration-none text-white " href={live} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Live</a> </button>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <button className="my-btn p-3"> <a className="text-decoration-none text-white" href={source} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Code</a> </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 p-5 text-white">
                        <h3 className="">{title}</h3>
                        <div className="p-3">
                            <h5 style={{ color: '#14A76C' }}>Features:</h5>
                            <ul>
                                <li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eaque.</p>
                                </li>
                                <li>
                                    <p>Incidunt maiores saepe dolorem temporibus ex, laudantium vel eveniet impedit!</p>
                                </li>
                                <li>
                                    <p>Odit error sequi placeat, necessitatibus deleniti temporibus blanditiis natus sit!</p>
                                </li>
                                <li>
                                    <p>Harum iure eaque commodi assumenda corporis iste dolor, soluta molestias!</p>
                                </li>
                                <li>
                                    <p>Adipisci illo similique eligendi atque mollitia! Et est laborum accusamus.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="p-3">
                            <h5 style={{ color: '#14A76C' }}>Technology Used:</h5>
                            <ul>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Natus asperiores labore vel amet!</p>
                                </li>
                                <li>
                                    <p>Illum eos sunt amet veniam!</p>
                                </li>
                                <li>
                                    <p>Impedit exercitationem eaque iusto nihil.</p>
                                </li>
                                <li>
                                    <p>Dolorum aliquam magnam facere doloribus.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;
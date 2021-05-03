import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'
const Project = (props) => {
    const {img,title,description,source,live} = props.project;
    // console.log("image url",project.img.cakeImg)
    
    return (
        <div className="d-flex justify-content-center col-md-4 p-4 project">
            <div className="card w-100 shadow-lg text-center project-card ">
                <img className="card-img-top p-2 project-image" src={img} alt="image" />
                <div className="card-body rounded text-white">
                    <h3 className="card-title"><span onClick={() => props.handleTitle(props.project)} className="text-decoration-none text-white"  >{title}</span></h3>
                    <p className="card-body">{description}</p>
                </div>
                <div className="row p-2">
                    <div className="col-6 d-flex justify-content-center">
                        <button className="my-btn p-3"> <a className="text-decoration-none text-white " href={live} target="_blank" rel="noopener noreferrer">Live</a> </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button className="my-btn p-3"> <a className="text-decoration-none text-white" href={source} target="_blank" rel="noopener noreferrer">Code</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
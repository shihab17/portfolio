import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Project.css'
const Project = (props) => {
    // console.log(props)
    const {_id, img, title, description, source, live } = props.project;
    // console.log("image url",project.img.cakeImg)
    const history = useHistory();
    const handleProject = projectId => {
        console.log(projectId);
        history.push(`/projectDetails/${projectId}`)
    }
    return (
        <div className="d-flex justify-content-center col-md-4 p-4 project">
            <div className="card w-100 shadow-lg text-center project-card ">
                <img className="card-img-top p-2 project-image" src={img} onClick={() => handleProject(_id)} alt="image" />
                <div className="card-body rounded text-white">
                    <h3 className="card-title text-white" onClick={() => handleProject(_id)}>{title}</h3>
                    <p className="card-body" onClick={() => handleProject(_id)}>{description}</p>
                </div>
                <div className="row p-2">
                    <div className="col-6 d-flex justify-content-center">
                        <button className="my-btn p-3"> <a className="text-decoration-none text-white " href={live} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Live</a> </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button className="my-btn p-3"> <a className="text-decoration-none text-white" href={source} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Code</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
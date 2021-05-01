import React from 'react';

const Project = ({ project }) => {
    const {img,title,description,source,live} = project;
    // console.log("image url",project.img.cakeImg)
    return (
        <div className="d-flex justify-content-center col-md-4 p-2">
            <div className="card w-100 shadow-lg text-center">
                <img className="card-img-top p-2" src={img} alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-body">{description}</p>
                </div>
                <div className="row p-2">
                    <div className="col-6 d-flex justify-content-center">
                        <button className="btn btn-success "> <a className="text-decoration-none text-white" href={live} target="_blank" rel="noopener noreferrer">Live</a> </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button className="btn btn-success"> <a className="text-decoration-none text-white" href={source} target="_blank" rel="noopener noreferrer">Code</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
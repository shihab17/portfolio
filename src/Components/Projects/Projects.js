import React, { useEffect, useState } from 'react';
import './Projects.css'
import Project from '../Project/Project';
const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('https://shihabahmed.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div className="my-bg">
            
            <h1 className="text-center p-2 projects-title">Here is my all projects</h1>
            {
                projects.length ? '' : <p className="text-white text-center"><img src="https://worthit.in/miipl_website/static/src/img/loading2.gif" alt="" /></p>
            }
            <div className="d-flex justify-content-center row p-5">
                {
                    projects.map(project => <Project key={project._id} project={project} ></Project> )
                }
            </div>
            
        </div>
    );
};

export default Projects;
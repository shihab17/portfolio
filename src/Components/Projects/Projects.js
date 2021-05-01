import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Project from '../Project/Project';
const Projects = () => {
    const projects = [
        {
            id:1,
            img: 'https://i.ibb.co/5rk7WR2/cake.png',
            title: 'Online Cake Shop',
            description: 'A full-stack restaurant app where you can order your favorite cake from the menu. You have more option...',
            live: 'https://cake-shop-87ffb.web.app/',
            source: 'https://github.com/shihab17/cake-shop'
        },
        {
            id:2,
            img: '',
            title: '',
            description: '',
            live: '',
            source: ''
        },
        {
            id:3,
            img: '',
            title: '',
            description: '',
            live: '',
            source: ''
        },
        {
            id:4,
            img: '',
            title: '',
            description: '',
            live: '',
            source: ''
        }

    ]

    return (
        <>
            <Navbar></Navbar>
            <div className="d-flex justify-content-center row m-5 p-5">
                {
                    projects.map(project => <Project key={project.id} project={project}></Project> )
                }
            </div>

        </>
    );
};

export default Projects;
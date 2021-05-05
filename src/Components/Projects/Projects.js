import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Project from '../Project/Project';
import Footer from '../Shared/Footer/Footer';
import SocialButtons from '../Shared/SocialButtons/SocialButtons';
import './Projects.css'
const Projects = ({handleTitle}) => {
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
            img: 'https://i.ibb.co/6XBLZbG/book-shop.png',
            title: 'Online Book Store',
            description: 'An online book store where you can order your favorite book from the list. Also you have more option ',
            live: 'https://book-shop-7e46d.web.app/',
            source: 'https://github.com/shihab17/book-shop'
        },
        {
            id:3,
            img: 'https://i.ibb.co/P4ygmS2/dhaka-rider.png',
            title: 'Dhaka Rider App',
            description: 'This is a riding app. Where users can choose from bike, train, bus, car for the ride. Also you have more option so on ....',
            live: 'https://dhaka-riders-70e04.web.app/',
            source: 'https://github.com/shihab17/dhaka-rider-app'
        },
        {
            id:4,
            img: 'https://i.ibb.co/c854mm5/league.png',
            title: 'All Star League',
            description: 'It is an all football league detail. Where Users can explore any football details. ',
            live: 'https://distracted-roentgen-033ee6.netlify.app/',
            source: 'https://github.com/shihab17/all-star-league'
        }
        ,
        {
            id:5,
            img: 'https://i.ibb.co/T2RQ97Q/bus-ticket.png',
            title: 'Bus Ticket Booking',
            description: 'This is an Online Bus ticket booking app. Where user can booking ticket. And also more option are so on... ',
            live: 'https://priceless-curran-90cfb4.netlify.app/',
            source: 'https://github.com/shihab17/bus-ticket-react'
        }

    ]

    return (
        <div className="">
            
            <h1 className="text-center p-2 projects-title"><em>Here is my all projects</em></h1>
            <div className="d-flex justify-content-center row p-5">
                {
                    projects.map(project => <Project key={project.id} project={project} handleTitle={handleTitle}></Project> )
                }
            </div>
            
        </div>
    );
};

export default Projects;
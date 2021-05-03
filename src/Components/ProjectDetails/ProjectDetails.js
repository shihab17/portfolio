import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import SocialButtons from '../Shared/SocialButtons/SocialButtons';

const ProjectDetails = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <SocialButtons></SocialButtons>
            <section>
            <h3>this is project details</h3>
            </section>
        </div>
    );
};

export default ProjectDetails;
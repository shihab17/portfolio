import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Blog from './Blog/Blog';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex justify-content-center row p-5">
                <Blog></Blog>
            </div>

        </div>
    );
};

export default Blogs;
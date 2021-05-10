import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Education = () => {
    return (
        <section className="row p-2 m-4">
            <h1 className="text-center p-4 tools-heading"> Education</h1>
            <div className="d-flex align-items-center row">
                <div className="col-md-6 text-center p-5">
                    <FontAwesomeIcon className="text-white fa-9x" icon={faGraduationCap}></FontAwesomeIcon>
                </div>
                <div className="col-md-6 text-white p-5">
                    <h3 className="text-white">BSc. in CSE</h3>
                    <h5 className="text-white">American International University - Bangladesh (AIUB)</h5>
                    {/* <p>Session: 2017-18</p>
                    <p>Passing Year: Till Now </p> */}
                </div>
            </div>

        </section>
    );
};

export default Education;
import React from 'react';

const Skill = ({skill,level}) => {
    return (
        <div className="m-2">
            <h6 className="text-white">{skill}</h6>
            <div className="progress bg-dark my-progress" >
                <div className="progress-bar my-progress-bar" role="progressbar" style={{ width: `${level}%` }} aria-valuenow={level} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
};

export default Skill;
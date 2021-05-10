import React from 'react';
import Skill from './Skill';
import './Skills.css'
const Skills = () => {
    return (
        <div className="row p-2 m-4">
            <h1 className="text-center p-4 tools-heading">Languages and Tools</h1>
            <div className="p-5">
                <Skill skill="HTML & CSS" level="95"></Skill>
                <Skill skill="JavaScript" level="85"></Skill>
                <Skill skill="React" level="85"></Skill>
                <Skill skill="PHP" level="75"></Skill>
                <Skill skill="MySQL" level="65"></Skill>
                <Skill skill="OracleDb" level="50"></Skill>
                <Skill skill="Mongodb" level="50"></Skill>
            </div>
        </div>
    );
};

export default Skills;
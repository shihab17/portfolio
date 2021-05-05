import React from 'react';
import './Skills.css'
const Skills = () => {
    return (
        <div className="row p-2 m-4">
            <h1 className="text-center p-4 tools-heading">Languages and Tools</h1>
            <div className="p-5 ">

                <p className="skill-logos" align="center ">
                    <a className="p-2 skill-logo" href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80" /> </a>

                    <a className="p-2" href="https://laravel.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="80" height="80" /> </a>

                    <a className="p-2" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.php.net" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80" /> </a>
                    <br />
                    <br />
                    <a className="p-2" href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.oracle.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="80" /> </a>

                    <br />
                    <br />

                    <a className="p-2" href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80" /> </a>

                    <a className="p-2" href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="80" height="80" /> </a>

                    <a className="p-2" href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.java.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="80" height="80" /> </a>

                    <a className="p-2" href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="80" height="80" /> </a>     </p>
            </div>
            <div className="d-flex justify-content-center p-5 row">
                <div className="col-md-6 d-flex justify-content-center">
                    <p className="p-2"><img src="https://github-readme-stats.vercel.app/api/top-langs?username=shihab17&show_icons=true&locale=en&layout=compact" alt="shihab17" /></p>
                </div>
                <div className="col-md-6 d-flex justify-content-center" >
                    <p className="p-2"><img src="https://github-readme-streak-stats.herokuapp.com/?user=shihab17&" alt="shihab17" /></p>
                </div>


            </div>

        </div>
    );
};

export default Skills;
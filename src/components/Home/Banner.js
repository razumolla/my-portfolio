import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Developer from '../../image/developer-working-time.jpg'
import Resume from '../../image/Full Stack Developer-MERN(Razu Molla).pdf'

const Banner = () => {
    return (
        <div className="card lg:card-side bg-base-100 pb-32">
            <figure><img src={Developer} className="pt-20" alt="Razu" /></figure>
            <div className="card-body">
                <div className='pt-10'>
                    <h1 className='text-3xl font-bold '> <span className='text-primary'>About</span> Me</h1>
                </div>
                <p className="py-6 speech-between text-xl "> Hello, I am Web Developer. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. Now I am most comfortable working in the Front-End and My goal is to become A Professional Full-stack Web Developer.
                </p>
                
                <p className='text-xl'> 
                    I am working with React, Node Js and MongoDB. I also have experience in developing static websites using HTML5, CSS3 and JavaScript. I always try to update myself with cutting-edge technology. I am a quick learner. Right now I want to use my previous skills as well as gain some new skills.
                </p>
                <div className="profile-container-button">
                        <div className="hire-me-btn">
                            <Link className='hire-me' to='/contact'>Hire Me</Link>
                        </div>
                        <div className="resume-download-section">
                            <FiDownload />
                            <a className='resume-dwn-btn' href={Resume} download>Download Resume</a>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;
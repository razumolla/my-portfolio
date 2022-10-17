import React from 'react';
import './Profile.css'
import Resume from '../../image/Full Stack Developer-MERN(Razu Molla).pdf'
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import Type from '../Type';
import myImage from '../../image/Razu Molla2.png'
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Profile = () => {
    return (
        <div className="header">
            <div className='profile-container '>
                <div className="profile-title-container">
                    <h3 className='welcome-title'>Hello! I'm</h3>
                    <h1 className='name'>Md. Razu Molla</h1>
                    <div className='type-animition'>
                        <Type className='text-6xl'></Type>
                    </div>

                    <div className="profile-container-button">
                     
                        <div>
                            <a href='https://www.facebook.com/profile.php?id=100010189419477' target='_blank'>
                                <button className=" mx-2 text-4xl text-primary">
                                    <BsFacebook />
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href='https://github.com/razumolla' target='_blank' >
                                <button className=" mx-2 text-4xl text-primary">
                                    <AiFillGithub />
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/razu-molla/' target='_blank' >
                                <button className=" mx-2 text-4xl text-primary">
                                    <AiFillLinkedin />
                                </button>
                            </a>
                        </div>
                    </div>

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
                <div className="profile-img-container mt-12">
                    <img src={myImage} alt="Razu" />
                </div>

            </div>



        </div>
    );
};

export default Profile;
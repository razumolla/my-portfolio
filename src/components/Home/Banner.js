import React from 'react';
import { Link } from 'react-router-dom';
import Type from '../Type';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Banner = () => {
    return (
        <div id='home' className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/8DjBZjL/IMG-1697.png" className="max-w-sm rounded-lg shadow-2xl " alt='img' />
                <div className='lg:px-16'>
                    <h1 className="text-5xl font-bold">Razu Molla!</h1>
                    <Type className='text-6xl'></Type>
                    <p className="py-6">Hello, I am Web Developer. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. Now I am most comfortable working in the Front-End and My goal is to become A Professional Full-stack Web Developer.
                        <br />
                        I am working with React, Node Js and MongoDB. I also have experience in developing static websites using HTML5, CSS3 and JavaScript. I always try to update myself with cutting-edge technology. I am a quick learner. Right now I want to use my previous skills as well as gain some new skills.
                    </p>
                    <div className=' justify-center flex'>
                        <div>
                            <Link to='https://drive.google.com/drive/u/0/my-drive' target='_blank'>
                                <button className="btn text-red-600 btn-primary">
                                    Open Resume
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to='https://www.facebook.com/profile.php?id=100010189419477' target='_blank'>
                                <button className=" mx-2 text-4xl text-primary">
                                    <BsFacebook />
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to='https://github.com/razumolla' target='_blank' >
                                <button className=" mx-2 text-4xl text-primary">
                                    <AiFillGithub />
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to='https://www.linkedin.com/in/razu-molla/' target='_blank' >
                                <button className=" mx-2 text-4xl text-primary">
                                    <AiFillLinkedin />
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
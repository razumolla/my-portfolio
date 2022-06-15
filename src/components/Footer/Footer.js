import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 rounded bg-gradient-to-r from-red-300 to-blue-400">
            <div className="grid grid-flow-col gap-4">
                <a href='/home' className="link link-hover">Home</a>
                <a href='/skills' className="link link-hover">Skills</a>
                <a href='/projects' className="link link-hover">Project</a>
                <a href='/blog' className="link link-hover">Blog</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <div className=' justify-center flex'>

                        <div>
                            <a href='https://www.facebook.com/profile.php?id=100010189419477' target='_blank'>
                                <button className=" mx-2 text-4xl ">
                                    <BsFacebook />
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href='https://github.com/razumolla' target='_blank' >
                                <button className=" mx-2 text-4xl ">
                                    <AiFillGithub />
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/razu-molla/' target='_blank' >
                                <button className=" mx-2 text-4xl">
                                    <AiFillLinkedin />
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Razu Molla</p>
            </div>
        </footer>
    );
};

export default Footer;
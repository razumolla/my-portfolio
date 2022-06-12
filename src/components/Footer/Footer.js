import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div class="grid grid-flow-col gap-4">
                <Link to='#home' class="link link-hover">Home</Link>
                <Link to='#skills' class="link link-hover">Skills</Link>
                <Link to='#projects' class="link link-hover">Project</Link>
                <Link to='#blog' class="link link-hover">Blog</Link>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                <div className=' justify-center flex'>
                     
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
            <div>
                <p>Copyright © 2022 - All right reserved by Razu Molla</p>
            </div>
        </footer>
    );
};

export default Footer;
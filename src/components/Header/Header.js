import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import Resume from '../../image/Full Stack Developer-MERN(Razu Molla).pdf'
import { FiDownload } from 'react-icons/fi';


const Header = () => {
    const menuItem = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skill">Skill</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>


    return (
        <div className="navbar  container ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className="portfolio-logo">
                    <div class="avatar">
                        <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/qJv1r88/Razu-Molla-1.jpg" alt="Razu" />
                        </div>
                    </div>
                    <div className='logo-title'>
                        <a href="/home">Razu Molla</a>
                    </div>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                    <div className='download-resume-section'>
                        <FiDownload />
                        <a className='resume-dwn' href={Resume} download>Download Resume</a>
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default Header;
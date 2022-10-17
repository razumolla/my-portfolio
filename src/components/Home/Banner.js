import React from 'react';
import Type from '../Type';

const Banner = () => {
    return (
        <div id='home' className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/qJv1r88/Razu-Molla-1.jpg" className="max-w-sm rounded-lg shadow-2xl " alt='img' />
                <div className='lg:px-16'>
                    <h1 className="text-5xl font-bold">Razu Molla!</h1>
                    <Type className='text-6xl'></Type>
                    <p className="py-6">Hello, I am Web Developer. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. Now I am most comfortable working in the Front-End and My goal is to become A Professional Full-stack Web Developer.
                        <br />
                        I am working with React, Node Js and MongoDB. I also have experience in developing static websites using HTML5, CSS3 and JavaScript. I always try to update myself with cutting-edge technology. I am a quick learner. Right now I want to use my previous skills as well as gain some new skills.
                    </p>
                    

                </div>
            </div>
        </div>
    );
};

export default Banner;
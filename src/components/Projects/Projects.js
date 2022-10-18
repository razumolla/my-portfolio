import React from 'react';
import { a, Link } from 'react-router-dom';
import image0 from '../../image/image0.PNG'
import image1 from '../../image/image1.PNG'
import image2 from '../../image/image2.PNG'
import image3 from '../../image/image3.PNG'


const Projects = () => {
    return (
        <div>
            <h2 className='text-center  mt-16 '>My Recent Work</h2>
            <h3 className='text-center text-4xl text-primary font-bold mb-10'> <span className='border-b-4 border-black'>Portfolio </span> </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {/* <div className="card  bg-base-100 ">
                    <figure ><img src={image1} className="border-cyan-600 border-2" alt="Shoes" /></figure>

                    <div className="card-body">
                        <h2 className="text-xl font-bold text-primary">Tools Manufacturer website</h2>
                        <h3 className='text-2xl'></h3>
                        <p>
                            <li>Sellers can add, delete and update products </li>
                            <li>Implemented authentication system with Email/Password and Google</li>
                            <li>Sellers can update their stock and also product details</li>
                            <li>Sellers can manage all user and Orders</li>
                            <li>Full stack Project with React Js, Node, MongoDB</li>
                        </p>
                        <div className=" justify-between">
                            <a href='https://electronic-house-3cbdc.web.app/' target='_blank'>
                                <button className="btn btn-primary">Live Site </button>
                            </a>
                            <a href='https://github.com/razumolla/assignment-12-client' target='_blank'>
                                <button className="btn btn-primary">Client Side</button>
                            </a>
                            <a href='https://github.com/razumolla/assignment-12-server' target='_blank'>
                                <button className="btn btn-primary">server Side</button>
                            </a>
                        </div>
                    </div>
                </div> */}

                <div className="card  bg-base-100 shadow-xl ">
                    <figure ><img src={image0} alt="Shoes" /></figure>

                    <div className="card-body">
                        <h2 className="text-xl font-bold text-primary">Resume Builder(Team Project)</h2>
                        <p>
                            This site is a resume creator Website. Users can create a resume, cv and cover letter.
                        </p>
                        <p> Firebase authentication system & Dashboard for the user, admin role & Chat system.</p>
                        <p><strong>Technology:</strong> ReactJs,Firebase, Tailwind CSS, NodeJS, MongoDB, ExpressJs, Stripe, JWT</p>

                        <div className="card-actions justify-center">
                            <a href='https://electronic-house-3cbdc.web.app/' target='_blank'>
                                <button className="btn  btn-sm btn-primary">Live Site </button>
                            </a>
                            <a href='https://github.com/razumolla/assignment-12-client' target='_blank'>
                                <button className="btn  btn-sm btn-primary">Client</button>
                            </a>
                            <a href='https://github.com/razumolla/assignment-12-server' target='_blank'>
                                <button className="btn  btn-sm btn-primary">server</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-primary">Motor Trend</h2>
                        <p>Cars Warehouse Management Website.  Every user can add products, Delete products and order any Product </p>
                        <p>  User must be authenticated with registration and login </p>
                        <p> <strong>Technology:</strong> ReactJS, Firebase, Bootstrap,  Express, Node JS, MongoDB.</p>
                        <div className="card-actions justify-center">
                            <a href='https://car-dealer-assignment-11.web.app/home' target='_blank'>
                                <button className="btn btn-sm btn-primary">Live Site </button>
                            </a>
                            <a href='https://github.com/razumolla/assignment-11-client' target='_blank'>
                                <button className="btn btn-sm btn-primary">Client</button>
                            </a>
                            <a href='https://github.com/razumolla/assignment-11-server' target='_blank'>
                                <button className="btn btn-sm btn-primary">server</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-primary">ZACSON</h2>
                        <p>This website is Independent service provider website. Gym Trainer Simple application. User can buy any service.</p>
                        <p>Login/LogOut system Implemented & Self service Provider</p>
                        <p><strong>Technology:</strong> ReactJS, Bootstrap, React Bootstrap, Firebase</p>

                        <div className="card-actions justify-center">
                            <a href='https://gym-trainer-assignment.web.app/' target='_blank'>
                                <button className="btn  btn-sm btn-primary">Live Site </button>
                            </a>
                            <a href='https://github.com/razumolla/assignment-10-gym-trainer' target='_blank'>
                                <button className="btn btn-sm btn-primary">Client Code</button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;
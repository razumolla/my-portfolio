import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../image/image1.PNG'
import image2 from '../../image/image2.PNG'
import image3 from '../../image/image3.PNG'


const Projects = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold mt-10 '>Recent Projects </h2>
            <h3 className='text-center text-2xl mb-5 text-secondary font-bold'>I've Completed</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure ><img src={image1} alt="Shoes" /></figure>

                    <div class="card-body">
                        <h2 class="text-xl font-bold text-secondary">Tools Manufacturer website</h2>
                        <h3 className='text-2xl'>Key Features:-</h3>
                        <p>
                            <li>Sellers can add, delete and update products </li>
                            <li>Implemented authentication system with Email/Password and Google</li>
                            <li>Sellers can update their stock and also product details</li>
                            <li>Sellers can manage all user and Orders</li>
                            <li>Full stack Project with React Js, Node, MongoDB</li>
                        </p>
                        <div class="card-actions justify-end">
                            <Link to='https://electronic-house-3cbdc.web.app/' target='_blank'>
                                <button class="btn btn-primary">Live Site </button>
                            </Link>
                            <Link to='https://github.com/razumolla/assignment-12-client' target='_blank'>
                                <button class="btn btn-primary">Clint Side</button>
                            </Link>
                            <Link to='https://github.com/razumolla/assignment-12-server' target='_blank'>
                                <button class="btn btn-primary">server Side</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-xl font-bold text-secondary">Cars Warehouse Management Website</h2>
                        <h3 className='text-2xl'>Key Features:-</h3>
                        <p>
                            <li>SignIn, SignOut facility. </li>
                            <li>Seller can add new Product  </li>
                            <li>Full stack project</li>
                            <li>Technology used- React Js, Node, MongoDB</li>
                        </p>
                        <div class="card-actions justify-end">
                            <Link to='https://car-dealer-assignment-11.web.app/home' target='_blank'>
                                <button class="btn btn-primary">Live Site </button>
                            </Link>
                            <Link to='https://github.com/razumolla/assignment-11-client' target='_blank'>
                                <button class="btn btn-primary">Client Side</button>
                            </Link>
                            <Link to='https://github.com/razumolla/assignment-11-server' target='_blank'>
                                <button class="btn btn-primary">server Side</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-xl font-bold text-secondary">Independent service provider website</h2>
                        <h3 className='text-2xl'>Key Features:-</h3>
                        <p>
                            <li>Simple application</li>
                            <li>Login/LogOut system Implemented</li>
                            <li>Self service Provider </li>
                        </p>
                        <div class="card-actions justify-end">
                            <Link to='https://gym-trainer-assignment.web.app/' target='_blank'>
                                <button class="btn btn-primary">Live Site </button>
                            </Link>
                            <Link to='https://github.com/razumolla/assignment-10-gym-trainer' target='_blank'>
                                <button class="btn btn-primary">Client Side</button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;
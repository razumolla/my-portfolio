import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='text-center mt-16'>
                <h1 className='text-4xl font-bold text-secondary'>Contact Me</h1>
                <h3 className='text-xl'>Get In Touch</h3>
            </div>


            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left lg:mx-20">
                        <h1 class="text-3xl font-bold">Find Me On !!! </h1>
                        <p class="py-6">If you like my work and want to avail my services then drop me a message using this contact info.
                        </p>
                        <p>Name: <span className='font-bold'> Md Razu Molla</span> </p>
                        <p>Email: <span className='font-bold'> rajuahmed9344@gmail.com</span> </p>
                        <p>Mobile: <span className='font-bold'>01770309969</span> </p>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="Message" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
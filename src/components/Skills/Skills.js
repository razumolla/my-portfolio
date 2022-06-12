import React from 'react';

const Skills = () => {
    return (
        <div id='skills'>
            <h2 className='text-4xl text-center font-bold mb-10'>My <span className='text-secondary'> Skills</span> </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div class="card  bg-blue-100 shadow-xl ">
                    <div class="card-body">
                        <h2 class="text-3xl text-center font-bold"> Front-End</h2>
                        <hr />
                        <p className='text-xl'>
                            <li>HTML5 & CSS3 </li>
                            <li>Bootstrap</li>
                            <li>React Bootstrap</li>
                            <li>Tailwind</li>
                            <li>Daisy UI</li>
                            <li>Javascript(ES-6)</li>
                            <li>React Js</li>
                        </p>
                    </div>
                </div>
                <div class="card  bg-blue-100 shadow-xl ">
                    <div class="card-body">
                        <h2 class="text-3xl text-center font-bold"> Back-End</h2>
                        <hr />
                        <p className='text-xl'>
                            <li>Express Js</li>
                            <li>Node Js</li>
                            <li>MongoDB</li>
                            <li>Stripe (payment)</li>
                            
                        </p>
                    </div>
                </div>
                <div class="card  bg-blue-100 shadow-xl ">
                    <div class="card-body">
                        <h2 class="text-4xl text-center font-bold"> Platform</h2>
                        <hr />
                        <p className='text-xl'>
                            <li>Github</li>
                            <li>Netlify</li>
                            <li>Heroku</li>
                            <li>Firebase</li> 
                          
                        </p>

                    </div>
                </div>
                <div class="card  bg-blue-100 shadow-xl ">
                    <div class="card-body">
                        <h2 class="text-4xl text-center font-bold"> Tools</h2>
                        <hr />
                        <p className='text-xl'>
                            <li>VS Code</li>
                            <li>Chrome Dev tool</li>
                            <li>Figma</li>
                            <li>Canva</li> 
                            <li>Photopea</li> 
                        </p>

                    </div>
                </div>

                

            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Skills> </Skills>
           <Projects></Projects>
        </div>
    );
};

export default Home;
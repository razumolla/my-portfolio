import React from 'react';
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <Banner></Banner>
            <Skills> </Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;
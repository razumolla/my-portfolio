import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Skills> </Skills>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;
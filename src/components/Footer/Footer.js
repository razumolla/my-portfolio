import React from 'react';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer className="footer footer-center p-6 rounded text-2xl border-t-2 border-blue-400">

            <p className='text-xl'>Copyright © 2022 - All right reserved by Razu Molla</p>

            <ScrollToTop smooth  color="blue" top="1000"/>
        </footer>
    );
};

export default Footer;
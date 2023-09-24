import React from 'react';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Components/Footer/Footer';
import HomeAbout from '../../Components/HomeAbout/HomeAbout';
import Navbar from '../../Components/Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HomeAbout/>
            <ContactUs/> <br/>
            <Footer/>
        </div>
    );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Services_indi from '../../Components/Services_indi/Services_indi';
import ServiceTopbar from '../../Components/ServiceTopbar/ServiceTopbar';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer'
import styles from '../Homepage/Homepage.module.css'

const Services = () => {
    const [Scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = (event) => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [Service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
    .then(response => response.json())
    .then(result => setService(result))
    .catch(error => console.log('error', error));
  }, []);

    return (
        <div>
            <Topbar />
      {Scroll <= 110 ? (
        <nav className={`sticky top-0 z-50 ${styles.pos}`}>
          <Navbar />
        </nav>
      ) : (
        <nav className={`sticky top-0 ${styles.pos1}`}>
          <Navbar />
        </nav>
      )}
      <div>
        <ServiceTopbar/>
        <Services_indi data={Service}/>
        <Footer/>
      </div>
        </div>
    );
};

export default Services;
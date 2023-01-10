import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Services_indi from '../../Components/Services_indi/Services_indi';
import ServiceTopbar from '../../Components/ServiceTopbar/ServiceTopbar';
import Topbar from '../../Components/Topbar/Topbar';
import Footer from '../../Components/Footer/Footer'
import { WeCareFakeData } from '../Homepage/WeCareFakeData';
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
        <Services_indi data={WeCareFakeData}/>
        <Footer/>
      </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from "react";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import HomepageBody from "../../Components/HomepageBody/HomepageBody";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import styles from './Homepage.module.css'

const Homepage = () => {
  const [Scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    const handleScroll = event => {
      setScroll(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <Topbar/>
      {
        
        (Scroll<=110)?<nav className={`sticky top-0 z-50 ${styles.pos}`}>
        <Navbar />
      </nav>:
      <nav className={`sticky top-0 ${styles.pos1}`}>
        <Navbar />
      </nav>
      }
      <div>
      <HomepageBody  />
        
        <HomeAbout/>
      </div>
    </div>
  );
};

export default Homepage;

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import styles from "./About.module.css";
import AboutPageTop from "../../Components/AboutPage/AboutPageTop";
import WeCarepage from "../../Components/WeCarepage/WeCarepage";
import GettingStarted from "../../Components/GettingStarted/GettingStarted";
import Team from "../../Components/Team/Team";
import Footer from "../../Components/Footer/Footer";

const About = () => {
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

  const [Therapists, setTherapists] = useState([]);
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/therapists")
    .then(response => response.json())
    .then(result => setTherapists(result))
    .catch(error => console.log('error', error));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/services")
    .then(response => response.json())
    .then(result => setServices(result))
    .catch(error => console.log('error', error));
  }, []);


  return (
    <div className="overflow-x-hidden">
      <Topbar />
      {Scroll <= 110 ? (
        <nav className={`sticky top-0 z-50 ${styles.pos}`}>
          <Navbar />
        </nav>
      ) : (
        <nav className={`sticky top-0 w-full ${styles.pos1}`}>
          <Navbar />
        </nav>
      )}

      <AboutPageTop />
      {/* <WeCarepage data={Services} /> */}
      <GettingStarted />
      <Team data={Therapists} />
      <Footer />
    </div>
  );
};

export default About;

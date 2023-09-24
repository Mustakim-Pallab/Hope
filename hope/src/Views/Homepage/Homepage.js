import React, { useEffect, useState } from "react";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import HomepageBody from "../../Components/HomepageBody/HomepageBody";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import styles from "./Homepage.module.css";
import WeCarePage from "../../Components/WeCarepage/WeCarepage";
import WeAreInNumberPage from "../../Components/WeAreInNumberPage/WeAreInNumberPage";
import Testimonials from "../../Components/Testimonials/Testimonials";
import HomeConsultationForm from "../../Components/HomeConsultationForm/HomeConsultationForm";
import Footer from "../../Components/Footer/Footer";


const Homepage = () => {
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

  const [Numbers, setNumbers] = useState([]);
  const [Services, setServices] = useState([]);
  const [Testimony, setTestimony] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
  .then(response => response.json())
  .then(result => setServices(result))
  .catch(error => console.log('error', error));

  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/number")
  .then(response => response.json())
  .then(result => setNumbers(result))
  .catch(error => console.log('error', error));

  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/testimony")
  .then(response => response.json())
  .then(result => setTestimony(result))
  .catch(error => console.log('error', error));

  }, []);
  
  return (
    <main>
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
        <HomepageBody />

        <HomeAbout />
        <WeCarePage data={Services} />
        <WeAreInNumberPage data={Numbers} />
        <Testimonials data={Testimony} />
        <HomeConsultationForm />
        <Footer/>
      </div>
    </main>
  );
};

export default Homepage;

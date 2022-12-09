import React, { useEffect, useState } from "react";
import TherapistSider from "../../Components/AboutPage/TherapistSider";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import { Therapist } from "./fakedata";
import styles from "./About.module.css";
import AboutPageTop from "../../Components/AboutPage/AboutPageTop";
import WeCarepage from "../../Components/WeCarepage/WeCarepage";
import { WeCareFakeData } from "../Homepage/WeCareFakeData";
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
      <WeCarepage data={WeCareFakeData} />
      <GettingStarted />
      <Team data={Therapist} />
      <Footer />
    </div>
  );
};

export default About;

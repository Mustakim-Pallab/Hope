import React, { useEffect, useState } from "react";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import HomepageBody from "../../Components/HomepageBody/HomepageBody";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import styles from "./Homepage.module.css";
import { WeCareFakeData } from "./WeCareFakeData";
import WeCarePage from "../../Components/WeCarepage/WeCarepage";
import WeAreInNumberPage from "../../Components/WeAreInNumberPage/WeAreInNumberPage";
import { numbers } from "./WeAreInNumberPageFakeData";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { testimonyData } from "./TestimonyData";
import HomeConsultationForm from "../../Components/HomeConsultationForm/HomeConsultationForm";
import Footer from "../../Components/Footer/Footer";
import UseAuth from "../../Components/Hooks/useAuth";


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
        <WeCarePage data={WeCareFakeData} />
        <WeAreInNumberPage data={numbers} />
        <Testimonials data={testimonyData} />
        <HomeConsultationForm />
        <Footer/>
      </div>
    </main>
  );
};

export default Homepage;

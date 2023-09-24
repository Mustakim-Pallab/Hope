import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FAQ_AskMore from "../../Components/FAQ_AskMore/FAQ_AskMore";
import FAQ_Questions from "../../Components/FAQ_Questions/FAQ_Questions";
import FAQ_Topbar from "../../Components/FAQ_Topbar/FAQ_Topbar";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import styles from "../Homepage/Homepage.module.css";


const FAQ = () => {
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

  const [FAQs, setFAQs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/faq")
  .then(response => response.json())
  .then(result => setFAQs(result))
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

      <FAQ_Topbar />
      <FAQ_Questions data={FAQs} />
      <FAQ_AskMore/>
      <br />
      <Footer />
    </div>
  );
};

export default FAQ;

import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./AboutPage.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="">
      <div className={`bg-green py-28  ${styles.about_text_container}`}>
        <div className={styles.about_text}>
          <p>
            Hope is an online counseling and psychotherapy website. Our team
            consists of professional therapists and counselors. Our goal is to
            make professional therapy accessible, affordable and convenient.
            Anyone struggling with mental health can reach us anytime from
            anywhere.
          </p>
        </div>
      </div>

      {/* Slider */}
    </div>
  );
};

export default AboutPage;

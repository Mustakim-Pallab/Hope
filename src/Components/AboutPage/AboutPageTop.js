import React, { useRef } from "react";
import styles from "./AboutPageTop.module.css";
import Slide from "react-reveal/Slide";
import WeCarepage from "../WeCarepage/WeCarepage";

const AboutPageTop = () => {
  return (
    <div className="">
      <div className={` py-28  ${styles.about_text_container}`}>
        <div className={styles.about_text}>
          <div className={`${styles.about_text_para}`}>
            <Slide right>
              Hope is an online counseling and psychotherapy website. Our team
              consists of professional therapists and counselors.{" "}
            </Slide>
            <Slide left>
              {" "}
              Our goal is to make professional therapy accessible, affordable
              and convenient. Anyone struggling with mental health can reach us
              anytime from anywhere.
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTop;

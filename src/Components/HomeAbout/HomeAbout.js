import React from "react";
import styles from "./HomeAbout.module.css";
import img from "../../Assets/Images/councelling_rounded.png";
import { Roll, Fade } from "react-reveal";
class HomeAbout extends React.Component {
  render() {
    return (
      <div className={`flex flex-2 ${styles.about} py-20`}>
        <Fade left>
          <div>
            <img src={img} alt="" className={styles.image} />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.subsection}>
            <h6 className={styles.aboutUs}>About US</h6>
            <h2 className={`${styles.hello}`}>Hello! We Are HOPE!</h2>
            <p>
              Hope is an online counseling and psychotherapy website. Our team
              consists of professional therapists and counselors. Our goal is to
              make professional therapy accessible, affordable and convenient.
              Anyone struggling with mental health can reach us anytime from
              anywhere.
            </p>{" "}
            <br />
            <button>Learn More</button>
          </div>
        </Fade>
      </div>
    );
  }
}

export default HomeAbout;

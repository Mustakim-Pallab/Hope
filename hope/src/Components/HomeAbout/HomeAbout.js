import React from "react";
import styles from "./HomeAbout.module.css";
import img from "../../Assets/Images/councelling_rounded.png";
import { Roll, Fade } from "react-reveal";
class HomeAbout extends React.Component {
  render() {
    return (
      <div className={`md:grid md:grid-cols-2 ${styles.about} py-20`}>
        <Fade left>
          <div className="grid justify-items-center my-20 xl:my-5 md:justify-items-end">
            <img src={img} alt="" className={`w-96 xl:my-0 ${styles.image}`} />
          </div>
        </Fade>
        <Fade right>
          <div className={`text-white px-10 lg:px-16 my-10 ${styles.subsection}`}>
            <h6 className={`text-center md:text-left ${styles.aboutUs}`}>About US</h6>
            <h2 className={`${styles.hello} text-center md:text-left`}>Hello! We Are HOPE!</h2>
            <p className="text-justify">
              Hope is an online counseling and psychotherapy website. Our team
              consists of professional therapists and counselors. Our goal is to
              make professional therapy accessible, affordable and convenient.
              Anyone struggling with mental health can reach us anytime from
              anywhere.
            </p>{" "}
            <br />
            <div className="grid justify-items-center md:justify-items-start ">
            <button >Learn More</button>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default HomeAbout;

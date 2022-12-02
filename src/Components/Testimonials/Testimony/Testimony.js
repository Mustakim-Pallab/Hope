import React from "react";
import styles from "./Testimony.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Testimony = ({ data }) => {
  return (
    <div className={`grid grid-cols-4 ${styles.testimonials}`}>
      <div></div>

      <img src={data.image} alt="" className={`${styles.image}`} />
      <div className={`${styles.testimony} text-justify `}>
        <FaQuoteLeft />
        {data.testimony}
        <br /> <br />
        <span className={`text-yellow`}>
          <Typewriter
            options={{
              strings: [`~${data.author} , ${data.designation}`],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Testimony;

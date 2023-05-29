import React from "react";
import styles from "./Testimony.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Testimony = ({ data }) => {
  console.log(data.imageName)
  return (
    <div className={`grid sm:grid-cols-2 lg:px-56 pb-2 ${styles.testimonials}`}>
      {/* <div></div> */}

      <img
        src={`http://localhost:5000/images/${data.imageName}`}
        alt=""
        className={`${styles.image}  pb-20 md:pb-2`}
      />
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

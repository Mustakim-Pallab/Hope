import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css";
import Testimony from "./Testimony/Testimony";
import { Fade } from "react-reveal";

const Testimonials = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`${styles.testimonials} p-12`}>
      <Fade bottom cascade>
        <div>
          <h2
            className={`${styles.testimony} text-green py-1 px-15 rounded-lg`}
          >
            Testimonials
          </h2>
        </div>

        <Slider {...settings} className={`pt-12`}>
          {data.map((item) => (
            <Testimony data={item} key={item.author} />
          ))}
        </Slider>
      </Fade>
    </div>
  );
};

export default Testimonials;

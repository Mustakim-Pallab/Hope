import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TherapistSlider.module.css";

const TherapistSider = ({ data }) => {
  const ref = useRef(null);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden">
      <div
        className={`text-green my-12 flex justify-center ${styles.about_text2}`}
      >
        <h3>Our Therapists</h3>
      </div>
      <Slider {...settings} className="">
        {data.map((item,i) => (
          <div className={styles.card} key={i}>
            <div className={`mx-auto  container  `}>
              <img
                className={` rounded-lg border-2 mx-auto border-green ${styles.image}`}
                src={item.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div
                  className={`font-bold text-xl mb-2 flex mx-auto ${styles.word} `}
                >
                  {item.name}
                </div>
                <p
                  className={`text-gray-700 text-base flex mx-auto ${styles.word} `}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TherapistSider;

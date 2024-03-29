import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./WeCarepage.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Reveal, Fade } from "react-reveal";

const WeCarepage = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <Fade top cascade>
      <div className={`sm:px-16 md:px-20 lg:px-32 py-32`}>
        <h2 className={`${styles.psychology} text-green `}> Psychology </h2>
        <h2 className={`${styles.offer} text-dark pb-16 `}>
          {" "}
          What we can offer{" "}
        </h2>

        <Slider {...settings}>
          {data.map((item) => (
            <div key={item._id}>
              <div className=" bg-white p-5  ">
                <a href="#">
                  <img
                    className={`rounded-lg ${styles.image}`}
                    src={`http://localhost:5000/images/${item.imageName}`}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5
                      className={`mb-2 text-2xl font-bold tracking-tight text-center  text-gray-900 dark:text-white hover:text-yellow ${styles.title}`}
                    >
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                    {item.description.slice(0, 95)}...
                  </p>
                  <button
                    className={`${styles.button}  text-yellow hover:underline rounded-lg w-full justify-center`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Fade>
  );
};

export default WeCarepage;

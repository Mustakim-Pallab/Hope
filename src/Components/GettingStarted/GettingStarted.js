import React from "react";
import styles from "./GettingStarted.module.css";
import img1 from "../../Assets/Images/reg.png";
import img2 from "../../Assets/Images/consultation.png";
import img3 from "../../Assets/Images/brain.png";
import img4 from "../../Assets/Images/man_svg.png";

const data = [
  {
    title: "Registration",
    des: "Morbi nec faucibus arcu, malesuada suscipit mauris",
    image: img1,
  },
  {
    title: "Consultation",
    des: "Morbi nec faucibus arcu, malesuada suscipit mauris",
    image: img2,
  },
  {
    title: "Brainstorming",
    des: "Morbi nec faucibus arcu, malesuada suscipit mauris",
    image: img3,
  },
  {
    title: "Get Result",
    des: "Morbi nec faucibus arcu, malesuada suscipit mauris",
    image: img4,
  },
];

const GettingStarted = () => {
  return (
    <div className={`${styles.main} py-20 rounded-lg `}>
      <h1 className={`${styles.title} text-green p-6 pb-10 text-center`}>
        Getting Started
      </h1>
      <div
        className={` grid xl:grid-cols-4 md:grid-cols-2 gap-10 m-4 px-36 `}
      >
        {data.map((item, i) => (
          <div key={i} className="grid justify-items-center">
            <img
              src={item.image}
              alt=""
              className={` border border-8 border-green rounded-full my-4 mx-10  hover:border-yellow ${styles.img}`}
            />
            <h1 className={`${styles.subtitle} text-grey-700 pt-4 pb-1`}>
              {item.title}
            </h1>
            <p className={` text-grey-700 text-center `}>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;

import React from "react";
import CountUp from "react-countup";
import styles from "./WeAreInNumberPage.module.css";

const WeAreInNumberPage = ({ data }) => {
  return (
    <div className={` p-28 ${styles.main}`}>
      <p className={`${styles.title}`}>We are in numbers</p>
      <div className={`grid lg:grid-cols-4 md:grid-cols-2 pt-20 ps-5  text-center mx-auto`}>
        {data.map((item) => (
          <div key={item.num} className="py-5 lg:py-0">
            <CountUp
              end={item.num}
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              className={`${styles.number}  text-yellow`}
            />
            <span className={`${styles.number} text-yellow`}>{item.sign}</span>
            <p className={`${styles.para} `}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeAreInNumberPage;

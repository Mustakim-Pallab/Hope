import React from "react";
import CountUp from "react-countup";
import styles from "./WeAreInNumberPage.module.css";

const WeAreInNumberPage = ({ data }) => {
  return (
    <div className={` p-28 ${styles.main}`}>
      <p className={`${styles.title}`}>We are in numbers</p>
      <div className={`grid grid-cols-4 p-20`}>
        {data.map((item) => (
          <div key={item.num}>
            <CountUp
              end={item.num}
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              className={`${styles.number} p-28 pr-0 text-yellow`}
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

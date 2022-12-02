import React from "react";
import styles from "./HomeConsultationForm.module.css";
import img from "../../Assets/Images/happy_man.jpg";
import Forms from "./Forms";

const HomeConsultationForm = () => {
  return (
    <div
      className={`grid lg:grid-cols-2 sm:grid-cols-1 gap-28 mx-10 mt-16 p-20`}
    >
      <img src={img} alt="" />
      <div>
        <h2 className={`${styles.consultation} text-green`}>Consultation</h2>
        <h1 className={`${styles.get} text-green`}>
          Get In&nbsp;
          <span className={`text-dark`}>Touch</span>
        </h1>
        <p className={`${styles.para} pb-10`}>
          Enter your Name and Email to get my eBook for only at BDT1000!
          Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        </p>

        <Forms />
      </div>
    </div>
  );
};

export default HomeConsultationForm;

import React from "react";
import styles from "./ContactUs.module.css";
import pic1 from "../../Assets/Images/hope_build_rounded.png";
import Typewriter from "typewriter-effect";

const ContactUs = () => {
  return (
    <div className=" text-center grid justify-items-center my-20  text-green">
      <h1 className={`${styles.ContactUs} mb-14 `}>Contact Us</h1>
      <img src={pic1} alt="building" className="w-56 mb-10 " />
      <address>
        <span className={`font-bold uppercase`}>Hope Tower, </span>
        <br /> 25/A Kemal Ataturk Avenue, Dhaka 1213
      </address>
      <address> +(880)12354</address>
      <address> hope@gmail.com</address>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { Slide } from "react-reveal";
import styles from "./ServiceTopbar.module.css";

const ServiceTopbar = () => {
  return (
    <div className="">
      <div className={` py-28  ${styles.about_text_container}`}>
        <div className={styles.about_text}>
          <div className={` uppercase ${styles.para}`}>
            <Slide right>Thanks For Your Interest! </Slide>
            <Slide left className={`italic`}>
              Just Drag below to see our exclusive{" "}
              <span className="text-yellow">services</span>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTopbar;

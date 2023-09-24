import React from "react";
import { Slide, Roll, Fade } from "react-reveal";
import styles from "./FAQ_Topbar.module.css";

const FAQ_Topbar = () => {
  return (
    <div className="">
      <div className={` py-28  ${styles.about_text_container}`}>
        <div className={styles.about_text}>
          <div className={` uppercase ${styles.para} `}>
            <Fade top cascade>
              The first step to receiving an answer is being brave enough to ask
              a question. It is not the answer that enlightens, but the
              question.
            </Fade>
            <Fade bottom cascade></Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ_Topbar;

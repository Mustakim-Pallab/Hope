import React from "react";
import Question from "./Question";
import styles from "./FAQ_Question.module.css";
import { Fade } from "react-reveal";

const FAQ_Questions = ({ data }) => {
  return (
    <div>
      <h1 className={` text-center text-green pt-16 pb-3 ${styles.FAQ}`}>
        FAQS
      </h1>
      <h3 className={` text-center ${styles.title} pb-16 pt-0 text-green`}>
        Frequetly Asked Questions
      </h3>
      <div>
        {data.map((item, i) => (
          <div className={` py-3 `} key={i}>
            {i % 2 == 0 ? (
              <Fade top>
                <Question item={item} />
              </Fade>
            ) : (
              <Fade right>
                <Question item={item} />
              </Fade>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ_Questions;

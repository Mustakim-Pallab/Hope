import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState } from "react";
import { Fade } from "react-reveal";
import styles from "./FAQ_AskMore.module.css";

const FAQ_AskMore = () => {
  const handleAskButton = () => {
    values.email != "" && values.question != ""
      ? setClicked(true)
      : setError(true);
    console.log(values);
  };
  const [Error, setError] = useState(false);
  const [values, setValues] = useState({
    email: "",
    question: "",
  });
  const [clicked, setClicked] = useState(false);
  return (
    <Fade top>
      <h1 className={`text-center text-green ${styles.not} pt-20`}>
        Not Enough?
      </h1>
      <h2 className={`text-center text-green ${styles.title}`}>Ask Us More</h2>
      <p className={`text-center text-gray-700 ${styles.answer}`}>
        Our Experts will try to give you answers as early as possible
      </p>
      <div>
        <div className={` p-12 lg:flex w-full   `}>
          <input
            type="text"
            className={`mx-3 w-full focus:ring-green my-4 lg:my-0 focus:border-green border border-green rounded-lg`}
            placeholder="abcd1234@domain.com"
            onChange={(e) => (values.email = e.target.value)}
          />
          <input
            type="text"
            className={` mx-3 w-full my-4 lg:my-0 focus:ring-green focus:border-green border border-green rounded-lg`}
            placeholder="Enter Your Question Here"
            onChange={(e) => (values.question = e.target.value)}
          />
          {!clicked ?  (
            <button
              type="submit"
              onClick={handleAskButton}
              className={` px-20 lg:py-0 mx-3 p-2 text-center hover:bg-transparent hover:border hover:text-green hover:border-green align-items-center bg-green  text-white rounded-lg justify-center `}
            >
              {" "}
              Ask
            </button>
          ) : (
            <button
              type="submit"
              disabled
              className={` px-20 lg:py-0 mx-3 p-2 text-center  bg-green-100  text-white rounded-lg justify-center `}
            >
              {" "}
              Thanks
              
            </button>
          )}
        </div>
        {Error ? (
          <p className={`text-red-700 text-xs text-center`}>
            {" "}
            ***Error Occured, Maybe for any field is empty or anything else{" "}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </Fade>
  );
};

export default FAQ_AskMore;

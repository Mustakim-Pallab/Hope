import React from "react";
import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import styles from "./FAQ_Question.module.css";

const Question = ({ item }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className={` border border-green p-5 rounded mx-16 bg-gray-50 `}>
        <div
          className={`flex gap-2 text-green font-bold ${styles.questions} cursor-pointer`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {item.question}{" "}
          <span
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {" "}
            {!toggle ? (
              <button className={` h-full `}>
                <AiFillPlusCircle />
              </button>
            ) : (
              <button className={` h-full `}>
                <AiFillMinusCircle />
              </button>
            )}
          </span>
        </div>
        <div>
          {toggle && (
            <p
              className={` ${styles.answer} py-3 md:pr-16 xl:pr-28 text-justify text-gray-700`}
            >
              {item.answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;

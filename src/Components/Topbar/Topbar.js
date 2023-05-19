import React from "react";
import styles from "./Topbar.module.css";
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className={`${styles.back}`}>
      <div
        className={`grid grid-cols-2 md:text-sm sm:text-sm text-xs lg:text-base px-10 pt-6 h-32 text-white text-md  ${styles.top}`}
      >
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2  gap-4 sm:p-0 pt-3 sm:m-0 m-3">
          <div className="flex hover:text-yellow">
            <BsFillTelephoneFill className="my-1 sm:mx-5 mx-1" />
            <span>+(880)12354</span>
          </div>
          <div className="flex hover:text-yellow">
            <BsEnvelope className="my-1 xl:mx-3 mx-1" />
            <span>hope@gmail.com</span>
          </div>
        </div>

        <div className="flex justify-end sm:pr-7 sm:h-10 h-0 sm:mb-0 mb-10">
          <input
            className={`border-l-2 border-0 hover:border-l-2 focus:border-l-2 focus:ring-0 border-green hover:border-0  text-white bg-transparent placeholder-green  ${styles.search}`}
            type="text"
            placeholder="Search..."
          />

          <button>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

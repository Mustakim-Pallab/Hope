import React from "react";
import styles from "./Topbar.module.css";
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className={`${styles.back}`}>
      <div className={`flex mx-32 pb-12 pt-6 h-32 text-white text-md  ${styles.top}`}>
      <div className="flex hover:text-yellow">
        <BsFillTelephoneFill className="my-1 mx-5"/>
        <span>+(880)12354</span>
      </div>
      <div className="flex hover:text-yellow">
        <BsEnvelope className="my-1 ml-14 mx-3"/>
        <span>hope@gmail.com</span>
      </div>

      <div className="flex justify-end w-screen h-10">
        <input
          className={`border-l-2 border-0 hover:border-l-2 hover:border-0  text-white bg-transparent ${styles.search}`}
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

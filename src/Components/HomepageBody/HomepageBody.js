import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HomepageBody.module.css";
import img from "../../Assets/Images/online3.jpeg";
import Roll from 'react-reveal/Roll';

class RollExample extends React.Component {
  render() {
    return (
      <div className={`${styles.home}`}>
        <Roll right>
          <div className="">
          <h1 className={`${styles.header}`}>
             Happyness!
          </h1>
          </div>
        </Roll>
        <Roll left>
          <div className="">
          <h1 className={`${styles.heading} `}>
             There Are One Million Ways To Reach It... <br/>
             <span className={styles.span}>
             Councelling Is One of Them

             </span> <br/> <br/>
             <button className={styles.button} >
            Make an Appointment
          </button>
          </h1>
          </div>
        </Roll>
          
          
        
      </div>
    );
  }
}

export default RollExample;



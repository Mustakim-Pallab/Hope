import React from "react";
import styles from './register.module.css'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import Navbar from "../../Components/Navbar/Navbar";

const Register = () => {
  return (
    <div className={`${styles.all}`}>
      <Navbar />
      <div className={`flex justify-center  ${styles.background}`}>
      <div className="p-10 flex content-center">
      <RegisterForm className={`${styles.login} `}/>
      </div>
    </div>
    </div>
  );
};

export default Register;

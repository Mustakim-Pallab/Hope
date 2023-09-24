import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import LoginForm from "../../Components/LoginForm/LoginForm";
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={`${styles.all}`}>
      <Navbar />
      <div className={`flex justify-center  ${styles.background}`}>
      <div className="p-10 flex content-center">
      <LoginForm className={`${styles.login} `}/>
      </div>
    </div>
    </div>
  );
};

export default Login;

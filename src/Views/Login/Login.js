import React from "react";
import LoginBack from "../../Components/LoginBack/LoginBack";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginBack/>
      <div className={`${styles.form}`}>
      <LoginForm/>
      </div>
    </div>
  );
};

export default Login;

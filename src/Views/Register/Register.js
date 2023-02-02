import React from "react";
import LoginBack from "../../Components/LoginBack/LoginBack";
import Navbar from "../../Components/Navbar/Navbar";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import styles from "./register.module.css";

const Register = () => {
  return (
    <div>
      <Navbar />
      <LoginBack />
      <div className={`${styles.form}`}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;

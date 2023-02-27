import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import pic1 from "../../Assets/Images/tick-removebg-preview.png";
import styles from "../../Components/LoginForm/LoginForm.module.css";

const ForgetPass = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [click, setClick] = useState(false);
  const handleForgetPass = (e) => {
    setClick(true);
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setSent(true);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  // handleForgetPass();
  return (
    <section>
      
      {
        !sent?<div>
        <h1 className={`${styles.name} mt-32 text-green mb-10 text-center capitalize `}> No Worry! <br/> We are Here to help you</h1>
        <blockquote className={`capitalize w-screen text-center mb-10 text-green-100  ${styles.sign}`}>
            Just drop your email address here...
          </blockquote>
        <form onSubmit={handleForgetPass}>
        <div className="mb-6 border-2 border-green-100 rounded-full w-96 mx-auto p-2">
          
          <input
            type="email"
            className="appearance-none text-center italic bg-transparent border-none w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0"
            id="exampleFormControlInput2"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="text-center lg:text-center justify-center flex flex-row">
          {
            !click?<button
            type="submit"
            className={`inline-block px-7 py-3 bg-green text-white font-medium text-sm leading-snug uppercase  rounded-full shadow-md hover:bg-green-100 ${styles.sign} hover:text-white hover:shadow-lg focus:bg-green-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out`}
          >
            Submit
          </button>:<button
            type="button" disabled
            className={`inline-block px-7 py-3 bg-green-100 text-white font-medium text-sm leading-snug  rounded-full shadow-md  ${styles.sign} hover:text-white hover:shadow-lg focus:bg-green-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-100 active:shadow-lg transition duration-150 ease-in-out`}
          >
            Submitted..
          </button>
          }
        </div>
        </form>
        </div>:<div className="">
        <img
          src={pic1}
          alt=""
          className=" h-auto max-w-lg mx-auto my-32 w-28 mb-10"
        />
        <blockquote className={`capitalize w-screen text-center px-12 text-green italic ${styles.sign}`}>
          An Email Has just been sent to the email address you provided. Please
          visit and do follow the instructions to reset your password.
        </blockquote>
        <p className={`capitalize w-screen text-center my-10 text-dark ${styles.sign}`}> Back to  {' '}
        <Link to="/" className="hover:underline text-green hover:text-green-100">Home </Link>
        </p>
      </div>
      }
      
      {/*  */}
    </section>
  );
};

export default ForgetPass;

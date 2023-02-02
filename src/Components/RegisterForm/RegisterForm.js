import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/useAuth";
import styles from "./RegisterForm.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RegisterForm = () => {
  const { CreateAccountWithEmailAndPassword } = UseAuth();

  const [Current, setCurrent] = useState(window.location.pathname);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [trialPassword, setTrialPassword] = useState({
    inputPass: "null",
    confirmPass: null,
  });
  const [Matched, setMatched] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Checked, setChecked] = useState(false);
  const [Okay, setOkay] = useState(false);
  const [Registered, setRegistered] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const url = location.state?.from || "/home";
  const HandleEmailAndPasswordSignUp = (e) => {
    e.preventDefault();

    if (
      trialPassword.inputPass === trialPassword.confirmPass &&
      trialPassword.inputPass != "" &&
      email !== "" &&
      phone !== "" &&
      Checked
    ) {
      setMatched(true);
      setLoading(true);
      CreateAccountWithEmailAndPassword(email, trialPassword.inputPass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setRegistered(true);
          navigate("/");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
      console.log("Password matched");
    } else {
      setMatched(false);
    }

    setOkay(true);
  };

  return (
    <section
      className={`${styles.section} p-10 border rounded-lg justify-center bg-green-50`}
    >
      <div className={`gap-4 grid grid-cols-2`}>
        <h1 className={`text-green uppercase text-lg my-5 ${styles.name}`}>
          Hope
        </h1>
        <div className={`m-4`}>
          <button>
            <Link
              to={"/login"}
              className={classNames(
                Current == "/login"
                  ? `border m-2 border-green px-5 py-1 text-sm rounded-md bg-green text-white ${styles.sign}`
                  : `border m-2 border-green px-5 py-1 text-sm rounded-md  hover:bg-green text-green ${styles.sign} hover:text-white`
              )}
              onClick={() => setCurrent(window.location.pathname)}
            >
              Login
            </Link>
          </button>
          <button>
            <Link
              to={"/register"}
              className={classNames(
                Current == "/register"
                  ? `border m-2 border-green px-5 py-1 text-sm rounded-md bg-green text-white ${styles.sign}`
                  : `border m-2 border-green px-5 py-1 text-sm rounded-md  hover:bg-green text-green ${styles.sign} hover:text-white`
              )}
              onClick={() => setCurrent(window.location.pathname)}
            >
              Register
            </Link>
          </button>
        </div>
      </div>
      <br />
      <h1 className={`text-green text-center text-sm my-6 ${styles.welcome}`}>
        Be a Part of Our Family!
      </h1>
      <p className={` text-green-100 text-center text-sm my-6 ${styles.sign}`}>
        Create Your Own Account!
      </p>
      <form onSubmit={HandleEmailAndPasswordSignUp}>
        <div className="mb-6 border-b  border-gray-100">
          <input
            type="text"
            className="appearance-none text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6 border-b  border-gray-100">
          <input
            type="text"
            className="appearance-none text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-6 border-b  border-gray-100">
          <input
            type="password"
            className="appearance-none focus:ring-0 text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
            onChange={(e) => (trialPassword.inputPass = e.target.value)}
          />
        </div>
        <div className="mb-6 border-b  border-gray-100">
          <input
            type="password"
            className="appearance-none focus:ring-0 text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Confirm Password"
            onChange={(e) => (trialPassword.confirmPass = e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input focus:ring-0 outline:none appearance-none h-4 w-4 border border-green rounded-sm bg-transparent checked:bg-green checked:border-green focus:outline-none  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer after:hidden before:hidden"
              id="exampleCheck2"
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label
              className={`form-check-label inline-block ${styles.sign} text-green`}
              htmlFor="exampleCheck2"
            >
              I agree to the terms of service
            </label>
          </div>
          <a
            href="https://www.astartingpoint.com/static/tos.html?gclid=Cj0KCQiA8t2eBhDeARIsAAVEga0G5BN_sabRO6tdKVFdLLX23L3jsPkGSzoDq1bqm4AkeL_jmaRPgJgaAkx1EALw_wcB"
            className={`text-green-100 hover:text-green underline  ${styles.sign}`}
          >
            Terms and Services
          </a>
        </div>

        <div className="text-center lg:text-center justify-center flex flex-row">
          {!Loading && !Registered ? (
            <button
              type="submit"
              className={`inline-block px-7 py-3 bg-green text-white font-medium text-sm leading-snug uppercase  rounded-full shadow-md hover:bg-green-100 ${styles.sign} hover:text-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Register
            </button>
          ) : Loading && !Registered ? (
            <button
              type="button"
              disabled
              className={`inline-block px-7 py-3 bg-green text-white font-medium text-sm leading-snug uppercase  rounded-full shadow-md hover:bg-green-100 ${styles.sign} hover:text-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
            >
              Loading.....
            </button>
          ) : (
            <p
              className={`inline-block px-7 py-3  text-green  text-sm leading-snug uppercase ${styles.sign} font-bold `}
            >
              Registration Successful
            </p>
          )}
        </div>
        {!Okay && Matched ? (
          <p></p>
        ) : !Okay ? (
          <p></p>
        ) : !Matched ? (
          <p
            className={` text-green-100 text-center text-sm my-6 ${styles.sign}`}
          >
            {" "}
            *** Both Password Doesn't matched{" "}
          </p>
        ) : (
          <p></p>
        )}
        {Okay && email != "" ? (
          <p></p>
        ) : !Okay ? (
          <p></p>
        ) : email == "" ? (
          <p
            className={` text-green-100 text-center text-sm my-6 ${styles.sign}`}
          >
            {" "}
            *** Without e-mail registration cannot be done{" "}
          </p>
        ) : (
          <p></p>
        )}
        {Okay && phone != "" ? (
          <p></p>
        ) : !Okay ? (
          <p></p>
        ) : phone == "" ? (
          <p
            className={` text-green-100 text-center text-sm my-6 ${styles.sign}`}
          >
            {" "}
            *** Please Input a valid Phone Number{" "}
          </p>
        ) : (
          <p></p>
        )}
        {Okay && Checked ? (
          <p></p>
        ) : !Okay ? (
          <p></p>
        ) : !Checked ? (
          <p
            className={` text-green-100 text-center text-sm my-6 ${styles.sign}`}
          >
            {" "}
            *** You must agree to the terms of service{" "}
          </p>
        ) : (
          <p></p>
        )}
      </form>
    </section>
  );
};

export default RegisterForm;

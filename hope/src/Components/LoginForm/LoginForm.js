import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/useAuth";
import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LoginForm = () => {
  const {
    auth,
    User,
    isLoading,
    setUser,
    setIsLoading,
    EmailAndPasswordSignIn,
    SignInWithGoogle,
    CreateAccountWithEmailAndPassword,
  } = UseAuth();

  const [Current, setCurrent] = useState(window.location.pathname);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from || "/";

  if (User.email) {
    return <div>{navigate("/")}</div>;
  }

  const HandleEmailAndPasswordLogin = (e) => {
    e.preventDefault();
    EmailAndPasswordSignIn(email, pass)
      .then((userCredential) => {
        // Signed in
        // ...
        setIsLoading(true);
        setUser(userCredential.user);
        navigate(url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log(message);
  };

  const HandleGoogleLogin = () => {
    SignInWithGoogle()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setIsLoading(true);
        setUser(result.user);
        navigate(url);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section
      className={`${styles.section} sm:p-10 p-4 border rounded-lg justify-center bg-green-50`}
    >
      <div className={` sm:gap-4 grid sm:grid-cols-2 sm:px-0 px-24 justify-items-center`}>
        <h1 className={`text-green uppercase text-lg my-5 ${styles.name}`}>
          Hope
        </h1>
        <div className={` flex `}>
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
          <button className="">
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
        Welcome!
      </h1>
      <p className={` text-green-100 text-center text-sm my-6 ${styles.sign}`}>
        Sign Into Your Account!
      </p>
      <form onSubmit={HandleEmailAndPasswordLogin}>
        <div className="mb-6 border-b  border-gray-100">
          <input
            type="email"
            className="appearance-none text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none focus:ring-0"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-6 border-b  border-gray-100">
          <input
            type="password"
            className="appearance-none focus:ring-0 text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input focus:ring-0 outline:none appearance-none h-4 w-4 border border-green rounded-sm bg-transparent checked:bg-green checked:border-green focus:outline-none  mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer after:hidden before:hidden"
              id="exampleCheck2"
            />
            <label
              className={`form-check-label inline-block ${styles.sign} text-green`}
              htmlFor="exampleCheck2"
            >
              Remember me
            </label>
          </div>
          <Link
            className={`text-green-100 hover:text-green grid justify-items-end ${styles.sign}`}
            to="/forget"
          >
            Forgot password?
          </Link>
        </div>

        <div className="text-center lg:text-center justify-center flex flex-row">
          <button
            type="submit"
            className={`inline-block px-7 py-3 bg-green text-white font-medium text-sm leading-snug uppercase  rounded-full shadow-md hover:bg-green-100 ${styles.sign} hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
          >
            Login
          </button>
        </div>
        {message != "" ? (
          <p
            className={` text-green-100 text-center text-sm my-6 ${styles.sign}`}
          >
            {" "}
            *** {message}{" "}
          </p>
        ) : (
          <p></p>
        )}
      </form>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-green before:mt-0.5 after:flex-1 after:border-t after:border-green after:mt-0.5">
        <p
          className={`text-center text-green ${styles.sign} uppercase font-semibold mx-4 mb-0`}
        >
          Or
        </p>
      </div>

      {/* Facebook */}
      <div className="w-full">
        <div className="flex flex-row items-center justify-center ">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-green text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </button>

          {/* Google */}
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={HandleGoogleLogin}
            className="inline-block p-3 bg-green text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              <path
                fill="white"
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
              />
            </svg>
          </button>

          {/* Github */}
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-green text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-git hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

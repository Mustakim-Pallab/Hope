import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import background from "../../Assets/Images/welcome.jpg";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LoginForm = () => {
  const [Current, setCurrent] = useState(window.location.pathname);
  return (
    // <section className=" px-48 border border-gray-100">
    //   <div className="px-6 h-full text-gray-800">
    //     <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
    //       {/* <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
    //         <img
    //           src={background}
    //           className="w-full"
    //           alt="Sample image"
    //         />
    //       </div> */}
    //       <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
    //         <form>
    //           <div className="flex flex-row items-center justify-center lg:justify-start">
    //             <p className="text-lg mb-0 mr-4">Sign in with</p>
    //             <button
    //               type="button"
    //               data-mdb-ripple="true"
    //               data-mdb-ripple-color="light"
    //               className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 320 512"
    //                 className="w-4 h-4"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    //                 />
    //               </svg>
    //             </button>

    //             <button
    //               type="button"
    //               data-mdb-ripple="true"
    //               data-mdb-ripple-color="light"
    //               className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 512 512"
    //                 className="w-4 h-4"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    //                 />
    //               </svg>
    //             </button>

    //             <button
    //               type="button"
    //               data-mdb-ripple="true"
    //               data-mdb-ripple-color="light"
    //               className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 448 512"
    //                 className="w-4 h-4"
    //               >
    //                 <path
    //                   fill="currentColor"
    //                   d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
    //                 />
    //               </svg>
    //             </button>
    //           </div>

    //           <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
    //             <p className="text-center font-semibold mx-4 mb-0">Or</p>
    //           </div>

    //           <div className="mb-6">
    //             <input
    //               type="text"
    //               className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //               id="exampleFormControlInput2"
    //               placeholder="Email address"
    //             />
    //           </div>

    //           <div className="mb-6">
    //             <input
    //               type="password"
    //               className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    //               id="exampleFormControlInput2"
    //               placeholder="Password"
    //             />
    //           </div>

    //           <div className="flex justify-between items-center mb-6">
    //             <div className="form-group form-check">
    //               <input
    //                 type="checkbox"
    //                 className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    //                 id="exampleCheck2"
    //               />
    //               <label
    //                 className="form-check-label inline-block text-gray-800"
    //                 for="exampleCheck2"
    //               >
    //                 Remember me
    //               </label>
    //             </div>
    //             <a href="#!" className="text-gray-800">
    //               Forgot password?
    //             </a>
    //           </div>

    //           <div className="text-center lg:text-left">
    //             <button
    //               type="button"
    //               className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    //             >
    //               Login
    //             </button>
    //             <p className="text-sm font-semibold mt-2 pt-1 mb-0">
    //               Don't have an account?
    //               <a
    //                 href="#!"
    //                 className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
    //               >
    //                 Register
    //               </a>
    //             </p>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      className={`${styles.section} p-10 border rounded-lg justify-center bg-green-50`}
    >
      <div className={`gap-4 grid grid-cols-2`}>
        <h1 className={`text-green uppercase text-lg my-5 ${styles.name}`}>
          Hope
        </h1>
        <div className={`m-4`}>
          <button
          // className={`border m-2 border-green px-5 py-1 text-sm rounded-md  hover:bg-green text-green ${styles.sign} hover:text-white`}
          >
            <Link
              to={"/login"}
              className={classNames(
                Current == "/login"
                  ? `border m-2 border-green px-5 py-1 text-sm rounded-md bg-green text-white ${styles.sign}`
                  : `border m-2 border-green px-5 py-1 text-sm rounded-md  hover:bg-green text-green ${styles.sign} hover:text-white`
              )}
              onClick={() => setCurrent(window.location.pathname)}
              // aria-current={item.current ? 'page' : undefined}
            >
              Login
            </Link>
          </button>
          <button
          // className={`border m-2 border-green px-5 py-1 text-sm rounded-md  hover:bg-green text-green ${styles.sign} hover:text-white`}
          >
            <Link
              to={"/register"}
              className={classNames(
                Current == "/register"
                  ? `border m-2 border-green px-5 py-1 text-sm rounded-md bg-green text-white ${styles.sign}`
                  : `border m-2 border-green px-5 py-1 text-sm rounded-md  hover:bg-green text-green ${styles.sign} hover:text-white`
              )}
              onClick={() => setCurrent(window.location.pathname)}
              // aria-current={item.current ? 'page' : undefined}
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
      <form>
        {/* <div className="flex flex-row items-center justify-center lg:justify-start">
          <p className="text-lg mb-0 mr-4">Sign in with</p>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
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

          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </button>

          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </button>
        </div> */}

        {/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">Or</p>
        </div> */}

        <div className="mb-6 border-b  border-gray-100">
          <input
            type="text"
            className="appearance-none text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
          />
        </div>
        <div className="mb-6 border-b  border-gray-100">
          <input
            type="password"
            className="appearance-none focus:ring-0 text-center italic bg-transparent border-none border-b-2 w-full text-teal-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Password"
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
              for="exampleCheck2"
            >
              Remember me
            </label>
          </div>
          <a
            href="#!"
            className={`text-green-100 hover:text-green  ${styles.sign}`}
          >
            Forgot password?
          </a>
        </div>

        <div className="text-center lg:text-center justify-center flex flex-row">
          <button
            type="button"
            className={`inline-block px-7 py-3 bg-green text-white font-medium text-sm leading-snug uppercase  rounded-full shadow-md hover:bg-green-100 ${styles.sign} hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
          >
            Login
          </button>
          
        </div>
      </form>
      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-green before:mt-0.5 after:flex-1 after:border-t after:border-green after:mt-0.5">
        <p
          className={`text-center text-green ${styles.sign} uppercase font-semibold mx-4 mb-0`}
        >
          Or
        </p>
      </div>

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

          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
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

          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-green text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-4 h-4"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

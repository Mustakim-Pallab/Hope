import React, { useEffect } from "react";
import { useState } from "react";
import { BsTelephoneFill,BsEnvelopeFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { navigation } from "../Navbar/NavElements";
import styles from "./Footer.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Footer = () => {
  const [Current, setCurrent] = useState(window.location.pathname);
  const [Services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
  .then(response => response.json())
  .then(result => setServices(result))
  .catch(error => console.log('error', error));

  }, []);

  return (
    <div className={`${styles.footer} text-white px-36 py-28 `}>
        <div
      className={`  grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 gap-32  `}
    >
      <div className={`text-justify`}>
        <h1 className={`${styles.name} hover:text-yellow`}>HOPE</h1>
        <p className={`${styles.para}`}>
          Mauris sit amet erat nisl. Sed leo metus, consectetur eget egestas et,
          auctor potenti consectetur.
        </p>
        <div className={`flex my-7 gap-6 ${styles.icons} `}>
          <FaFacebookF className="hover:text-yellow" />
          <FaLinkedinIn className="hover:text-yellow" />
          <FaTwitter className="hover:text-yellow" />
          <FaYoutube className="hover:text-yellow" />
        </div>
      </div>
      <div>
        <div>
          <h1 className={`${styles.services} uppercase `}>Services</h1>
          {Services.map((item) => (
            <Link
              key={item._id}
              to={item.href}
              className={classNames(
                item.href == Current
                  ? "text-yellow text-white "
                  : "text-white hover:text-yellow",
                `${styles.menu}  my-2 flex flex-col`
              )}
              onClick={() => setCurrent(window.location.pathname)}
              // aria-current={item.current ? 'page' : undefined}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1 className={`${styles.services} uppercase  `}>Menu</h1>
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.href == Current
                ? "text-yellow text-white "
                : "text-white hover:text-yellow",
              `${styles.menu} my-2 flex flex-col font-bold `
            )}
            onClick={() => setCurrent(window.location.pathname)}
            // aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <h1 className={`${styles.services} uppercase  `}>Connect with us</h1>
        <div className={`flex gap-10 mt-8 mb-5 ${styles.menu} font-bold text-lg`}>
          <BsTelephoneFill className={`  text-lg`}/>
          <span className="text-sm">
          +(880)12354
          </span>
        </div>
        <div className={`flex gap-10 my-5 ${styles.menu} font-bold text-lg`}>
          <BsEnvelopeFill className={` ${styles.iconenv}`}/>
          <span className="text-sm">
          hope@gmail.com
          </span>
        </div>
        <div className={`flex gap-8 my-5  ${styles.menu} font-bold text-lg`}>
          <MdLocationPin className={` ${styles.icon} `}/>
          <span className={`text-sm } `}>
            Hope Tower, <br/>
          25/A Kemal Ataturk Avenue, 
           Dhaka 1213
          
          </span>
    
        </div>
        
        
      </div>
      
    </div>
    <div className={` pt-16`}>
        <h5 className={`${styles.prepared} font-serif`}>
            Prepared By:
        </h5>
        <h5 className={`${styles.sign} mt-5 `}>
            Mustakim Rahman
        </h5>

        <h1 className={`${styles.pallab} font-bold text-red-800 `}>
            A. S. M Mustakim Rahman Siddique
        </h1>
        
    </div>
    </div>
  );
};

export default Footer;

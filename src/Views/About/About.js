import React, { useEffect, useState } from "react";
import AboutPage from "../../Components/AboutPage/AboutPage";
import TherapistSider from "../../Components/AboutPage/TherapistSider";
import Navbar from "../../Components/Navbar/Navbar";
import { Therapist } from "./fakedata";

const About = () => {
  // const [Therapist, setTherapist] = useState([]);
  // useEffect(()=>{
  //     fetch('./fakedata.json')
  //     .then(res=>res.json())
  //     .then(data=>console.log(data));
  // },[])
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <AboutPage />
      <TherapistSider data={Therapist} />
    </div>
  );
};

export default About;

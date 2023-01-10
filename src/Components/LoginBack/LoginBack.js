import React from "react";
import pic from "../../Assets/Images/welcome.jpg";
import pic1 from "../../Assets/Images/welcome2.jpg";

const LoginBack = () => {
  return (
    <div className={`grid grid-cols-2`}>
      <img src={pic1} alt="" />
      <img src={pic} alt="" />
    </div>
  );
};

export default LoginBack;

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
} from "@stripe/react-stripe-js";
import PaymentForm from "./Payment";

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
// console.log(PUBLIC_KEY);

const StripeHandle = ({ handlePayment }) => {
  
  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default StripeHandle;

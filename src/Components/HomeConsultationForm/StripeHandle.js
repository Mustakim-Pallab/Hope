import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Await } from "react-router-dom";
import axios from "axios";
import PaymentForm from "./Payment";
import { PUBLIC_KEY } from "./keys";

const StripeHandle = ({ handlePayment }) => {
  
  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default StripeHandle;

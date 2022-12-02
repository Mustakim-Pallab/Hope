import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function PaymentForm({ handlePayment }) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        console.log(paymentMethod.id);
        handlePayment(id);
        setSuccess(true);
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <div>
          <fieldset className="FormGroup">
            <CardElement options={CARD_ELEMENT_OPTIONS} />
          </fieldset>
          <button
            className={` p-2 w-full rounded-lg my-10 bg-green hover:bg-orange text-white font-mono `}
            type="submit"
            disabled={!stripe}
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      ) : (
        <div>
          <fieldset className="FormGroup">
            <CardElement options={CARD_ELEMENT_OPTIONS} />
          </fieldset>
          <button
            className={` p-2 w-full rounded-lg mt-10 mb-3 bg-gray-700  text-white font-mono `}
            type="submit"
            disabled
          >
            Thanks! Payment Confirmed
          </button>
          <p className={`font-serif text-xs text-green`}>
            ***You Will recieve your e-book within 2-4 working days. Please keep
            your eyes in the email address you provide to us.
          </p>
        </div>
      )}
    </>
  );
}

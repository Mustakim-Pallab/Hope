import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StripeHandle from "./StripeHandle";

const Forms = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [Values, setValues] = useState({
    firstname: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    address: "",
    paymentId: "",
  });

  const handlePayment = async (paymentId) => {
    Values.paymentId = paymentId;
    console.log(Values);
  };
  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(handlePayment)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-green font-serif text-xs  mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full  text-green border border-green  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              required
              onChange={(e) => (Values.firstname = e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-green font-serif text-xs mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full text-green border  border-green rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required
              onChange={(e) => (Values.lastName = e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-green text-xs font-serif mb-2"
              htmlFor="e-mail"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full  text-green border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="e-mail"
              type="email"
              placeholder="abcd1234@domain.com"
              required
              onChange={(e) => (Values.email = e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-green text-xs font-serif mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full text-green border border-green rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="grid-city"
              type="text"
              placeholder="Lorem Ipsum"
              required
              onChange={(e) => (Values.city = e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-green text-xs font-serif mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full text-green border border-green rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green"
                id="grid-state"
                type="text"
                placeholder="Lorem Ipsum"
                required
                onChange={(e) => (Values.state = e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-green text-xs font-serif mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full text-green border border-green rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="grid-zip"
              type="text"
              placeholder="90210"
              required
              onChange={(e) => (Values.zip = e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 my-7">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-green text-xs font-serif mb-2"
              htmlFor="address"
            >
              address
            </label>
            <textarea
              className="appearance-none block w-full  text-green border border-green rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-green"
              id="address"
              type="text"
              rows="4"
              placeholder="12/3-A Lorem Ipsum, Dollar-2, USA"
              required
              onChange={(e) => (Values.address = e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <StripeHandle handlePayment={handlePayment} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;

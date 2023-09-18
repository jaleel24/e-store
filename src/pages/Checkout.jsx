import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    billingAddress: "",
  });
  const[isTouched , setIsTouched] =  useState(true);
  const navigate = useNavigate();
  //! we are using the below code to manupilate the placeorder button once all the values return true meaning nothing is in there name , email, address ,its length === 0 then
  //! place order button will be disables and once we have all the inputs it will be enabled, we want to check it on every rerender thats another reason of this code
  //! now we are going to map it with the button
  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    billingAddress: form.billingAddress.length === 0,
  };
 
  const disabled = Object.keys(errors).some((x) => errors[x]);
  

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
    if (disabled) {
      ev.preventDefault();
      return;
    }
    
    navigate("/orderConfirmation");
  };

  const handleChange = (ev) => {
    
    const { name, value } = ev.target;
    //setIsTouched(true)
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
      
    });
    //setIsTouched(false);
  };

  
const invalidName = errors.name ? 'bg-red-200 w-full p-2 border rounded-md' : 'bg-white w-full p-2 border rounded-md';
const invalidEmail = errors.email ? 'bg-red-200 w-full p-2 border rounded-md' : 'bg-white w-full p-2 border rounded-md';
const invalidSBilling = errors.billingAddress ? 'bg-red-200 w-full p-2 border rounded-md' : 'bg-white w-full p-2 border rounded-md';
//const invalidName = errors.name ? 'bg-red-200 w-full p-2 border rounded-md' : 'bg-white w-full p-2 border rounded-md';
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="mx-12 py-4">
          <div>
            <h1 className="text-3xl font-semibold mb-4">Shopping Checkout</h1>
          </div>

          <div className="">
            <h2 className="text-xl font-semibold mb-2">Billing Information</h2>

            <div className="mb-4">
              <label className="block font-medium mb-1">Name</label>
              <input
                name="name"
                onChange={handleChange}
                className={invalidName}
                placeholder="John Doe"
                
              />
           
               {errors.name && <p className="text-red-500 ">Enter the name please: </p>}
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                name="email"
                onChange={handleChange}
                className={invalidEmail}
                placeholder="doe@gmail.com"
              />
            </div>
            {errors.email && <p className="text-red-500 ">Enter the email please: </p>}
            {/* <div className="mb-4">
              <label className="block font-medium mb-1">Shipping Address</label>
              <input
                name="shippingAddress"
                onChange={handleChange}
                className={invalidSBilling}
                placeholder="warrington"
              />
            </div> */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Billing Address</label>
              <input
                name="billingAddress"
                onChange={handleChange}
                className={invalidSBilling}
                placeholder="L9S-2C6 Warrington"
              />
            </div>
            {errors.billingAddress && <p className="text-red-500 ">Enter the Billing address: </p>}
            <div className="text-center space-x-9">
              <button
                onClick={() => navigate("/basket")}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Cancel
              </button>
             { !disabled && <button
               
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Place Order
              </button>}
            </div>
          </div>
        </div>
      </form>
      {/* Checkout Button */}
    </>
  );
};

export default Checkout;

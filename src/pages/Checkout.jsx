import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    billingAddress: "",
  });
  const navigate = useNavigate();

  const formSubmitHandler = (ev) => {
    if (formInvalid()) {
      ev.preventDefault();
      return;
    }
    navigate("/orderConfirmation");
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const formInvalid = () => {
    const errors = {
      name: form.name.length === 0,
      email: form.email.length === 0,
      billingAddress: form.billingAddress.length === 0,
    };

    const disabled = Object.keys(errors).some((x) => errors[x]);
    return disabled;
  };

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
                className="w-full p-2 border rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                name="email"
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="doe@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Shipping Address</label>
              <input
                name="shippingAddress"
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="warrington"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Billing Address</label>
              <input
                name="billingAddress"
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="L9S-2C6 Warrington"
              />
            </div>
            <div className="text-center space-x-9">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Place Order
              </button>
              <button
                onClick={() => navigate("/basket")}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* Checkout Button */}
    </>
  );
};

export default Checkout;

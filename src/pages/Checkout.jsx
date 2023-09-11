import React from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  return  <>
      <div className=" mx-12 py-4">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Shopping Checkout</h1>
        </div>
        {/* Shipping Information */}
      
            <div className="">
                <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border rounded-md"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="doe@gmail.com"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block font-medium mb-1">
                      Billing Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="warrington"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block font-medium mb-1">
                      Shipping Address
                    </label>
                    <input
                      type="text"
                      id="text"
                      name="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="L9S-2C6 Warrington"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
       
      {/* Checkout Button */}
      <div className="text-center space-x-9">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Place Order
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Cancel
        </button>
      </div>
      
    </>
 
};

export default Checkout;

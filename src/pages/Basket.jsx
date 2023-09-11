import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UpIcon, TrashIcon, DownIcon } from '../components/icons';
import { cartContext } from "../context/cartContext";

const Basket = () => {
  const { getItems, clearBasket, decreaseQuantity, increaseQuantity, removeProduct, cartItems } = useContext(cartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const basketItems = getItems();
    // No need to use setCartItems, as cartItems is already provided by the context.
    console.log("Basket Items", basketItems);
  }, [getItems]);

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((p) => (
        <div className="flex" key={p.id}>
          <div><Link to={`/products/${p.id}`}>{p.title}</Link></div>
          <div className="flex">
            <div className="flex mx-48 space-x-2 py-1">
              <div className="font-bold">{p.quantity}</div>
              <div>
                <UpIcon width={20} onClick={() => increaseQuantity({ id: p.id })} />
              </div>
              <div>
                <DownIcon width={20} onClick={() => decreaseQuantity({ id: p.id })} />
              </div>
              <div>
                <TrashIcon width={20} onClick={() => removeProduct({ id: p.id })} />
              </div>
            </div>
            <div className="font-bold text-lg">${p.price}</div>
          </div>
        </div>
      ));
    } else {
      return <div>Basket is empty</div>;
    }
  };

  const renderTotal = () => {
    const total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity * currentItem.price;
    }, 0);

    return total.toFixed(2); // Display total with two decimal places
  };

  return (
  <>
    <div className="mx-44">
      <div className="flex justify-between my-4">
        <div>
          <h1 className="font-bold text-slate-600 text-2xl mx-3">
            Shopping Basket
          </h1>
        </div>
        <div>
          <button className="px-6 py-1 rounded-md bg-slate-200 hover:bg-slate-50 mx-2" onClick={() => navigate('/checkout')}>
            Checkout
          </button>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <div>
          <h1 className="font-bold text-slate-600 px-48">Item</h1>
        </div>
        <div>
          <h1 className="font-bold text-slate-600 ">Quantity</h1>
        </div>
        <div>
          <h1 className="font-bold text-slate-600 ">Price</h1>
        </div>
      </div>
    
      <div className="border-y-2 mx-2">
        <div>
          <h1 className="font-thin text-slate-600">{renderCart()}</h1>
        </div>
      </div>
      <div className="flex justify-between mx-2 my-2">
        <div>
          <button className="px-10 py-1 rounded-md bg-slate-200 hover:bg-slate-50" onClick={() => clearBasket()}>
            Clear
          </button>
        </div>
        <div className="font-bold text-2xl mx-24">Total: ${renderTotal()}</div>
      </div>
    </div></>
  );
};

export default Basket;

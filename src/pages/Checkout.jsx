import React from 'react';
import { Link } from 'react-router-dom';
const Checkout = () => {
  return (
  <>
   <div className='text-green-950 font-semibold'>Checkout</div>
   <Link to="/basket" >Go to Basket</Link>
  </>
  )
}

export default Checkout;
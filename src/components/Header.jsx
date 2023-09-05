import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
    <nav className="bg-gray-400  py-3 rounded-md flex justify-end space-x-16 font-bold ">
    {/* <ul className="hover:bg-gray-200 rounded-md px-3 py-3"><Link to="/home">Home</Link> </ul> */}
      <ul className="hover:bg-gray-200  rounded-md px-3 py-3"><Link to="/basket">Basket</Link></ul>
      <ul className="hover:bg-gray-200 rounded-md px-3 py-3"> <Link to="/checkout">Checkout</Link></ul>
     
      
    </nav>
  </header>
  )
}

export default Header
import React from 'react'
import { HomeIcon, CartIcon } from './icons'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
     
    <nav className="bg-gray-400  py-2 rounded-md flex justify-between space-x-16 font-bold ">
      <ul className=" rounded-md px-3 py-3"> <Link to="/"><HomeIcon width={40}/></Link></ul>     
      <ul className="  rounded-md px-3 py-3 text-2xl"> My e-com Store</ul>
      <ul className="  rounded-md px-3 py-3"><Link to="/basket"><CartIcon width={40}/></Link></ul>
     
     
      
    </nav>
  </header>
  )
}

export default Header
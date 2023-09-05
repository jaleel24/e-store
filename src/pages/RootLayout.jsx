import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Home from './Home';

const RootLayout = () => {

  return (
    <>
      <Header />
      <div className='flex'>
      <div>
        <Home />
      </div>
       <div>
       <main>
       <Outlet />
       </main>
       </div>
      </div>
    </>
    
    
  )
}

export default RootLayout;
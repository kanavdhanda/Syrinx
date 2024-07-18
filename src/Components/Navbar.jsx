import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className='flex  justify-between py-10 px-20 h-20  text-red-100'>
        <img src={logo} alt="" className='h-20' />
        <div className="ccslogo"></div>
    </div>
  )
}

export default Navbar
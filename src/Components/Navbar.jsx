import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        Cookies.remove('token');
        // Redirect to the login page
        navigate('/login');
    };
  return (
    <div className='flex  justify-between py-10 px-20 h-20  text-red-100'>
      <img src={logo} alt="" />
        <div className="ccslogo">askd</div>
        <button onClick={handleLogout} className="w-64 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Logout
        </button>
    </div>
  )
}

export default Navbar

import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import Cookies from 'js-cookie'
const Navbar = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from local storage
        Cookies.remove('token');
        // Redirect to the login page
        navigate('/');
    };
  return (
    <div className='flex  justify-between pt-5 px-20 items-center text-red-100'>
      <img src={logo} className='h-20' alt="" />
        <button onClick={handleLogout} className=" h-10 px-10 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Logout
        </button>
    </div>
  )
}

export default Navbar
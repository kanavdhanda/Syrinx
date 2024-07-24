
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import Cookies from 'js-cookie'
const Navbar = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token');
        navigate('/');
    };
  return (
    <div className='flex  justify-between pt-5 px-20 items-center text-red-100'>
      <img src={logo} onClick={() =>{ navigate('/home')}} className='h-20 cursor-pointer' alt="" />
      <div className="flex gap-3">
      <button onClick={() => {navigate('/home')}} className=" h-10 px-10 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Home
        </button>
        <button onClick={() => {navigate('/rulebook')}} className=" h-10 px-10 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Rulebook
        </button>
        <button onClick={() => {navigate('/leaderboard')}} className=" h-10 px-5 text-white  rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Leaderboard
        </button>
        <button onClick={() => {navigate('/members')}} className=" h-10 px-10 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
          Members
        </button>
        </div>
        <button onClick={handleLogout} className=" h-10 px-10 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Logout
        </button>
    </div>
  )
}

export default Navbar
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from '../Components/Navbar';
export default function PrivateRoute({ children }){
    const token = Cookies.get('token');
    // return token ? children : <Navigate to="/login" />;
    return children;
}
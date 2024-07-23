// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';

// export default function PrivateRoute({ children }){
//     const navigate = useNavigate();
//     const token = Cookies.get('token');
//     return token ? children : navigate('/');
//     // return children;
// }
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const token = Cookies.get('token');

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [navigate, token]); // Dependencies array ensures effect runs only when `navigate` or `token` changes

    if (!token) {
        // Optionally, render null or a loading indicator while the redirect is being processed
        return null;
    }

    return children;
}
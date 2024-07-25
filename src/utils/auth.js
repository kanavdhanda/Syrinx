import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const [isAuthorized, setIsAuthorized] = useState(false);

    const dataLao = async (token1) => {
        try {
            const tokenString = token1.split(",");
            const sesId = tokenString.map(item => parseInt(item, 10));
            const response = await axios.post("https://api.syrinx.ccstiet.com/teaminfo", {
                SessionID: sesId
            });

            return response.data;
        } catch (e) {
            console.error("Error fetching data:", e);
            return null;
        }
    }

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                navigate('/');
            } else {
                const data = await dataLao(token);
                if (!data) {
                    navigate('/');
                } else {
                    setIsAuthorized(true);
                }
            }
        }

        verifyToken();
    }, [navigate, token]);

    if (!isAuthorized) {
        return null;
    }

    return children;
}

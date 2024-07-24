import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const dataLao = async(token1)=>{
        try{
          const tokenString = token1.split(",");
          
          const sesId = tokenString.map(item => parseInt(item, 10));
    
          const response = await axios.post("http://127.0.0.1:8080/teaminfo",{
            SessionID : sesId
          }
          )
          console.log(response.data);
          return response.data;
        }
        catch(e){
          console.error("Error fetching data:", e)
        }
      }
    useEffect(() => {
        if (!token) {
            navigate('/');
        }
        else {
            const data = dataLao(token);
            if(!data){
                navigate('/');
            }
        }
    }, [navigate, token]); 

    if (!token) {
        return null;
    }

    return children;
}
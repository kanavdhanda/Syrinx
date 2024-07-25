import  { Fragment,useState,useEffect } from "react";
import GdLoader from "../godot/gdLoader";
import { useParams , useNavigate} from "react-router-dom";
import { games } from "../Config/gdConfig";
// import Cookies from "js-cookie";

// import PauseMenu from "../Components/PauseMenu";


export default function Level() {
  
  let { id } = useParams();
  let gameId = parseInt(id, 10);
  // const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // const handleLogout = () => {  
  //   Cookies.remove('token');
  //       navigate('/');
  // }

  return (
      <GdLoader gdConfig={games[gameId]} />
  );
}
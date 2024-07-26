import  { Fragment,useState,useEffect } from "react";
import GdLoader from "../godot/gdLoader";
import { useParams , useNavigate} from "react-router-dom";
import { games } from "../Config/gdConfig";
import Leaderboard from "../Pages/leaderboard"
// import Cookies from "js-cookie";

// import PauseMenu from "../Components/PauseMenu";


export default function Level() {
  
  let { id } = useParams();
  let gameId = parseInt(id, 10);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  // const handleLogout = () => {  
  //   Cookies.remove('token');
  //       navigate('/');
  // }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0" onClick={setIsPaused(!isPaused)}>Pause</div>
      {isPaused &&
      <div><Leaderboard /></div>
      }
      <GdLoader gdConfig={games[gameId]} />
    </div>
  );
}
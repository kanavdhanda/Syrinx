import  { Fragment,useState,useEffect } from "react";
import GdLoader from "../godot/gdLoader";
import { useParams , useNavigate, Link} from "react-router-dom";
import { games } from "../Config/gdConfig";
import Cookies from "js-cookie";

// import PauseMenu from "../Components/PauseMenu";
import char from "../assets/char.png";
import text from "../assets/text.png";
import logo from "../assets/logo.png";

export default function Level() {
  // const menuItems = [
  //   { name: "RESUME", path: "/lvls" },
  //   { name: "RULEBOOK", path: "/rulebook" },
  //   { name: "LEADERBOARD", path: "/leaderboard" },
  //   { name: "MEMBERS", path: "/members" },
  // ];
  const menuItems = [
    // { name: "PLAY GAME", path: "/lvls" },
    { name: "RESUME", path: "/lvls" },
    { name: "RULEBOOK", path: "/rulebook" },
    { name: "LEADERBOARD", path: "/leaderboard" },
    { name: "MEMBERS", path: "/members" },
    { name: "LOGOUT",   path:"/"}
  ];
  let { id } = useParams();
  let gameId = parseInt(id, 10);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const [hoverIndex, setHoveredIndex] = useState(0);

  // const handleKeyDown = (e) => {
  //   if (e.key === "Escape") {
  //     setIsPaused(!isPaused);
  //   // } else if (e.key === "ArrowDown") {
  //   //   setHoveredIndex((prevIndex) => (prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0));
  //   // } else if (e.key === "Enter") {
  //   //   navigate(menuItems[hoverIndex].path);}
  // }};
  const handleLogout = () => {  
    Cookies.remove('token');
        navigate('/');
  }

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [hoverIndex]);
  return (
    <div className="relative w-full h-full">
         {/* Change the text to button and style it */}

      {/* <button
        className="absolute bg-red-300 p-10 top-0 left-0 z-50"
        onClick={() => setIsPaused(!isPaused)}
      >
        Pause
      </button> */}
      <div
        className="absolute z-10"
      >
      
        {/* Down below you will need to write code for the Pause screen */}

        {isPaused && (
          <>
          {/* <div className="absolute z-40 top-0 left-0 w-screen h-full transition-all">
          <PauseMenu />
          </div> */}
  <div className="flex flex-col items-center justify-center bg-black w-screen h-screen text-white" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div>
        <img src={text} alt="" className="mb-10" />
        <div className="flex items-left justify-center space-y-4 text-xl">
          <div className="home_page_grid">
            {menuItems.map((item, index) => (
             <Fragment key={item.name}> {/* Use item's unique property as key */}
             <img src={logo} alt="SX Logo" className={`${hoverIndex === index ? 'opacity-1' : 'opacity-0'} h-10 w-24'`} />
             <div className="space-x-2 text-3xl mb-4" onMouseEnter={() => setHoveredIndex(index)}>
               {hoverIndex === index}
               {item.name!="LOGOUT" &&<Link to={item.path} className={hoverIndex == index ? "text-blue-500" : 'text-white'}>
                 {item.name}
               </Link>}
               {item.name=="LOGOUT" &&
               <div className={ "text-red-500 hover:cursor-pointer"} onClick={handleLogout}>
                 <span>{item.name}</span>
                 </div>}
             </div>
           </Fragment>
            ))}
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center text-center text-xl">
          <div className="text-center">
            <p>CCS@2024</p>
            <p>CREATIVE COMPUTING SOCIETY</p>
          </div>
        </div>
      </div>
          </>
        )}
      </div>

      <GdLoader gdConfig={games[gameId]} />
    </div>
  );
}
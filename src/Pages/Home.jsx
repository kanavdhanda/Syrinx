import React,{ useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import char from "../assets/char.png";
import text from "../assets/text.png";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "PLAY GAME", path: "/lvls" },
  { name: "RULEBOOK", path: "/rulebook" },
  { name: "LEADERBOARD", path: "/leaderboard" },
  { name: "MEMBERS", path: "/members" },
];

export default function Home() {
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const [hoverIndex, setHoveredIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setHoveredIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1));
    } else if (e.key === "ArrowDown") {
      setHoveredIndex((prevIndex) => (prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0));
    } else if (e.key === "Enter") {
      navigate(menuItems[hoverIndex].path);}
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hoverIndex]);
  

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black w-full h-[85vh] text-white">
        <img src={text} alt="" className="mb-10" />
        <div className="flex items-center space-y-4 text-xl">
          <div className="home_page_grid">
            {menuItems.map((item, index) => (
             <React.Fragment key={item.name}> {/* Use item's unique property as key */}
             <img src={logo} alt="SX Logo" className={`${hoverIndex === index ? 'opacity-1' : 'opacity-0'} h-10 w-24'`} />
             <div className="space-x-2 text-3xl mb-4" onMouseEnter={() => setHoveredIndex(index)}>
               {hoverIndex === index}
               <Link to={item.path} className={hoverIndex == index ? "text-blue-500" : 'text-white'}>
                 {item.name}
               </Link>
             </div>
           </React.Fragment>
            ))}
          </div>
          <div className="ml-10">
            <img src={char} alt="" className="h-64" />
          </div>
        </div>
        <div className="flex items-center justify-center mt-24 text-center text-xl">
          <div>
            <p>CCS@2024</p>
            <p>CREATIVE COMPUTING SOCIETY</p>
          </div>
        </div>
      </div>
    </>
  );
}
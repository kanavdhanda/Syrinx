import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import text from "../assets/text.png";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "RESUME", path: "/lvls" },
  { name: "RULEBOOK", path: "/rulebook" },
  { name: "LEADERBOARD", path: "/leaderboard" },
  { name: "MEMBERS", path: "/members" },
];

export default function PauseMenu() {
  
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
    <div className="flex flex-col items-center justify-center bg-black w-full h-screen text-white " style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <img src={text} alt="" className="mb-20 w-[500px] transition-all" />
      <div className="flex flex-col space-y-4 text-xl">
        {menuItems.map((item, index) => (
          <div
            key={item.name}
            className={`flex items-center space-x-2 text-3xl ${
              hoverIndex === index ? "text-blue-500" : "text-white"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <Link to={item.path}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-24 text-center text-xl">
        <div>
          <p>CCS@2024</p>
          <p>CREATIVE COMPUTING SOCIETY</p>
        </div>
      </div>
    </div>
  );
}
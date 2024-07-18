import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
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

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1));
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0));
    } else if (e.key === "Enter") {
      navigate(menuItems[selectedIndex].path);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-black w-full h-[80vh] text-white">
        <img src={text} alt="" />
        <div className="flex items-center space-y-4 text-xl">
          <div className="">
            {menuItems.map((item, index) => (
              <div key={item.name} className="flex items-center space-x-2">
                {selectedIndex === index && (
                  <img src={logo} alt="SX Logo" className="h-6 w-6" />
                )}
                <Link to={item.path} className={selectedIndex === index ? "text-blue-500" : ""}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="ml-10">
            <img src={char} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center mt-12 text-center text-sm">
          <div>
            <p>CCS@2024</p>
            <p>CREATIVE COMPUTING INDUSTRY</p>
          </div>
        </div>
      </div>
    </>
  );
}

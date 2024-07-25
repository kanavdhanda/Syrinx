import { Fragment, useState, useEffect, useMemo, useCallback } from "react";
import GdLoader from "../godot/gdLoader";
import { useParams, useNavigate, Link } from "react-router-dom";
import { games } from "../Config/gdConfig";
import Cookies from "js-cookie";
import char from "../assets/char.png";
import text from "../assets/text.png";
import logo from "../assets/logo.png";

export default function Level() {
  const menuItems = [
    { name: "RESUME", path: "/lvls" },
    { name: "RULEBOOK", path: "/rulebook" },
    { name: "LEADERBOARD", path: "/leaderboard" },
    { name: "MEMBERS", path: "/members" },
    { name: "LOGOUT", path: "/" }
  ];

  let { id } = useParams();
  let gameId = parseInt(id, 10);
  const gdConfig = useMemo(() => games[gameId], [gameId]);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const [hoverIndex, setHoveredIndex] = useState(0);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setIsPaused((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleLogout = useCallback(() => {
    Cookies.remove('token');
    navigate('/');
  }, [navigate]);

  return (
    <div className="relative w-full h-full">
      <button
        className="absolute bg-red-300 p-10 top-0 left-0 z-50"
        onClick={() => setIsPaused((prev) => !prev)}
      >
        Pause
      </button>
      <div className="absolute z-10">
        {isPaused && (
          <div className="flex flex-col items-center justify-center bg-black w-screen h-screen text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div>
              <img src={text} alt="" className="mb-10" />
              <div className="flex items-left justify-center space-y-4 text-xl">
                <div className="home_page_grid">
                  {menuItems.map((item, index) => (
                    <Fragment key={item.name}>
                      <img src={logo} alt="SX Logo" className={`${hoverIndex === index ? 'opacity-1' : 'opacity-0'} h-10 w-24`} />
                      <div className="space-x-2 text-3xl mb-4" onMouseEnter={() => setHoveredIndex(index)}>
                        {item.name !== "LOGOUT" && (
                          <Link to={item.path} className={hoverIndex === index ? "text-blue-500" : 'text-white'}>
                            {item.name}
                          </Link>
                        )}
                        {item.name === "LOGOUT" && (
                          <div className="text-red-500 hover:cursor-pointer" onClick={handleLogout}>
                            <span>{item.name}</span>
                          </div>
                        )}
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
        )}
      </div>
      <GdLoader gdConfig={gdConfig} />
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import leader from "../assets/leader.png";
import "../Css/Leader.css";
import { toast } from "react-toastify";
import Pagination from "../Components/Pagination";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage] = useState(15);
  const [searchQuery, setSearchQuery] = useState("");

  const dataLao = async () => {
    if (leaderboard.length === 0) {
      try {
        const response = await axios.get("https://api.syrinx.ccstiet.com/leaderboard");
        setLeaderboard(response.data);
      } catch (e) {
        if (e.response) {
          console.log(e.response.data.error);
          toast.error("Error fetching data:", e.response.data.error);
        }
      }
    }
  };

  useEffect(() => {
    dataLao();
    const interval = setInterval(() => {
      dataLao();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Pagination logic
  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = leaderboard.slice(indexOfFirstTeam, indexOfLastTeam);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search functionality
  const handleSearch = () => {
    const teamIndex = leaderboard.findIndex((team) => team.N.toLowerCase().includes(searchQuery.toLowerCase()));
    if (teamIndex !== -1) {
      const page = Math.ceil((teamIndex + 1) / teamsPerPage);
      setCurrentPage(page);
    } else {
      toast.error("Team not found");
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-[70vh]">
      <h1 className="text-5xl mb-5">Leaderboard</h1>
     
      <h1 className="ml-36 mt-8 text-2xl">{leaderboard[0]?.N}</h1>
      <h1 className="mt-14 mr-[490px] text-2xl">{leaderboard[1]?.N}</h1>
      <h1 className="mt-8 ml-[490px] text-2xl">{leaderboard[2]?.N}</h1>
      <img src={leader} alt="" className="h-[250px] absolute mt-[80px] w-[750px]" />

      <div className="mt-32 bg-[#1f1e1e] py-5 rounded-xl px-5 flex flex-col justify-center w-[900px]">
      {/* <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search for your team"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded-l-md text-black"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
          Search
        </button>
      </div> */}
        <table>
          <thead>
            <tr>
              <th>RANK</th>
              <th>TEAM NAME</th>
              <th>SCORE</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto h-20">
            {currentTeams.map((team, index) => (
              <tr key={index}>
                <td>{indexOfFirstTeam + index + 1}</td>
                <td>{team.N}</td>
                <td>{team.P}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination numberOfPages={Math.ceil(leaderboard.length / teamsPerPage)} currentPage={currentPage} onPageChange={paginate} />
    </div>
  );
}

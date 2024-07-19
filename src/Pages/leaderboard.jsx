import { useEffect, useState } from "react";
import axios from "axios";
import leader from "../assets/leader.png";
import "../Css/Leader.css";

export default function Leaderboard() {
    const [leaderboard , setLeaderboard] = useState([]);    
    const dataLao = async () => {
        try {
            const response = await axios.get("https://localhost:8080/leaderboard");
            
            if (response.status !== 200) {
                throw new Error("Something went wrong");
            }

            setLeaderboard(response.data);
            console.log("Data fetched successfully");
        } catch (e) {
            console.error("Error fetching data:", e);

        }
    }

    useEffect(()=>{
        dataLao();
    },[])



// test data
    const teams = [
        { rank: 4, name: 'HALLO', score: 1000 },
        { rank: 5, name: 'TEAM1', score: 750 },
        { rank: 6, name: 'TEAM1', score: 750 },
        { rank: 7, name: 'TEAM1', score: 750 },
        { rank: 8, name: 'TEAM1', score: 750 },
        { rank: 6, name: 'TEAM1', score: 750 },
        { rank: 6, name: 'TEAM1', score: 750 },
        { rank: 7, name: 'TEAM2', score: 690 },
        { rank: 8, name: 'TEAM3', score: 620 },
        { rank: 9, name: 'TEAM4', score: 530 },
      ];



  return (
    
    <div className="flex flex-col items-center w-full h-[70vh]">
      <h1 className="text-5xl mb-5">Leaderboard</h1>
      <h1 className="ml-16 mt-8 text-2xl">TEAM 1</h1>
      <h1 className="mt-14 mr-[400px] text-2xl">TEAM 2</h1>
      <h1 className="mt-8 ml-[420px] text-2xl">TEAM 3</h1>
      <img src={leader} alt="" className="h-[250px] absolute mt-[80px] w-[900px]" />


      <div className=" mt-16 border-2 px-5 min-h-[230px] overflow-y-auto">
      <table >
        <thead>
          <tr >
            <th>RANK</th>
            <th>TEAM NAME</th>
            <th>SCORE</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.rank}>
              <td>{team.rank}</td>
              <td>{team.name}</td>
              <td>{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
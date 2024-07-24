import { useEffect, useState } from "react";
import axios from "axios";
import leader from "../assets/leader.png";
import "../Css/Leader.css";

export default function Leaderboard() {
    const [leaderboard , setLeaderboard] = useState([]); 
    // const [page, setPage] = useState(0);   
    const dataLao = async () => {
      if(leaderboard.length === 0){
        try {
            const response = await axios.get("http://127.0.0.1:8080/leaderboard");
            console.log(response.data);
            setLeaderboard(response.data);
        } catch (e) {
            console.error("Error fetching data:", e);

        }}

    }


    useEffect(()=>{
      dataLao();
      const interval = setInterval(() => {
      dataLao();
    }, 60000); 

    return () => clearInterval(interval); 
    },[])


  return (
    
    <div className="flex flex-col items-center w-full h-[70vh]">
      <h1 className="text-5xl mb-5">Leaderboard</h1>
      <h1 className="ml-16 mt-8 text-2xl">{leaderboard[0]?.N}</h1>
      <h1 className="mt-14 mr-[400px] text-2xl">{leaderboard[1]?.N}</h1>
      <h1 className="mt-8 ml-[420px] text-2xl">{leaderboard[2]?.N}</h1>
      <img src={leader} alt="" className="h-[250px] absolute mt-[80px] w-[750px]" />


      <div className=" mt-28 bg-[#1f1e1e] py-5 rounded-xl px-5 flex justify-center w-[900px] ">
      <table >
        <thead >
          <tr >
            <th>RANK</th>
            <th>TEAM NAME</th>
            <th>SCORE</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto h-20">
          {leaderboard.map((team, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{team.N}</td>
              <td>{team.P}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
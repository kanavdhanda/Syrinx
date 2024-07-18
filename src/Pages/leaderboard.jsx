import { useEffect, useState } from "react";
import axios from "axios";
import leader from "../assets/leader.png";

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
  return (
    <div className="flex flex-col items-center w-full h-[100vh]">
      <h1 className="text-5xl mb-5">Leaderboard</h1>
      <h1 className="ml-16 mt-8">TEAM 1</h1>
      <img src={leader} alt="" className="h-[220px] absolute mt-[80px]" />
    </div>
  );
}
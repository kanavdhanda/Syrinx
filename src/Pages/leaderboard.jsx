import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Leaderboard</h1>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {leaderboard.map((user, index) => {
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.score}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
    </div>
  );
}
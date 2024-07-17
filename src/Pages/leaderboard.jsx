import { useEffect, useState } from "react";
export default function Leaderboard() {
    const [leaderboard , setLeaderboard] = useState([]);    
    const dataLao = async () => {
        try{
            const response = await fetch("https:localhost:8080/leaderboard");
        const data = await response.json();

        setLeaderboard(data);
        if(!response.ok){
            throw new Error("Something went wrong");
        
        }
        if(response.ok){
            console.log("Data fetched successfully");
        }}
        catch(e){
            console.log(e);
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
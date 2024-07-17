import GdLoader from "../Components/gdLoader"
import { games } from "../Config/gdConfig"
import { useState } from 'react'; 
import { useNavigate } from "react-router-dom";
export default function Levels(){
    const navigate = useNavigate();
    const [isPaused, setIsPaused] = useState(false);
    const levelClick = (index) => {
        navigate("/lvls/"+index)
    }
    return(
        <>
        {games.map((game, index) => {
            return(
                <div key={index}>
                    <button onClick={()=>{levelClick(index)}}>Level : {index+1}</button>
                </div>
            )
        })
        }
        </>
    )
}
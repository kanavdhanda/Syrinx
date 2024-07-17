
import { games } from "../Config/gdConfig"

import { useNavigate } from "react-router-dom";

export default function Levels(){
    const navigate = useNavigate();
    const levelClick = (index) => {
        navigate("/lvls/"+index)
    }
    return(
        <>
        {games.map((game, index) => {
            return(
                <div className="flex flex-col items-center justify-center text-black" key={index}>
                    <button onClick={()=>{levelClick(index)}}>Level : {index+1}</button>
                </div>
            )
        })
        }
        </>
    )
}
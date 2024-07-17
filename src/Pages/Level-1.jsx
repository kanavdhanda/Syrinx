import GdLoader from "../Components/gdLoader"
import { games } from "../Config/gdConfig"
import { useState } from 'react'; 

export default function Level1(){

    const [isPaused, setIsPaused] = useState(false);

    return(
        <>
        <div className="relative w-full h-full">
        <button></button>
        <GdLoader gdConfig={games[0]} />
        </div>
        
        </>
    )
}
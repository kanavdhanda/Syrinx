import React, { useState } from "react";   
export default function Level(){
    const [isPaused, setIsPaused] = useState(false);
   return( <div className="relative w-full h-full">
        <button className="absolute inset-0" onClick={()=>setIsPaused(!isPaused)}>Pause</button>
        <div className="absolute inset-0 z-10" style={{backgroundColor: isPaused ? "rgba(0,0,0,0.5)" : "transparent"}}>
            <div className="flex items-center justify-center h-full">
                <h1 className="text-4xl text-white">Game Paused</h1>
            </div>
        </div>
        <GdLoader gdConfig={games[0]} />
        </div>);
}
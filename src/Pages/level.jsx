import  { useState } from "react";
import GdLoader from "../godot/gdLoader";
import { useParams } from "react-router-dom";
import { games } from "../Config/gdConfig";
export default function Level() {
  let { id } = useParams();
  let gameId = parseInt(id, 10);
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="relative w-full h-full">
         {/* Change the text to button and style it */}
      <button
        className="absolute inset-0 bg-red-300 p-10"
        onClick={() => setIsPaused(!isPaused)}
      >
        Pause
      </button>
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: isPaused ? "rgba(0,0,0,0.5)" : "transparent",
        }}
      >
        {/* Down below you will need to write code for the Pause screen */}
        {isPaused && (
          <>
            <div className="flex items-center justify-center h-full z-50 ">
              <h1 className="text-4xl text-white">Game Paused</h1>
            </div>
          </>
        )}
      </div>
      <GdLoader gdConfig={games[gameId]} />
    </div>
  );
}
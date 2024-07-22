import  { useState } from "react";
import GdLoader from "../godot/gdLoader";
import { useParams } from "react-router-dom";
import { games } from "../Config/gdConfig";
import PauseMenu from "../Components/PauseMenu";
export default function Level() {
  // let { id } = useParams();
  // let gameId = parseInt(id, 10);
  let gameId=0;
  // gameId-=1;
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="relative w-full h-full">
         {/* Change the text to button and style it */}
      {/* <button
        className="absolute bg-red-300 p-10"
        onClick={() => setIsPaused(!isPaused)}
      >
        Pause
      </button>
      <div
        className="absolute z-10"
        style={{
          backgroundColor: isPaused ? "rgba(0,0,0,0.5)" : "transparent",
        }}
      > */}
        {/* Down below you will need to write code for the Pause screen */}
        {/* {isPaused && (
          <>
            <PauseMenu />
          </>
        )}
      </div> */}
      <GdLoader gdConfig={games[gameId]} />
    </div>
  );
}

// import { games } from "../Config/gdConfig"

// import { useNavigate } from "react-router-dom";

// export default function Levels(){
//     const navigate = useNavigate();
//     const levelClick = (index) => {
//         navigate("/lvls/"+index)
//     }
//     return(
//         <>
//         {games.map((game, index) => {
//             return(
//                 <div className="flex flex-col items-center justify-center"key={index}>
//                     <button className="text-red-500 p-10 bg-black"  onClick={()=>{levelClick(index)}}>Level : {index+1}</button>
//                 </div>
//             )
//         })
//         }
//         </>
//     )
// }

import React, { useState } from 'react';
import test from '../assets/bg2.jpeg';
import { useNavigate } from "react-router-dom";

const LevelSelect = () => {
  const [selectedLevels, setSelectedLevels] = useState([false, false, false, false]);
const navigate = useNavigate();
  const handleClick = (index) => {
    // const newSelectedLevels = [...selectedLevels];
    // newSelectedLevels[index] = !newSelectedLevels[index];
    // setSelectedLevels(newSelectedLevels);
        navigate("/lvls/"+index)

  };

  return (
    <>
      <div className='mt-20 text-5xl'>
        Select Level
      </div>
      <div className='flex w-full h-[80vh] justify-center items-center'>
        <div className="flex gap-5">
          <div className="flex-col flex gap-5">
            <div
              className="w-[320px] h-[200px] mt-6 bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0"
              onClick={() => handleClick(0)}
            >
              <img src={test} alt='level1' className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div
              className="w-[300px] h-[200px] ml-6 bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0"
              onClick={() => handleClick(1)}
            >
              <img src={test} alt='level2' className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
          <div className="flex-col flex gap-5">
            <div
              className="w-[300px] h-[200px] bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0"
              onClick={() => handleClick(2)}
            >
              <img src={test} alt='level3' className="w-full h-full object-cover rounded-2xl" />
            </div>
            {/* <div
              className="w-[340px] h-[200px] bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0"
              onClick={() => handleClick(3)}
            >
              <img src={test} alt='level4' className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelSelect;
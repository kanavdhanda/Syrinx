import React, { useState } from 'react';
import test from '../assets/bg2.jpg'

const LevelSelect = () => {
  const [selectedLevels, setSelectedLevels] = useState([false, false, false, false]);

  const handleClick = (index) => {
    const newSelectedLevels = [...selectedLevels];
    newSelectedLevels[index] = !newSelectedLevels[index];
    setSelectedLevels(newSelectedLevels);
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
            <div
              className="w-[340px] h-[200px] bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0"
              onClick={() => handleClick(3)}
            >
              <img src={test} alt='level4' className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelSelect;
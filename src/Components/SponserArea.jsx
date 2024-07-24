import React from 'react';
import codedarshan from '../logos/codedarshan.png';
import deradh from '../logos/deradh.png';
import interviewbuddy from '../logos/interviewbuddy.png';
import interwiu from '../logos/interwiu.png';
import notatmrp from '../logos/Notatmrp.png';
import sentinal from '../logos/sentinal.png';
import smartsavaari from '../logos/smartsavaari.png';
import wayspire from '../logos/wayspire.png';
import metvy from '../logos/metvy.png';

const SponserArea = () => {
  const sponsors = [
    { img: deradh, description: 'Deradh is a leading tech company.' },
    { img: smartsavaari, description: 'SmartSavaari provides smart travel solutions.' },
    { img: notatmrp, description: 'NotatMRP offers affordable services.' },
    { img: metvy, description: 'Metvy connects professionals globally.' },
    { img: interwiu, description: 'Interwiu is a top interview preparation platform.' },
    { img: sentinal, description: 'Sentinal ensures your security.' },
    { img: interviewbuddy, description: 'InterviewBuddy prepares you for interviews.' },
    { img: wayspire, description: 'Wayspire is an innovative tech startup.' },
  ];

  return (
    <div className='flex flex-col gap-10 justify-center items-center w-full'>
      <div className="grid grid-cols-3 gap-10 w-full">
        {sponsors.slice(0, 3).map((sponsor, index) => (
          <div key={index} className="relative bg-gray-500 border-2 h-[200px] rounded-xl flex justify-center items-center w-full group">
            <img className='w-[300px] transition-opacity duration-500 opacity-100 group-hover:opacity-0' src={sponsor.img} alt="" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {sponsor.description}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-10 w-[66%]">
        {sponsors.slice(3, 5).map((sponsor, index) => (
          <div key={index} className="relative bg-gray-500 border-2 h-[200px] rounded-xl flex justify-center items-center w-full group">
            <img className='w-[300px] transition-opacity duration-500 opacity-100 group-hover:opacity-0' src={sponsor.img} alt="" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {sponsor.description}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 w-full">
        {sponsors.slice(5).map((sponsor, index) => (
          <div key={index} className="relative bg-gray-500 border-2 h-[200px] rounded-xl flex justify-center items-center w-full group">
            <img className='w-[300px] transition-opacity duration-500 opacity-100 group-hover:opacity-0' src={sponsor.img} alt="" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {sponsor.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponserArea;
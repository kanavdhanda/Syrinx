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
    {
        img: deradh,
        description: 'Deradh is a leading technology company known for its innovative solutions and cutting-edge technology that drive progress and efficiency across various industries.'
    },
    {
        img: smartsavaari,
        description: 'SmartSavaari specializes in providing intelligent travel solutions, enhancing convenience and safety for travelers through smart technology and innovative services.'
    },
    {
        img: notatmrp,
        description: 'NotatMRP offers cost-effective services designed to meet a wide range of needs, ensuring affordability without compromising on quality and reliability.'
    },
    {
        img: metvy,
        description: 'Metvy is a global networking platform that connects professionals from diverse fields, fostering collaboration, career growth, and professional development.'
    },
    {
        img: interwiu,
        description: 'Interwiu is renowned for its top-tier interview preparation services, equipping candidates with the skills and confidence needed to excel in their interviews.'
    },
    {
        img: sentinal,
        description: 'Sentinal is a premier security company committed to ensuring your safety with advanced security solutions and reliable protection services.'
    },
    {
        img: interviewbuddy,
        description: 'InterviewBuddy focuses on preparing individuals for job interviews through comprehensive training and practice sessions, increasing their chances of success.'
    },
    {
        img: wayspire,
        description: 'Wayspire is an innovative technology startup that is pushing the boundaries of tech development, known for its creative solutions and forward-thinking approach.'
    },
    {
        img: codedarshan,
        description: 'CodeDarshan is a versatile platform where you can accomplish a wide range of coding and technical tasks, embodying the motto "CodeDarshan me sab karo Darshan."'
    }
];

  return (
    <div className='flex flex-col gap-10 justify-center items-center w-full'>
      <div className="grid grid-cols-3 gap-10 w-full">
        {sponsors.slice(0, 3).map((sponsor, index) => (
          <div key={index} className="relative bg-gray-500 border-2 h-[200px] rounded-xl flex justify-center items-center w-full group">
            <img className='w-[300px] px-3 transition-opacity duration-500 opacity-100 group-hover:opacity-0' src={sponsor.img} alt="" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {sponsor.description}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 w-full">
        {sponsors.slice(3, 6).map((sponsor, index) => (
          <div key={index} className="relative bg-gray-500 border-2 h-[200px] rounded-xl flex justify-center items-center w-full group">
            <img className='w-[300px] px-3 transition-opacity duration-500 opacity-100 group-hover:opacity-0' src={sponsor.img} alt="" />
            <div className="absolute inset-0 flex justify-center items-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {sponsor.description}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 w-full">
        {sponsors.slice(6).map((sponsor, index) => (
          <div key={index} className="relative bg-gray-500 border-2 h-[200px] rounded-xl flex justify-center items-center w-full group">
            <img className='w-[300px] px-3 transition-opacity duration-500 opacity-100 group-hover:opacity-0' src={sponsor.img} alt="" />
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
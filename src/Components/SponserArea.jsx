import React from 'react'
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
  return (
    <div className='flex flex-col gap-10 justify-center items-center w-full'>
        <div className="grid grid-cols-3 gap-10 w-full">
          <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={deradh} alt="" /></div>
          <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={smartsavaari} alt="" /></div>
          <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={notatmrp} alt="" /></div>
        </div>
        <div className="grid grid-cols-2 gap-10 w-[66%]">
        <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={metvy} alt="" /></div>
        <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={interwiu} alt="" /></div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full">
            <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={sentinal} alt="" /></div>
            <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={interviewbuddy} alt="" /></div>
            <div className="bg-gray-500 border-2 h-[200px] rounded-xl justify-center items-center w-full flex"><img className='w-[300px]' src={wayspire} alt="" /></div>
        </div>
    </div>
  )
}

export default SponserArea
import React from 'react'
import scroll from '../assets/scroll2.png'

const rulebook = ["1. The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.The game will be played in a 5v5 format.","aslkdmalsdmaldlalasmdlaksmdsaldmska"]

const Rulebook = () => {
  return (
    <div className="flex flex-col items-center w-full h-[80vh]">
      <h1 className='text-5xl mb-5'>RULEBOOK</h1>
      <img src={scroll} alt="" className='absolute mt-20' />
      <div className=" ml-5 overflow-y-auto h-[380px] w-[490px] mt-28 text-black z-10">
      <h1 className=' text-black z-10 text-2xl w-[490px]'>{rulebook}</h1>
      </div>
    </div>
  )
}

export default Rulebook
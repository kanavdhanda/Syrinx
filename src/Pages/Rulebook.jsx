import React from 'react'
import scroll from '../assets/scroll2.png'



const Rulebook = () => {
  return (
    <div className="flex flex-col items-center w-full h-[80vh]">
      <h1 className='text-5xl mb-5'>RULEBOOK</h1>
      <img src={scroll} alt="" className='absolute mt-20 '  />
      <div className=" ml-5 overflow-y-auto h-[380px] w-[490px] mt-28 text-black z-10">
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ The game consists of three levels.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ In level 1, every correct answer makes the team earn +100 points, and usage of hint will result in loss of -30 points</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ In level 2, every correct answer will earn the team +200 and usage of hint will cost them -60 points.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ In the last level,each correct answer will add 300 points to the team's score, while using a hint will deduct 90 points.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ Each team can consist of 1-4 players.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ All teams must join the official Discord server for Syrinx for all updates. </h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ Ensure that your Discord username matches the one filled in the registration form for identification purposes.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ Ensure to use only a Laptop/PC for the event.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ Participants must log in 10 minutes before the start of the game.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ Note that the answer format is case-sensitive.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ Hints will be provided to ease question difficulties.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ A leaderboard will display the progress of the teams for each level.</h1>
      <h1 className=' text-black z-10 text-2xl w-[490px] text-left mb-3'>○ In case of a tie between teams due to the same scores, the team that took less time to solve the questions will proceed.</h1>
      </div>
    </div>
  )
}

export default Rulebook
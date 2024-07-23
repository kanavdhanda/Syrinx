import React from 'react'
import '../Css/LevelSelect.css'

const LevelSelect = () => {
  return (
    <>
        <div className='mt-20 text-5xl'>
            Select Level
        </div>
        <div className='flex w-full h-[80vh] justify-center items-center'>
            <div className="flex gap-5">
                <div className="flex-col flex gap-5">
                    <div className="w-[320px] h-[200px] mt-6 bg-green-500 border-2 rounded-2xl ">level1</div>
                    <div className="w-[300px] h-[200px] ml-6 bg-green-500 border-2 rounded-2xl">level1</div>
                </div>
                <div className="flex-col flex gap-5">
                <div className="w-[300px] h-[200px] bg-green-500 border-2 rounded-2xl">level1</div>
                <div className="w-[340px] h-[200px] bg-green-500 border-2 rounded-2xl">level1</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LevelSelect
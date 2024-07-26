import { useState, useEffect } from 'react';
import test from '../assets/bg2.jpeg'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

import "../Css/blur.css"


const Levels = () => {
  const [isActive, setIsActive] = useState([true, false, false]);
  const navigate = useNavigate();

  const handleClick = (index) => {
    // const newSelectedLevels = [...selectedLevels];
    // newSelectedLevels[index] = !newSelectedLevels[index];
    // setSelectedLevels(newSelectedLevels);
    navigate("/level/" + index);
  };
  
  const dataLao = async() => {
    try {
      const tokenString = Cookies.get("token").split(",");
      const sesId = tokenString.map(item => parseInt(item, 10));
      const response = await axios.post(
        "https://api.syrinx.ccstiet.com/teaminfo", 
        {
        SessionID: sesId
      });
      return response.data;

    } catch (e) {
      toast.error("Error fetching data:", e.response.data.error);
    }
  }

  useEffect(() => {
    const datasetting = async()=>{
      const data=await dataLao();
    if(data.L){
      switch(data.L){
        case 1:
          setIsActive([true,false,false]);
          break;
        case 2:
          setIsActive([true,true,false]);
          break;
        case 3:
          setIsActive([false,false,true]);
          break;
        default:
          break;
      }
    }
    }
    datasetting();
    
  }, []);

  const handleempty=()=>{
    return;
  }
  return (
    // <>
    //   <div className='mt-20 text-5xl'>
    //     Select Level
    //   </div>
    //   <div className='flex w-full h-[80vh] justify-center items-center'>
    //     <div className="flex gap-5">
    //       <div className="flex-col flex gap-5">
    //         <div
    //           className="w-[320px] h-[200px] mt-6 bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200"
    //           onClick={() => handleClick(0)}
    //         >
    //           <img src={test} alt='level1' className="w-full h-full object-cover rounded-2xl" />
    //         </div>
    //         <div
    //           className="w-[300px] h-[200px] ml-6 bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200"
    //           onClick={() => handleClick(1)}
    //         >
    //           <img src={test} alt='level2' className="w-full h-full object-cover rounded-2xl" />
    //         </div>
    //       </div>
    //       <div className="flex-col flex gap-5">
    //         <div
    //           className="w-[300px] h-[200px] bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200"
    //           onClick={() => handleClick(2)}
    //         >
    //           <img src={test} alt='level3' className="w-full h-full object-cover rounded-2xl" />
    //         </div>
    //         <div
    //           className="w-[340px] h-[200px] bg-green-500 border-2 rounded-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200"
    //           onClick={() => handleClick(3)}
    //         >
    //           <img src={test} alt='level4' className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0" />



    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>


    <>
      <div className='mt-[20px] text-6xl w-full text-center'>
         Select Level
      </div>
      <div className='flex w-full h-[70vh] justify-center items-center'>
        <div className='flex mt-[-13vh] gap-[4vw] '>
          <div onClick={() => isActive[0]?handleClick(0):handleempty} className=' h-[40vh] relative w-[18vw] border-[2px] hover:border-white border-black mt-6 bg-green-500 rounded-2xl hover:scale-105 transition-all duration-200 hover:cursor-pointer' >
            <img src={test} alt='level2' className="w-full h-full object-cover rounded-2xl" />
            <div className='bg-center absolute inset-0 bg-cover text-3xl text-zinc-900  font-semibold'>
            <div className='relative'>
            <p>LEVEL-1</p>
            </div>
            </div>
          <div className='bg-slate-500  absolute bottom-5 right-5 border border-white px-2 rounded-md py-1 '>
            <button >Play
            {!isActive[0] && <FaLock />}
               </button>
          </div>
          </div>
          <div onClick={() =>isActive[1]?handleClick(1):handleempty} className=' h-[40vh] bottom-[-20vh] relative w-[18vw] border-[2px] hover:border-white border-black  bg-green-500 rounded-2xl grayscale hover:scale-105 transition-all duration-200 hover:cursor-not-allowed' >
            <div className='relative' >
          <img src={test} alt='level2' className="w-full fixed h-full object-cover rounded-2xl" />
          <div className='bg-center absolute inset-0 bg-cover text-3xl text-zinc-900  font-semibold'>
            <div className='relative'>
            <p>LEVEL-2</p>
            </div>
            </div>
            </div>
          <div className='bg-slate-500  absolute bottom-5 right-5 border border-white px-2 rounded-md py-1 '>
            <button >Play {!isActive[1] && <FaLock />}</button>
          </div>
          </div>
          <div onClick={() => isActive[2]?handleClick(2):handleempty} className='h-[40vh] w-[18vw] relative border-[2px] hover:border-white border-black bg-green-500 rounded-2xl grayscale hover:scale-105 transition-all duration-200 hover:cursor-not-allowed' >
          <img src={test} alt='level2' className="w-full h-full object-cover rounded-2xl" />
          <div className='bg-center absolute inset-0 bg-cover text-3xl text-zinc-900  font-semibold'>
            <div className='relative'>
            <p>LEVEL-3</p>
            </div>
            </div>
          <div className='bg-slate-500  absolute bottom-5 right-5 border border-white px-2 rounded-md py-1 '>
            <button >Play {!isActive[2] && <FaLock />}</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Levels;
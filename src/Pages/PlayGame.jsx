import  { useState, useEffect } from 'react';
import './crt.css';
import TypewriterText from '../Components/TypewriterText';


import './mid.css'
const PlayGame = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isTypingComplete2, setIsTypingComplete2] = useState(false);
  const [isTypingComplete3, setIsTypingComplete3] = useState(false);
  const [isTypingComplete4, setIsTypingComplete4] = useState(false);



useEffect(() => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = 'https://demo.syrinx.ccstiet.com';
  document.head.appendChild(link);
}, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-3xl crt-content gap-8 mainCont">

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4 w-full justify-center">
          <TypewriterText speed={20} text="Welcome to LEVEL-1" ticking={false} onComplete={() => setIsTypingComplete(true)} />
        </div>
        {isTypingComplete && (
          <div className="flex items-center gap-4 w-full justify-center  mt-4">
            <TypewriterText speed={20} text="This is the csed loremasdlkmaldmladasdlsamd"  ticking={false} onComplete={() => setIsTypingComplete2(true)} />
          </div>
        )}
        {isTypingComplete2 && (
          <div className="flex items-center gap-4 w-full justify-center mt-4 mb-10">
            <TypewriterText speed={20} text="Use shift to sprint Use shift to sprint Use shift to sprint Use shift to sprint" ticking={false} onComplete={() => setTimeout(()=>setIsTypingComplete3(true),1000)}/>
          </div>
        )}
        {isTypingComplete3 && (
          <p> <TypewriterText speed={25} text="Are You Ready???" ticking={true} onComplete={() => setTimeout(()=>setIsTypingComplete4(true),1000)}/></p>
          )}
          {isTypingComplete4 && (
            <div className="flex gap-6"> 
            <a href="https://demo.syrinx.ccstiet.com" target="_blank" className="btn m-4">{`Let's`} Go</a>
            </div>
          )}

          
      </div>
    </div>
  );
};

export default PlayGame;




import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../Css/Coverpage.css'
import Login from '../Pages/Login';

gsap.registerPlugin(ScrollTrigger);
export default function Coverpage() {
    const timelineRef = useRef(null);

    useEffect(() => {
        // Ensure GSAP timeline is initialized when component mounts
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#main",
            // markers: true,
            start: "50% 50%",
            end: "150% 50%",
            scrub: 2,
            pin: true
          }
        });
    
        // Animation timeline
        tl.to("#center", { height: "100vh" }, 'a')
          .to("#top", { top: "-50%" }, 'a')
          .to("#bottom", { bottom: "-50%" }, 'a')
          .to("#top-h1", { top: "60%" }, 'a')
          .to("#bottom-h1", { bottom: "-30%" }, 'a')
        //   .to("#center-h1", { top: "-30%" }, 'a')
          .to(".content", { delay: -0.2, marginTop: "0%" });
    
        // Store timeline in ref to access in cleanup
        timelineRef.current = tl;
    
        // Ensure to clean up when component unmounts
        return () => {
          if (timelineRef.current) {
            timelineRef.current.kill(); // Kill the timeline to free up resources
          }
        };
      }, []);

  return (
    <>
    <div ref={timelineRef} id="main">
        <div  id="top">
            <h1 id="top-h1">SYRINX</h1>
        </div>
        <div id="center">
            <div className="content">
              <Login />
            </div>
        </div>
        <div id="bottom">
            <h1 id="bottom-h1">SYRINX</h1>
        </div>
    </div>
    </>
  )
}

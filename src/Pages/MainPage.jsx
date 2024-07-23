

import text from '../assets/text.png';
import HeroSection from '../Components/HeroSection';
import SponserArea from '../Components/SponserArea';


export default function MainPage() {

  return (
    <div className="crt-screen min-h-screen flex flex-col justify-center items-center" >
      
      <div className=" w-full " >
        {/* Hero Section */}
        <div className=" w-full h-[70%]">
          <HeroSection  className="hero-section"/>
        </div>
        {/* Main Content */}
        <div className="crt-content">
        {/* max-w-screen-xl mx-auto h-[60vh] lg:h-[80vh] */}
        <div  className="flex gap-10 flex-col content w-[90%] lg:w-[80%] px-4 lg:px-8 py-8  max-w-screen-xl mx-auto lg:py-16  random-flicker">
          
            <div style={{ height: '800px', overflowY: 'auto' }}>

  <SponserArea />
</div>


    </div>
        </div>
        <div className="w-30px random-flicker flex-col" id='Register' style={{height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          START THE GAME
          <img src={text} alt="" />
        </div>
        </div>
        
      </div>
  );
}
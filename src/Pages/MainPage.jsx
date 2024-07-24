import text from '../assets/text.png';
import Coverpage from '../Components/Coverpage';
import HeroSection from '../Components/HeroSection';
import SponserArea from '../Components/SponserArea';


export default function MainPage() {

  return (
    <div className="crt-screen min-h-screen flex flex-col justify-center items-center" >
      
      <div className=" w-full " >
        <div className=" w-full h-[70%]">
          <HeroSection  className="hero-section"/>
        </div>
        <div className="crt-content">
        <div  className="flex gap-10 flex-col content w-[90%] lg:w-[80%] px-4 lg:px-8 py-8  max-w-screen-xl mx-auto lg:py-16  random-flicker">
          
            <div style={{ height: '850px' }}>

  <SponserArea />
</div>


    </div>
        </div>
        <div className="w-30px random-flicker flex-col" id='Register' >
          <Coverpage/>
        </div>
        </div>
      </div>
  );
}
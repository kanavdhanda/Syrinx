import text from '../assets/text.png';
import Coverpage from '../Components/Coverpage';
import HeroSection from '../Components/HeroSection';
import SponserArea from '../Components/SponserArea';
import '../Css/mainpage.css'


export default function MainPage() {

  return (
    <div className="crt-screen min-h-screen flex flex-col justify-center items-center" >
      
      <div className=" w-full " >
        <div className=" w-full mb-[8vh]  h-[70%]">
          <div className="bggrad123 z-10 h-[20vh] "></div>
          <HeroSection  className="hero-section"/>
        </div>
        <div className="crt-content">
        <div  className="flex gap-10 flex-col content w-[90%] lg:w-[80%] px-4 lg:px-8 py-8  max-w-screen-xl mx-auto lg:py-16  random-flicker">
          
            <div className='mt-9 mb-9' style={{ height: '100vh' }}>
            
              <SponserArea />
            </div>


              </div>
            </div>
            <div className="w-30px mt-[15vh] random-flicker flex-col" id='Register' >
            <div className="bggrad456 z-100 h-[20vh] "></div>
              <Coverpage/>
        </div>
        </div>
      </div>
  );
}
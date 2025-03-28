import HeroSection from '../Components/HeroSection';
import SponserArea from '../Components/SponserArea';
import '../Css/mainpage.css'
import '../Css/GamingButton.css'
import GamingButton from '../Components/GamingButton';
import {useNavigate} from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="crt-screen min-h-screen flex flex-col justify-center items-center" >
      
      <div className=" w-full " >
        <div className=" w-full mb-[8vh]  h-[70%]">
          <div className="bggrad123 z-10 h-[30vh] "></div>
          <HeroSection  className="hero-section"/>
          <div className='h-[50vh] flex flex-col justify-center items-center'>
          <p className='font-bold mb-6 text-5xl'>Ready to begin the adventure?</p>
          {/* <a href="/login" className='gaming-button w-1/3 '>Lets begin</a>
           */}
           <GamingButton text='Start' className="w-full" onClick={()=>{
            navigate('/login');
          }}/>
        </div>
        </div>
        <div className="crt-content">
        <div  className="flex gap-10 flex-col content w-[90%] lg:w-[80%] px-4 lg:px-8 py-8  max-w-screen-xl mx-auto lg:py-16  random-flicker">
          
            <div className='mt-9 mb-9' style={{ height: '100vh' }}> 
              <SponserArea />
            </div>


              </div>
            </div>
            {/* <div className="w-30px mt-[23vh] random-flicker flex-col" id='Register' > */}
            {/* <div className="bggrad456 z-100 h-[20vh] "></div> */}
              {/* <Coverpage/> */}
              {/* <Login /> */}
        {/* </div> */}
        </div>
      </div>
  );
}
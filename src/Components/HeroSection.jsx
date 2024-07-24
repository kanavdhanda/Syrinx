
import Navbar from './Navbar';
import background from '../assets/bg2.jpg';
import text from '../assets/text.png';
import ccs from '../assets/ccs.png';
import '../Css/hero.css'

const HeroSection = () => {

  return (

    <div className="relative h-screen">
      <img src={background} className=" w-full h-full object-cover opacity-70 bgimage image1" alt="" />

      {/* inset-0
      relative 
      */}

      <div className="absolute inset-0 ">
        <div className='h-[25%] mt-[17%] flex items-center justify-center text-white text-center flex-col'>
        <img src={ccs} className=' w-16 lg:w-24 mb-3' alt="" />
        <h2 className='mb-10 text-xl lg:text-3xl shadow- shadow-yellow-300 content'>presents</h2>
        <img src={text} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

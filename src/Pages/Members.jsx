import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import '../Css/Members.css';
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';
import text from '../assets/text.png';


// Don't Remove for images for members

const members = [
  { img: char1 },
  { img: char2 },
  { img: char3 },
  { img: char1},
];

const Members = () => {
  const [team, setTeam]= React.useState([]);
  const Images = () => {  
   
      setTeam(currentTeam => {
        const updatedTeam = currentTeam.A.map((item, index) => ({
          ...item,
          img: members[index].img,
        }));
        return { ...currentTeam, A: updatedTeam };
      });
    
  }

  const dataLao = async()=>{
    try{
      const tokenString = Cookies.get("token").split(",");
      
      const sesId = tokenString.map(item => parseInt(item, 10));

      const response = await axios.post("http://127.0.0.1:8080/teaminfo",{
        SessionID : sesId
      }
      )
      console.log(response.data);
      setTeam(response.data);
      Images();
    }
    catch(e){
      console.error("Error fetching data:", e)
    }
  }

  React.useEffect(()=>{
  dataLao();
  }, [])
  
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <img src={text} alt="" className="w-[550px]" />
        <div className="text-4xl mt-5">Team: {team.N}</div>
      </div>
      <div className="members-container">
      {team.A ? team.A.map((member, index) => (
  <div key={index} className={`member flex justify-center items-center flex-col ${index === 0 || index === 3 ? 'margin-top-50' : ''}`}>
    <img src={member.img} alt={member.Username} className="member-image" />
    <div className="member-info">
      <p className="member-name">{member.Username}</p>
      <p className="member-role">{member.DiscordID}</p>
    </div>
  </div>
)) : null}
      </div>
    </>
  );
};

export default Members;

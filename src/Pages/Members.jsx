import React from 'react';
import '../Css/Members.css';
import logo from '../assets/logo.png';
import text from '../assets/text.png';

const members = [
  { img: logo, name: 'Aayush Goyal' },
  { img: logo, name: 'Aayush Goyal' },
  { img: logo, name: 'Aayush Goyal' },
  { img: logo, name: 'Aayush Goyal' },
];

const Members = () => {
  return (
    <>
    <div className="flex flex-col w-full items-center justify-center ">
    <img src={text} alt="" className='w-[600px]' />
    <div className=" text-4xl mt-10">Members</div>
    </div>
    <div className="members-container">
      {members.map((member, index) => (
        <div key={index} className="member">
          <img src={member.img} alt={member.name} className="member-image" />
          <div className="member-info">
            <p className="member-name">{member.name}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Members;

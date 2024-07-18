import React from 'react';
import '../Css/Members.css';
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';
import text from '../assets/text.png';

const members = [
  { img: char1, name: 'Aayush Goyal',discID:'Web Developer' },
  { img: char2, name: 'Aayush Goyal', discID:'Web Developer' },
  { img: char3, name: 'Aayush Goyal', discID:'Web Developer' },
  { img: char1, name: 'Aayush Goyal', discID:'Web Developer' },
];

const Members = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-center">
        <img src={text} alt="" className="w-[550px]" />
        <div className="text-4xl mt-5">Members</div>
      </div>
      <div className="members-container">
        {members.map((member, index) => (
          <div key={index} className={`member flex justify-center items-center flex-col ${index === 0 || index === 3 ? 'margin-top-50' : ''}`}>
            <img src={member.img} alt={member.name} className="member-image" />
            <div className="member-info">
              <p className="member-name">{member.name}</p>
              <p className="member-role">{member.discID}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Members;

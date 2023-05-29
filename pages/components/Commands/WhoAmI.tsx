import React, { useEffect, useState } from 'react';

function WhoAmI() {
  const START_DATE = new Date('01-01-2020');
  const today = new Date();
  const [experience, setExperience] = useState<number[]>([]);
  const calculateExperience = () => {
    const startMonth = START_DATE.getFullYear() * 12 + START_DATE.getMonth();
    const endMonth = today.getFullYear() * 12 + today.getMonth();
    const monthInterval = endMonth - startMonth;
    const yearsOfExperience = Math.floor(monthInterval / 12);
    const monthsOfExperience = monthInterval % 12;
    setExperience([yearsOfExperience, monthsOfExperience]);
  };

  useEffect(() => {
    calculateExperience();
  }, []);
  return (
    <div>
      My name is Mridul, I currently live in Bangalore, India 🇮🇳 and work as a
      Fullstack engineer at{' '}
      <a
        className="font-medium underline"
        href="https://razorpay.com"
        target="_blank"
        rel="noreferrer"
      >
        SEEID
      </a>
      , a USA based startup that provides location based assets tracking service to company
      and govt organizations for there assets,vehicles and structure's(buildings) 
      {experience[0]}.{experience[1]} years and enjoy working on solving complex
      problems!
      <br />
      <br />I am currently working with the{' '}
      <a
        className="font-medium underline"
        href="https://razorpay.com/magic/"
        target="_blank"
        rel="noreferrer"
      >
        Backend  
      </a>{' '}
      team helping with improving the backend architecture of the application.
    </div>
  );
}

export default WhoAmI;

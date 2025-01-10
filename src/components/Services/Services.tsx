import React from 'react';
import ServicesCard from '../Animation/ServicesCard';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="text_head flex items-center justify-center ">
        <h1>My <span className="text-[#01F191]">Services</span></h1>
      </div>
      
      <div className="pt-[4rem] w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center">
        <ServicesCard title="web Front-end Development" num="01" descrip='I craft visually appealing and user-friendly interfaces for websites and build interactive and responsive web experiences.'/>
        <ServicesCard title="Mobile Front-end Development" num="02" descrip='I build mobile-friendly websites. I optimize for different screens and touch interactions for smooth performance and usability.' />
        <ServicesCard title="Fullstack Web Development" num="03" descrip='I handle both front-end and back-end development. From designing the user interface to managing databases and server-side logic, I build complete web applications.' />
        <ServicesCard title="UX UI Design" num="04" descrip='I focus on creating intuitive and visually pleasing user experiences. Through user research and design, I develop products that are both functional and enjoyable to use.' />
      </div>
    </div>
  );
};

export default Services;

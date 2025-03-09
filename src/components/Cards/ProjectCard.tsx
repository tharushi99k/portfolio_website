import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  image: string;
  title: string;
  description: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  link:string;
}

const ProjectCard: React.FC<Props> = ({ image, title, description, tech1, tech2, tech3, tech4,link }) => {
  return (
    <Link href={link}>
    <div className="flex flex-col gap-10 items-center ">
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-200 bg-[#2F2D36] shadow-md">
        <Image 
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain mx-auto rounded-xl shadow-md"
        />
      </div>
      <div>
        <h1 className='text-[18px] text-white'>{title}</h1>
        <p className='text-white opacity-65 text-[15px] mt-[1rem]'>{description}</p>
        <div className="mt-[1.3rem] w-full  text-sm items-center justify-center grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-[1rem]">
          <h1 className=' py-2 bg-blue-700 text-white rounded-lg text-center'>{tech1}</h1>
          <h1 className=' py-2 bg-blue-700 text-white rounded-lg text-center'>{tech2}</h1>
          <h1 className=' py-2 bg-blue-700 text-white rounded-lg text-center'>{tech3}</h1>
          <h1 className=' py-2 bg-blue-700 text-white rounded-lg text-center'>{tech4}</h1>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProjectCard;

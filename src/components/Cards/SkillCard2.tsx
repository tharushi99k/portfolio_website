import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
}

const SkillCard2: React.FC<Props> = ({ image }) => {
  return (
    <div className="flex p-2 duration-300 transition-all  text-center rounded-lg w-full">
      <Image 
        src={image}
        alt="Skill Image"
        width={500}
        height={500}
        className="object-cover  mx-auto size-24  h-auto"
      />
    </div>
  );
};

export default SkillCard2;

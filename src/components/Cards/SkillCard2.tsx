import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
}

const SkillCard2: React.FC<Props> = ({ image }) => {
  return (
    <div className="p-6 duration-300 transition-all  text-center rounded-lg">
      <Image 
        src={image}
        alt="Skill Image"
        width={60}
        height={60}
        className="object-cover mx-auto"
      />
    </div>
  );
};

export default SkillCard2;

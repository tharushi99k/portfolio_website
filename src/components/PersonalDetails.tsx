import Image from 'next/image';
import React from 'react'

interface Props {
    image: string;
    title: string;
  }

  const PersonalDetails: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
        <div className="flex items-center justify-start w-full gap-4">
        <Image 
          src={image}
          alt={title}
          width={100}
          height={100}
          className="size-7 items-center justify-center"
        />
        <h1 className='text-base text-white'>{title}</h1>
        </div>
    </div>
  )
}

export default PersonalDetails
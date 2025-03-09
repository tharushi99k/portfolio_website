import React from "react";

// Define props for the PersonalDetails component
interface PersonalDetailsProps {
  image: string;
  alt: string;
  title: string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ image, alt, title }) => {
  return (
    <div className="flex items-center justify-start gap-4 w-full">
      <img src={image} alt={alt} className="w-10 h-10" />
      <span>{title}</span>
    </div>
  );
};

export default PersonalDetails;

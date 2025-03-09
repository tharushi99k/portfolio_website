"use client"; // Required for client-side components

import React from "react";
import SkillCard2 from "../../Cards/SkillCard2";

const skills = [
  { image: "/images/skills/react.png", name: "React" },
  { image: "/images/skills/nextjs.png", name: "Next.js" },
  { image: "/images/skills/tailwind.png", name: "Tailwind" },
  { image: "/images/skills/html.png", name: "HTML" },
  { image: "/images/skills/css.png", name: "CSS" },
  { image: "/images/skills/js.png", name: "JavaScript" },
  { image: "/images/skills/typscript.png", name: "TypeScript" },
  { image: "/images/skills/node.png", name: "Node.js" },
  { image: "/images/skills/mongodb.png", name: "MongoDB" },
  { image: "/images/skills/figma.png", name: "Figma" },
];

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-12 w-full  px-4 gap-16">
      {/* Section Heading */}
      <div className="text_head flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">
          My <span className="text-[#01F191]">Skills</span>
        </h1>
      </div>

      {/* Marquee Effect */}
      <div className="mt-10 w-full md:w-[80%]  overflow-hidden rounded py-6">
        <div className="flex w-[300%] md:w-[200%] animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="w-24 md:w-32 mx-2 md:mx-4">
              <SkillCard2 image={skill.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
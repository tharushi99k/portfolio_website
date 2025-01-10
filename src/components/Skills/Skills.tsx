import React from "react";
import SkillCard2 from "../Cards/SkillCard2";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-[5rem] pb-[3rem]  ">
      <div className="text_head flex items-center justify-center ">
        <h1>
          My <span className="text-[#01F191]">Skills</span>
        </h1>
      </div>

      <div className="mt-[4rem] w-4/5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-[1rem] items-center border border-[#01F191] bg-[#2F2D36] rounded-2xl py-6">
        <SkillCard2 image="/images/skills/react.png" />
        <SkillCard2 image="/images/skills/nextjs.png" />
        <SkillCard2 image="/images/skills/tailwind.png" />
        <SkillCard2 image="/images/skills/html.png" />
        <SkillCard2 image="/images/skills/css.png" />
        <SkillCard2 image="/images/skills/js.png" />
        <SkillCard2 image="/images/skills/typscript.png" />
        <SkillCard2 image="/images/skills/node.png" />
        <SkillCard2 image="/images/skills/mongodb.png" />
        <SkillCard2 image="/images/skills/figma.png" />
      </div>
    </div>
  );
};

export default Skills;

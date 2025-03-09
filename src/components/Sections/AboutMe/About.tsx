import { useState } from "react";
import Image from "next/image";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="flex flex-col md:flex-row h-auto  p-4 items-center justify-center w-full md:w-[80%] bg-[#2F2D36] rounded-lg mx-auto">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
        <Image
          src="/images/about/me.png"
          alt="Profile Picture"
          width={1000}
          height={1000}
          className="rounded-2xl shadow-lg w-[80%]  h-auto"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-2/3 p-6 flex flex-col items-start justify-center gap-6 text-center md:text-left ">
        {/* About Me Section */}
        <div className="flex flex-col items-center md:items-start w-full gap-16">
          <h1 className="text-3xl font-bold">
            About <span className="text-[#01F191]">Me</span>
          </h1>
          <p className="text-base w-full md:w-[80%] text-justify">
            I am a passionate software engineering intern with a strong
            foundation in full-stack development, problem-solving, and IT
            management. I enjoy building scalable applications and continuously
            learning new technologies to enhance my skills.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mb-4 w-full justify-center md:justify-start">
          <button
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              activeTab === "experience"
                ? "bg-[#01F191] text-black shadow-md"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition ${
              activeTab === "education"
                ? "bg-[#01F191] text-black shadow-md"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* Content Section - Keeps Experience & Education aligned */}
        <div className="p-6 rounded-lg shadow-lg w-full min-h-[150px] bg-[#2F2D36] text-white">
          {activeTab === "experience" && (
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Experience</h2>
              <ul className="list-disc pl-5 text-left">
                <li>Software Engineer Intern | Coding Legends (2024 – Present)</li>
                <li>
                  Gaining hands-on experience in full-stack development,
                  debugging, and optimizing applications while collaborating
                  with cross-functional teams to build innovative software
                  solutions.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Education</h2>
              <ul className="list-disc pl-5 text-left">
                <li>
                  BSc (Hons) in Information Technology and Management - University
                  of Moratuwa, Faculty of Information Technology
                </li>
                <li>
                  Currently pursuing a degree that blends technical expertise
                  with IT management, focusing on software development.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
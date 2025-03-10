import React from "react";
import ProjectCard from "../../Cards/ProjectCard"; // Adjust this path if necessary
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";

const Projects = () => {
  const projects = [
    {
      title: "WanderSphere Travel Agency Website",
      description:
        "WanderSphere is a travel agency website designed to offer a seamless user experience across all devices.",
      tech1: "Next.js",
      tech2: "Tailwind CSS",
      tech3: "Node.js",
      tech4: "MongoDB",
      image: "/images/projects/wandespere.png",
      link: "https://github.com/tharushi99k",
    },
    {
      title: "LookCollection",
      description:
        "LookCollection is a web application that allows users to create, manage, and share personalized outfits.",
      tech1: "Next.js",
      tech2: "Tailwind CSS",
      tech3: "Node.js",
      tech4: "MongoDB",
      image: "/images/projects/loockcollection.png",
      link: "https://github.com/tharushi99k",
    },
    {
      title: "PearlLeaf Website & Responsive View",
      description:
        "PearlLeaf is an e-commerce website designed for selling premium teas.",
      tech1: "React.js",
      tech2: "Tailwind CSS",
      tech3: "Node.js",
      tech4: "MongoDB",
      image: "/images/projects/perlLeaf.png",
      link: "https://github.com/tharushi99k",
    },
    {
      title: "Yummy Pizza Responsive Website & Responsive",
      description:
        "This is a Pizza Hut e-commerce website. It is responsive for all devices.",
      tech1: "Next js",
      tech2: "Tailwind CSS",
      tech3: "Node.js",
      tech4: "MongoDB",
      image: "/images/projects/yummypizza.png",
      link: "https://github.com/tharushi99k",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-20 pb-12 w-full px-4 ">
      {/* Section Title */}
      <div className="text_head flex items-center justify-center mb-6 ">
        <h1 className="text-3xl font-bold">
          Recent <span className="text-[#01F191]">Projects</span>
        </h1>
      </div>

      {/* Project Slider */}
      <div className=" w-[80%] rounded-2xl py-6">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="">
                  <div className="p-2 rounded-xl shadow-md bg-[#2F2D36]">
                    <ProjectCard {...project} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-between mt-4">
            <CarouselPrevious className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
              Previous
            </CarouselPrevious>
            <CarouselNext className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
              Next
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;

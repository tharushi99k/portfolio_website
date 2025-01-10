import React from 'react'
import ProjectCard from '../Cards/ProjectCard'

const Projects = () => {
  return (
    <div className="flex flex-col items-center pt-[5rem] pb-[3rem]  ">
      <div className="text_head flex items-center justify-center ">
        <h1>
          Recent <span className="text-[#01F191]">Project</span>
        </h1>
      </div>

      <div className="mt-[4rem] w-4/5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-[1rem] items-center border border-[#01F191] rounded-2xl py-6">
       <ProjectCard 
       title='E-Commerce responsive website'
       description='This is pizza hut e-commerce website .it is responsive for all devices  '
       tech1='Reac js'
       tech2='Tailwind CSS'
       tech3='Node js'
       tech4='Mongo DB'
       image='/images/projects/pro1.png'
       />
        <ProjectCard 
       title='Cripto Extention React'
       description='This is Crypto Extension . It is for responsive web browser.user friendly interface with multiple colors . '
       tech1='Reac js'
       tech2='Tailwind CSS'
       tech3='Node js'
       tech4='Mongo DB'
       image='/images/projects/pro2.png'
       />
      </div>
    </div>
  )
}

export default Projects
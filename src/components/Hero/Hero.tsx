import React from "react";
import TypeWriterEffect from "../Animation/TypeWriterEffect";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[70vh] md:h-[98vh] ">
      <div className="flex flex-col justify-center  w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col w-[80%] sm:space-y-2  ">
              <h1 className="text-white mb-5 ">Fullstack Developer</h1>
              <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-semibold leading-10 text-white">
                Hello I m{" "}
              </h1>
              <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-semibold leading-10 text-white">
                Tharushi Nishshanka{" "}
              </h1>
              <TypeWriterEffect />
              <p className="text-sm md:text-base ">
                I am a Full Stack Web Developer dedicated to creating
                responsive, user-friendly web designs that provide seamless
                experiences across all devices.
              </p>
            </div>

            <div className="flex  items-center space-x-4 sm:space-x-8   ">
              <button className=" flex h-12 w-[50%] sm:w-[50%] md:w-[40%] items-center justify-center font-semibold overflow-hidden bg-[#2F2D36] rounded-2xl text-[#16EA99] border-[#16EA99] hover:border shadow-2xl transition-all space-x-4">
                <span className="relative z-10 text-sm sm:text-base md:text-lg">
                  Downlaod CV
                </span>
                <ArrowDownCircleIcon className="size-6" />
              </button>
              <div className="flex space-x-6">
                <Link href={"https://github.com/tharushi99k"}>
                  <Image
                    src="/images/hero/github.png"
                    alt="hero image"
                    width={100}
                    height={100}
                    className="object-contain  size-7  "
                  />
                </Link>
                <Link
                  href={" https://www.linkedin.com/in/tharushi-nishshanka/"}
                >
                  <Image
                    src="/images/hero/likdin.png"
                    alt="hero image"
                    width={100}
                    height={100}
                    className="object-contain  size-7  "
                  />
                </Link>
                <Link href={" https://medium.com/@TharushiNishshanka"}>
                  <Image
                    src="/images/hero/Medium.png"
                    alt="hero image"
                    width={100}
                    height={100}
                    className="object-contain  size-7  "
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block ml-20">
            <Image
              src="/images/hero/hero_img.png"
              alt="hero image"
              width={400}
              height={400}
              className="object-contain border-2 p-4 border-[#16EA99]  rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Fillbutton from "../buttons/fillbutton";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const stickyStyle = navSticky?'bg-black shadow-gray-900 shadow-sm':''

  return (
    <div className={`fixed w-full z-[1000] ${stickyStyle} transition-all duration-300 z-[1000] `}>
      <div className="flex items-center h-[12vh] justify-between w-4/5 mx-auto ">
        <div className="flex items-end text-[#01F191] text-lg font-semibold">
          <span className="text-3xl md:text-4xl font-bold text-white">Tk</span>
          Nishshanka
        </div>
        <div className="flex items-center justify-end w-full gap-4">
          <ul className="md:flex hidden items-center space-x-10">
            <li className="text-sm capitalize font-medium hover:border hover:border-[#01F191] lg:px-4 lg:py-4 rounded-2xl">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm capitalize font-medium hover:border hover:border-[#01F191] lg:px-4 lg:py-4 rounded-2xl">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-sm capitalize font-medium hover:border hover:border-[#01F191] lg:px-4 lg:py-4 rounded-2xl">
              <Link href="/about">About</Link>
            </li>
            <li className="text-sm capitalize font-medium hover:border hover:border-[#01F191] lg:px-4 lg:py-4 rounded-2xl">
              <Link href="/work">Work</Link>
            </li>
            <li className="text-sm capitalize font-medium hover:border hover:border-[#01F191] lg:px-4 lg:py-4 rounded-2xl">
              <Link href="/contacts">Contact</Link>
            </li>
          </ul>
          <div className="w-[10%] hidden sm:block ">
            <Fillbutton />
          </div>
        </div>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="md:hidden w-9 h-9 text-[#01F191] rotate-180"
        />
      </div>
    </div>
  );
};

export default Nav;

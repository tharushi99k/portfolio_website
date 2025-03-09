'use client';
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile: React.FC<Props> = ({ closeNav, showNav }) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 opacity-70 w-full h-[100vh]`}>
      </div>
      <ul className={`text-white ${navOpenStyle} fixed flex items-center justify-center flex-col h-full transform transition-all duration-300 delay-300 w-3/5 bg-[#2F2D36] space-y-14 z-[10006]`}>
        <li>
          <a className="text-2xl sm:text-3xl hover:text-[#01F191]" href="/">Home</a>
        </li>
        <li>
          <a className="text-2xl sm:text-3xl hover:text-[#01F191]" href="/services">Services</a>
        </li>
        <li>
          <a className="text-2xl sm:text-3xl hover:text-[#01F191]" href="/about">About</a>
        </li>
        <li>
          <a className="text-2xl sm:text-3xl hover:text-[#01F191]" href="/work">Work</a>
        </li>
        <li>
          <a className="text-2xl sm:text-3xl hover:text-[#01F191]" href="/contact">Contact</a>
        </li>
        <XMarkIcon onClick={closeNav} className="absolute top-6 right-6 w-9 h-9 text-white hover:text-[#01F191]" />
      </ul>
    </div>
  );
};

export default NavMobile;

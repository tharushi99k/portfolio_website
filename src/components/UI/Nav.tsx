'use client';

import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  const [navSticky, setNavSticky] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("home"); // Track the active link

  useEffect(() => {
    const handleScroll = () => {
      setNavSticky(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    const sections = ["home", "about", "services", "work", "contact"];
    const scrollListener = () => {
      let activeSection = "home"; 
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 80) {
          activeSection = section;
        }
      });
      setActiveLink(activeSection);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className={`fixed w-full z-[1000] ${navSticky ? 'bg-black shadow-gray-900 shadow-sm' : ''} transition-all duration-300`}>
      <div className="flex items-center h-[12vh] justify-between w-4/5 mx-auto">
        {/* Logo Section */}
        <div className="flex items-end text-[#01F191] text-lg font-semibold">
          <span className="text-3xl md:text-4xl font-bold text-white">Tk</span>
          Nishshanka
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center justify-end w-full gap-4">
          <ul className="hidden md:flex items-center space-x-10">
            {[
              { to: "home", label: "Home" },
              { to: "about", label: "About" },
              { to: "services", label: "Services" },
              { to: "work", label: "Work" },
              { to: "contact", label: "Contact" }
            ].map(({ to, label }) => (
              <li
                key={to}
                className={`text-lg capitalize font-medium lg:px-4 lg:py-4 rounded-2xl transition-all duration-200 hover:text-[#01F191] ${
                  activeLink === to ? "text-green-500" : ""
                }`}
              >
                <ScrollLink 
                  to={to} 
                  smooth={true} 
                  duration={500} 
                  offset={-80} 
                  className="cursor-pointer"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Menu Icon */}
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="md:hidden w-9 h-9 text-[#01F191] rotate-180 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nav;


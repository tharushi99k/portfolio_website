'use client'
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Nav from '@/components/Nav/Nav'
import NavMobile from '@/components/NavMobile/NavMobile'
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Skills from '@/components/Skills/Skills';
import React, {useState} from 'react';

function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler =() =>setShowNav(true);
  const closeNavHandler =() => setShowNav(false);

  return (
    <div className="overflow-hidden h-full">
      <NavMobile showNav={showNav} closeNav={closeNavHandler}/>
      <Nav openNav={showNavHandler}/>
      <Hero/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default HomePage
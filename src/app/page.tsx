'use client';

import { motion } from 'framer-motion'; 
import { InView } from 'react-intersection-observer';

import Contact from '@/components/Sections/Contact/Contact';
import Hero from '@/components/Sections/Hero/Hero';
import Nav from '@/components/UI/Nav';
import NavMobile from '@/components/UI/NavMobile';
import Projects from '@/components/Sections/Projects/Projects';
import Services from '@/components/Sections/Services/Services';
import Skills from '@/components/Sections/Skills/Skills';
import React, { useState } from 'react';
import About from '@/components/Sections/AboutMe/About';
import Footer from '@/components/Sections/Footer/Footer';

// Different animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 100 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 }, 
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 }, 
  visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className=" w-full">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />

      {/* Hero Section with zoomIn animation */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            id="home"
            ref={ref}
            className="h-screen flex items-center justify-center px-4 md:px-0 mb-0"
            variants={zoomIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Hero />
          </motion.section>
        )}
      </InView>

      {/* About Section with fadeInLeft animation */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            id="about"
            ref={ref}
            className="h-screen flex items-center justify-center w-full px-4 md:px-0 mb-5"
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <About />
          </motion.section>
        )}
      </InView>

      {/* Services Section with fadeInUp animation */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            id="services"
            ref={ref}
            className="h-screen flex items-center justify-center px-4 md:px-0 mt-96 md:mt-0 w-full"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Services />
          </motion.section>
        )}
      </InView>

      {/* Skills Section with fadeInRight animation */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            id="skills"
            ref={ref}
            className="h-screen flex items-center justify-center px-4 md:px-0 mb-0"
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Skills />
          </motion.section>
        )}
      </InView>

      {/* Projects Section with fadeInUp animation */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            id="work"
            ref={ref}
            className="h-screen flex items-center justify-center w-full px-4 md:px-0 mb-0"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Projects />
          </motion.section>
        )}
      </InView>

      {/* Contact Section with fadeInLeft animation */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.section
            id="contact"
            ref={ref}
            className="h-screen flex items-center justify-center px-4 md:px-0 mb-0"
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Contact />
          </motion.section>
        )}
      </InView>

      <Footer />
    </div>
  );
}

export default HomePage;

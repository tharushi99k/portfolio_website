'use client'
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    
    window.addEventListener('scroll', toggleVisibility);

    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#16EA99] text-white p-3 rounded-full shadow-md hover:bg-[#13d58b] transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

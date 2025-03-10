import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16  overflow-hidden px-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 justify-between items-center md:gap-7">
          {/* Logo and Name */}
          <div className="flex items-end text-[#01F191] text-lg font-semibold">
            <span className="text-3xl md:text-4xl font-bold text-white">Tk</span>
            Nishshanka
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0 text-sm">
            <a href="#about" className="text-gray-300 hover:text-gray-500 mx-4 mb-2 md:mb-0">About</a>
            <a href="#projects" className="text-gray-300 hover:text-gray-500 mx-4 mb-2 md:mb-0">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-gray-500 mx-4 mb-2 md:mb-0">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-gray-500 mx-4 mb-2 md:mb-0">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center w-full mb-6 md:mb-0 text-sm">
            <a href="https://github.com/yourusername" target="_blank" className="mx-4 text-gray-300 hover:text-gray-500">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" className="mx-4 text-gray-300 hover:text-gray-500">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:tharushinishshanka02@gmail.com" className="mx-4 text-gray-300 hover:text-gray-500">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-8 text-center text-xs">
          <p>&copy; 2025 Tharushi Nishshanka. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

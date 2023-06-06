import React from 'react';
import Logo from '../images/logo';

export function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="bg-opacity-50 bg-gray-950 lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg fixed top-0 left-0 right-0 z-10" style={{ height: '90px' }}>
      <div className="py-1 container mx-auto px-4 flex">
        <div className="flex items-center">
          <Logo />
        </div>
        <ul className="flex ml-auto pt-10">
          <li>
            <a href="#home" onClick={() => handlePageChange('About')} className={`text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4 ${currentPage === 'About'}`}>Home</a>
          </li>
          <li>
            <a href="#projects" onClick={() => handlePageChange('Project')} className={`text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4 ${currentPage === 'Project'}`}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange('Contact')} className={`text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4 ${currentPage === 'Contact'}`}>Contact</a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange('Resume')} className={`text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4 ${currentPage === 'Resume'}`}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

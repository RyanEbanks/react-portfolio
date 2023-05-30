import React from 'react';
import Logo from '../images/logo';

export function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="mb-10 mt-0 flex justify-between items-center">
      <div className="container mx-auto px-4 flex">
        <div className="flex items-center">
          <Logo />
        </div>
        <ul className="flex ml-auto pt-10">
          <li>
            <a href="#home" onClick={() => handlePageChange('About')} className={`text-white text-lg hover:text-red-400 mr-4 ${currentPage === 'About'}`}>Home</a>
          </li>
          <li>
            <a href="#projects" onClick={() => handlePageChange('Project')} className={`text-white text-lg hover:text-red-400 mr-4 ${currentPage === 'Project'}`}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => handlePageChange('Contact')} className={`text-white text-lg hover:text-red-400 mr-4 ${currentPage === 'Contact'}`}>Contact</a>
          </li>
          <li>
            <a href="#resume" onClick={() => handlePageChange('Resume')} className={`text-white text-lg hover:text-red-400 ${currentPage === 'Resume'}`}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

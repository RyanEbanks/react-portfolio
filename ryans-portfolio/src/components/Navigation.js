import React from 'react';
import Logo from '../images/logo'

export function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className='py-10 mb-12 justify-between'>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Logo />
            </div>

            <div className="hidden sm:items-center">
              <a href="#home" onClick={() => handlePageChange('About')} className={`text-white text-lg hover:text-red-400 mr-4 ${currentPage === 'About' ? 'font-bold' : 'font-normal'}`}> Home</a>
              <a href="#projects" onClick={() => handlePageChange('Project')} className={`text-white text-lg hover:text-red-400 mr-4 ${currentPage === 'About' ? 'font-bold' : 'font-normal'}`}> Projects</a>
              <a href="#contact" onClick={() => handlePageChange('Contact')} className={`text-white text-lg hover:text-red-400 mr-4 ${currentPage === 'About' ? 'font-bold' : 'font-normal'}`}> Contact</a>
              <a href="#resume" onClick={() => handlePageChange('Resume')} className={`text-white text-lg hover:text-red-400 mr-4 ${currentPage === 'About' ? 'font-bold' : 'font-normal'}`}> Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

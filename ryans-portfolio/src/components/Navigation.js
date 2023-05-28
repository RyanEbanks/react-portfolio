import React from 'react';

export function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className='py-10 mb-12 flex justify-between'>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <svg className="w-40 h-40" xmlns="http://www.w3.org/2000/svg">
                <polygon className="fill-none stroke-red-400 stroke-2" points="20,30 5,40 5,60 20,70 35,60 35,40" />
                <text className="text-center text-base font-bold" x="10" y="55" style={{ fill: '#F87171' }}>RE</text>
              </svg>
            </div>

            <div className="hidden sm:flex sm:items-center">
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

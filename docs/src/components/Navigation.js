import React, { useState } from 'react';
import Logo from '../images/logo';
import { NavLink } from 'react-router-dom';

export function Navigation({ currentPage, handlePageChange }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-opacity-50 bg-gray-950 lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg fixed top-0 left-0 right-0 z-10" style={{ height: '90px' }}>
      <div className="py-1 container mx-auto px-4 flex">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className={`lg:hidden ml-auto`}>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-red-400 focus:outline-none focus:text-red-400"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex ml-auto pt-10`}
        >
          <li>
            <NavLink
              to="/about"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 lg:hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => {
                handlePageChange('About');
                setMenuOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 lg:hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => {
                handlePageChange('Project');
                setMenuOpen(false);
              }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 lg:hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => {
                handlePageChange('Contact');
                setMenuOpen(false);
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 lg:hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => {
                handlePageChange('Resume');
                setMenuOpen(false);
              }}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

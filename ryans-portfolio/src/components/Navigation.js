import React from 'react';
import Logo from '../images/logo';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="bg-opacity-50 bg-gray-950 lg:group-hover:bg-gray-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg fixed top-0 left-0 right-0 z-10" style={{ height: '90px' }}>
      <div className="py-1 container mx-auto px-4 flex">
        <div className="flex items-center">
          <Logo />
        </div>
        <ul className="flex ml-auto pt-10">
          <li>
            <NavLink
              to="/about"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => handlePageChange('About')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => handlePageChange('Project')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => handlePageChange('Contact')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              activeClassName="text-red-400 border-b-2 border-red-400 pb-5"
              className="text-white text-lg hover:text-red-400 hover:border-b-2 hover:border-red-400 hover:pb-5 mx-4"
              onClick={() => handlePageChange('Resume')}
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

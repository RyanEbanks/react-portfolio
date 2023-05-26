import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs'

export function Navigation() {
    return(
        <>
       
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='font-white'>Logo</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li><a href="#">Resume</a></li>
            </ul>
          </nav>
        
        </>
    );
}

export default Navigation;
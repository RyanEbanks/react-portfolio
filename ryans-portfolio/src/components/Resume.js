import React from 'react';
import { MdDownload } from 'react-icons/md';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3, SiJavascript, SiMysql, SiJquery, SiExpress, SiSequelize, SiPwa, SiMongodb, SiTailwindcss, SiGraphql } from 'react-icons/si';
import { BsGit, BsFillBootstrapFill, BsFiletypeJson } from 'react-icons/bs';
import { AiFillApi } from 'react-icons/ai';
import { DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';

export function Resume() {
  return (
    <div className='pt-23'>
      <div className='w-4/5 mx-auto bg-gray-900 px-5 pb-5'>
        <div className='mx-auto'>
          <h1 className='text-5xl text-white font-bold text-center pt-20 mb-10'>Resume</h1>
          <div>
            <div className='flex flex-row'>
              <h1 className='text-lg text-white'>Download here:</h1>
              {/* NOTE: Resume is not downloading properly */}
              <a href='../../public/RyanEbanksResume.docx' download="RyanEbanksResume.docx">
              <button class="flex items-center bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded shadow ml-4">
                <MdDownload className="mr-1" />
                <span>Resume</span>
              </button> 
              </a>
            </div>
            <hr class="my-8 border-t-1 border-slate-400" />
          </div>
          <h1 className='text-3xl text-white text-center mt-10 mb-10'>Summary</h1>
          <p className='text-xl text-gray-200'>Front-end web developer with a background in Computer Science. Currently Training at the Rutgers coding boot camp to earn a certificate in full-stack web
            development. Innovative problem-solver passionate about developing apps; focused on mobile-first design and development. Strengths in creativity, teamwork,
            and building projects from ideation to execution.
          </p>
          <hr class="my-8 border-t-1 border-slate-400" />

          <h2 className='text-3xl text-white text-center mt-10 mb-10'>Technical Skills</h2>
          <p className='text-xl text-white mb-4'><span className='font-bold'>Software/Platforms:</span></p>
          {/* created a div thats invisible unless you hover over it and it gives off a glass UI effect without shifting the page on hover */}
          <div className='hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 h-[100px] transform translateZ(0)'>
            <p className='text-5xl mt-5 flex flex-row gap-6 text-gray-200'>
              <span className='hover:text-git' >
                < BsGit />
              </span>
              <span className='hover:text-bootstrap'>
                < BsFillBootstrapFill />
              </span>
              <span className='hover:text-tailwind'>
                < SiTailwindcss />
              </span>
              <span className='hover:text-api'>
                < AiFillApi />
              </span>
              <span className='hover:text-jquery'>
                < SiJquery />
              </span>
              <span className='hover:text-json'>
                < BsFiletypeJson />
              </span>
              <span className='hover:text-nodejs'>
                < DiNodejs />
              </span>
              <span className='hover:text-expressjs'>
                < SiExpress />
              </span>
              <span className='hover:text-sequelize'>
                < SiSequelize />
              </span>
              <span className='hover:text-pwa'>
                < SiPwa />
              </span>
              <span className='hover:text-react'>
                < FaReact />
              </span>
              <span className='hover:text-mongo'>
                < SiMongodb />
              </span>
            </p>
          </div>
          <hr class="my-8 border-t-1 border-slate-400" />
          <p className='text-xl text-white mb-4'><span className='font-bold'>Software Languages:</span></p>
          <div className='hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 h-[100px] transform translateZ(0)'>
            <p className='text-5xl mt-5 flex flex-row row-wrap gap-6 text-gray-200'>
              <span className='hover:text-colorHtml'>
                < ImHtmlFive />
              </span>
              <span className='hover:text-colorCSS'>
                < SiCss3 />
              </span>
              <span className='hover:text-colorJS'>
                < SiJavascript />
              </span>
              <span className='hover:text-colorMySQL'>
                < SiMysql />
              </span>
              <span className='hover:text-graphql'>
                < SiGraphql />
              </span>
            </p>
          </div>
          <hr class="my-8 border-t-1 border-slate-400" />

          <h2 className='text-3xl text-white text-center mt-10 mb-10'>Projects</h2>
          <p className='text-xl text-white'>Sypherlink |  <span className="inline-block rounded px-3 py-1 text-xl  bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href='https://github.com/X-A-gif/SypherLink'>View Github</a></span> 
          <span className="inline-block rounded px-3 py-1 text-xl  bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href=''>View App</a></span></p>
          <ul>
            <li className='ml-5 list-disc text-xl text-gray-200'>SypherLink is a full stack live chat app follwoing the MERN standards for full-stack development.</li>
            <li className='ml-5 list-disc text-xl text-gray-200'>Worked with a team to incorporate the MERN Full-Stack guidelines.</li>
            <li className='ml-5 list-disc text-xl text-gray-200'>MongoDB, Express.js, React, Node.js, Tailwind.css, Socket.io.</li>
          </ul>
          <hr class="my-8 border-t-1 border-slate-400" />
          <p className='text-xl text-white'>Scent-imental |  <span className="inline-block rounded px-3 py-1 text-xl  bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href='https://github.com/RyanEbanks/scent-imental'>View Github</a></span> 
          <span className="inline-block rounded px-3 py-1 text-xl  bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href='https://frozen-brushlands-88801.herokuapp.com/'>View App</a></span></p>
          <ul>
            <li className='ml-5 list-disc text-xl text-gray-200'>Scentimental is my first full-stack web development project following the express.js mvc framework.</li>
            <li className='ml-5 list-disc text-xl text-gray-200'>Worked with a team to incorporate continuous integration. I was tasked with setting up the server, server-side controllers along with the front-end.</li>
            <li className='ml-5 list-disc text-xl text-gray-200'>Handlebars, Javascript, Express.js, Sequelize & css.</li>
          </ul>
          <hr class="my-8 border-t-1 border-slate-400" />
          <h2 className='text-3xl text-white text-center mt-10 mb-10'>Education</h2>
          <p className='text-xl text-gray-200'><span className='font-bold text-white'>Program: </span>Rutgers Full-Stack Coding Bootcamp, Online</p>
          <p className='text-right text-xl text-gray-200'>-  December 2022 - June 2023</p>
          <hr class="my-8 border-t-1 border-slate-400" />
          <p className='text-xl text-gray-200'><span className='font-bold text-white'>Degree: </span>University of Technology, Kingston, Jamaica</p>
          {/* try and get the date to the right, essentially format it to look like the google docs resume */}
          <p className=' text-right text-xl text-gray-200 mb-20'>-   August 2017 - November 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;






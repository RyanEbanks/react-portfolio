import React from 'react';
import { MdDownload } from 'react-icons/md';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3, SiJavascript, SiMysql, SiJquery, SiExpress, SiSequelize, SiPwa, SiMongodb, SiTailwindcss, SiGraphql } from 'react-icons/si';
import { BsGit, BsFillBootstrapFill, BsFiletypeJson } from 'react-icons/bs';
import { AiFillApi } from 'react-icons/ai';
import { DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className='pt-23'>
        <div className='w-11/12 md:w-4/5 mx-auto bg-gray-900 px-3 md:px-5 pb-5'>
          <div className='mx-auto'>
            <h1 className='text-3xl md:text-5xl text-white font-bold text-center pt-10 md:pt-20 mb-5 md:mb-10'>Resume</h1>
            <div>
              <div className='flex flex-col md:flex-row items-center justify-center'>
                <h1 className='text-base md:text-lg text-white mb-3 md:mb-0'>Download here:</h1>
                <button
                  className="flex items-center bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded shadow mt-2 md:mt-0 md:ml-4"
                  onClick={() => {
                    fetch(process.env.PUBLIC_URL + '/documents/RyanEbanksResume.docx')
                      .then((response) => response.blob())
                      .then((blob) => {
                        const url = window.URL.createObjectURL(new Blob([blob]));
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'RyanEbanksResume.docx';
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                      });
                  }}
                >
                  <MdDownload className="mr-1" />
                  <span>Resume</span>
                </button>
              </div>
              <hr className="my-5 md:my-8 border-t-1 border-slate-400" />
            </div>
            <h1 className='text-2xl md:text-3xl text-white text-center mt-5 md:mt-10 mb-5 md:mb-10'>Summary</h1>
            <p className='text-lg md:text-xl text-gray-200 text-center px-3 md:px-0'>Front-end web developer with a background in Computer Science. Currently training at the Rutgers coding boot camp to earn a certificate in full-stack web development. Innovative problem-solver passionate about developing apps; focused on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.</p>
            <hr className="my-5 md:my-8 border-t-1 border-slate-400" />

            <h2 className='text-2xl md:text-3xl text-white text-center mt-5 md:mt-10 mb-5 md:mb-10'>Technical Skills</h2>
            <p className='text-lg md:text-xl text-white mb-2'><span className='font-bold'>Software/Platforms:</span></p>
            {/* created a div that's invisible unless you hover over it and it gives off a glass UI effect without shifting the page on hover */}
            <div className='hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg lg:hover:scale-100 transition-transform duration-300 py-4 px-4 lg:max-w-full lg:w-auto'>
              <p className='text-3xl md:text-5xl mt-3 md:mt-5 flex flex-wrap gap-6 text-gray-200'>
                <span className='hover:text-git flex-shrink-0'>
                  <BsGit />
                </span>
                <span className='hover:text-bootstrap flex-shrink-0'>
                  <BsFillBootstrapFill />
                </span>
                <span className='hover:text-tailwind flex-shrink-0'>
                  <SiTailwindcss />
                </span>
                <span className='hover:text-api flex-shrink-0'>
                  <AiFillApi />
                </span>
                <span className='hover:text-jquery flex-shrink-0'>
                  <SiJquery />
                </span>
                <span className='hover:text-json flex-shrink-0'>
                  <BsFiletypeJson />
                </span>
                <span className='hover:text-nodejs flex-shrink-0'>
                  <DiNodejs />
                </span>
                <span className='hover:text-expressjs flex-shrink-0'>
                  <SiExpress />
                </span>
                <span className='hover:text-sequelize flex-shrink-0'>
                  <SiSequelize />
                </span>
                <span className='hover:text-pwa flex-shrink-0'>
                  <SiPwa />
                </span>
                <span className='hover:text-react flex-shrink-0'>
                  <FaReact />
                </span>
                <span className='hover:text-mongo flex-shrink-0'>
                  <SiMongodb />
                </span>
              </p>
            </div>

            <hr className="my-5 md:my-8 border-t-1 border-slate-400" />
            <p className='text-lg md:text-xl text-white mb-2'><span className='font-bold'>Software Languages:</span></p>
            <div className='hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 h-[100px] transform translateZ(0)'>
              <p className='text-3xl md:text-5xl mt-3 md:mt-5 flex flex-row row-wrap gap-6 text-gray-200'>
                <span className='hover:text-colorHtml'>
                  <ImHtmlFive />
                </span>
                <span className='hover:text-colorCSS'>
                  <SiCss3 />
                </span>
                <span className='hover:text-colorJS'>
                  <SiJavascript />
                </span>
                <span className='hover:text-colorMySQL'>
                  <SiMysql />
                </span>
                <span className='hover:text-graphql'>
                  <SiGraphql />
                </span>
              </p>
            </div>
            <hr className="my-5 md:my-8 border-t-1 border-slate-400" />

            <h2 className='text-2xl md:text-3xl text-white text-center mt-5 md:mt-10 mb-5 md:mb-10'>Projects</h2>
            <p className='text-lg md:text-xl text-white mb-2'>Sypherlink | <span className="inline-block rounded px-3 py-1 text-lg md:text-xl bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href='https://github.com/X-A-gif/SypherLink'>View Github</a></span>
              <span className="inline-block rounded px-3 py-1 text-lg md:text-xl bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href=''>View App</a></span></p>
            <ul>
              <li className='ml-5 list-disc text-lg md:text-xl text-gray-200'>SypherLink is a full stack live chat app following the MERN standards for full-stack development.</li>
              <li className='ml-5 list-disc text-lg md:text-xl text-gray-200'>Worked with a team to incorporate the MERN Full-Stack guidelines.</li>
              <li className='ml-5 list-disc text-lg md:text-xl text-gray-200'>MongoDB, Express.js, React, Node.js, Tailwind.css, Socket.io.</li>
            </ul>
            <hr className="my-5 md:my-8 border-t-1 border-slate-400" />
            <p className='text-lg md:text-xl text-white mb-2'>Scent-imental | <span className="inline-block rounded px-3 py-1 text-lg md:text-xl bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href='https://github.com/RyanEbanks/scent-imental'>View Github</a></span>
              <span className="inline-block rounded px-3 py-1 text-lg md:text-xl bg-red-500 hover:bg-red-600 text-white mr-2 mb-2"><a href='https://frozen-brushlands-88801.herokuapp.com/'>View App</a></span></p>
            <ul>
              <li className='ml-5 list-disc text-lg md:text-xl text-gray-200'>Scentimental is my first full-stack web development project following the express.js mvc framework.</li>
              <li className='ml-5 list-disc text-lg md:text-xl text-gray-200'>Worked with a team to incorporate continuous integration. I was tasked with setting up the server, server-side controllers along with the front-end.</li>
              <li className='ml-5 list-disc text-lg md:text-xl text-gray-200'>Handlebars, JavaScript, Express.js, Sequelize & CSS.</li>
            </ul>
            <hr className="my-5 md:my-8 border-t-1 border-slate-400" />

            <h2 className='text-2xl md:text-3xl text-white text-center mt-5 md:mt-10 mb-5 md:mb-10'>Education</h2>
            <h3 className='text-xl md:text-2xl text-white text-center mb-3'>Rutgers University | New Brunswick, NJ</h3>
            <p className='text-lg md:text-xl text-gray-200 text-center'>Certificate in Full-Stack Web Development | Expected June 2023</p>
            <hr className="my-5 md:my-8 border-t-1 border-slate-400" />

            <h3 className='text-xl md:text-2xl text-white text-center mb-3'>University of Technology | Kingston, Jamaica</h3>
            <p className='text-lg md:text-xl text-gray-200 text-center'>BSc Computer Science | August 2017 - November 2021</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


export default Resume;






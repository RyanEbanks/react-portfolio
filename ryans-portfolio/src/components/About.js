import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import profile from '../images/IMG_2014.png';
import { motion } from 'framer-motion';

export function About() {
  return (
    <>
      <div className="h-screen">
        <div className="pt-20 md:pt-28">
          <div className="w-11/12 mx-auto md:w-3/4 xl:w-1/2">
            <div className="mt-2 flex flex-col md:flex-row">
              <motion.div
                className="flex flex-col md:w-1/2"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-5xl text-white font-sans font-bold">Ryan Ebanks</h2>
                <h3 className="text-2xl md:text-3xl text-white font-sans">Full-Stack Web Developer/Software Engineer</h3>
                <p className="text-base md:text-xl text-slate-400 font-sans mt-2">
                  I create modern yet simplistic applications to solve complex problems.
                </p>
                <p className="text-base md:text-xl text-slate-400 font-sans">Learn more about me below.</p>
                <div className="text-4xl mt-5 flex gap-6 text-slate-400">
                  <a href="https://www.linkedin.com/in/ryan-ebanks-752a92169/" className="hover:text-white" target="_blank" rel="noreferrer">
                    <AiFillLinkedin />
                  </a>
                  <a href="https://github.com/RyanEbanks" className="hover:text-white" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                </div>
              </motion.div>

              <div className="flex justify-center md:w-1/2">
                <motion.img
                  src={profile}
                  alt="Profile Picture"
                  width={400}
                  className="rounded-full object-cover h-80"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="mt-10 bg-white bg-opacity-5 border border-white/10 rounded-lg shadow-lg py-8 px-4 md:px-8">
              <div className="w-11/12 mx-auto md:w-3/4 xl:w-1/2 mb-8">
                <h1 className="text-3xl md:text-5xl text-white font-bold font-sans text-center mt-2 mb-10">About</h1>
                <p className="text-lg md:text-2xl text-slate-400 font-sans mt-2 text-center">
                  Hi, I'm <span className="text-white">Ryan Ebanks</span> and I'm a Full-Stack Web Developer in training. I have a{' '}
                  <span className="text-white">bachelors</span> degree in <span className="text-white">computer science</span> which gives me a
                  strong understanding of programming fundamentals such as <span className="text-white">data structures</span> and{' '}
                  <span className="text-white">object-oriented programming</span> (OOPs).
                </p>
                <p className="text-lg md:text-2xl text-slate-400 font-sans mt-2 py-4 text-center">
                  I'm originally from Jamaica but now live in the USA which gives me a unique perspective in the way I think as well as my creative
                  approach. I'm currently enrolled in the <span className="text-white">Rutgers Full-Stack Coding Bootcamp</span> to harness my skills.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;

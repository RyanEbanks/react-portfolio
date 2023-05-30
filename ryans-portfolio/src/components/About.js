import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import profile from '../images/profile-placeholder.png'

export function About() {
    return (
        <div className='h-screen w-100'>
            <div className='flex mb-10'>
                <div className='flex-wrap w-3/5 mx-auto my-auto'>
                    <div className='flex-col'>
                        <h2 className='text-5xl text-white font-sans font-bold'>Ryan Ebanks</h2>
                        <h3 className='text-3xl text-white font-sans'>Full-Stack Web Developer/Software Engineer</h3>
                        <p className='text-xl text-slate-400 font-sans'>
                            I create modern yet simplistic applications to solve complex problems.
                        </p>
                        <p className='text-xl text-slate-400 font-sans'>
                            Learn more about me below.
                        </p>
                        <div className='text-5xl mt-5 flex gap-6 text-slate-400'>
                            <a href='https://www.linkedin.com/in/ryan-ebanks-752a92169/' className='hover:text-red-400' target="_blank"><AiFillLinkedin /></a>
                            <a href='https://github.com/RyanEbanks' className='hover:text-red-400' target="_blank"><AiFillGithub /></a>
                        </div>
                    </div>
                </div>

                <div className='flex-row justify-center mx-auto'>
                    <img src={profile} alt='Profile Picture' width={400} className='rounded-lg' />
                </div>
            </div>


            <div className='mt-20'>
                <h1 className='text-5xl text-white font-sans text-center mt-10 mb-10'>About</h1>
                <p className='text-2xl text-slate-400 font-sans mt-2 text-center'>
                    Hi, I'm <span className='text-white'>Ryan Ebanks</span> and I'm a Full-Stack Web Developer in training.
                    I have a <span className='text-white'>bachelors</span> degree in <span className='text-white'></span>computer science which gives me a strong understanding
                    of programming funadamentals such as <span className='text-white'>data structures</span> and <span className='text-white'>object-oriented programming</span> (OOPs).
                </p>
                <p className='text-2xl text-slate-400 font-sans mt-2 text-center'>
                    I'm orginally from Jamaica but now live in the USA which gives me a unique perspective in the way I think as
                    well as my creative approach.
                    I'm currently enrolled in the <span className='text-white'>Rutgers Full-Stack Coding Bootcamp</span> to harness my skills.
                </p>
            </div>
        </div>
    );
}

export default About;


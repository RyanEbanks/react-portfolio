import React from 'react';
import { AiOutlineLink } from 'react-icons/ai'
import img1 from '../images/scentimental-cover.png';
import img2 from '../images/e-commerce.jpg';
import img3 from '../images/weather-background.png';
import img4 from '../images/readme-background.png';
import img5 from '../images/note-taker-background.png';
import img6 from '../images/pwa-background.png';
import { motion } from 'framer-motion';

export function Project() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <div className='py-10 '>
                <h1 className='text-5xl text-white font-bold font-sans text-center mt-40 mb-10'>Portfolio</h1>
                <section className='full-section flex'>
                    <section className='section-1 w-1/2'>
                        <div className='proj-picture'>
                            <img src={img1} alt='Scentimental' className='rounded-lg' />
                        </div>
                    </section>

                    <section className='section-2 w-1/2 m-auto px-10'>
                        <div className=' proj-description hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 w-200 h-200'>

                            <div className="px-6 py-4">
                                <div className=" text-white font-bold text-3xl mb-2">Scentimental</div>
                                <p className='text-xl text-slate-400'>
                                    Scenti-mental is an ecommerce website that showcases their companies future products for the purpose of feedback before release.
                                </p>
                            </div>
                            <div className='flex text-slate-400 ml-5 text-xl'>
                                <a href='https://github.com/RyanEbanks/scent-imental' className='flex-row mr-4 hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Github
                                </a>
                                <a href='https://frozen-brushlands-88801.herokuapp.com/' className='flex-row hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    App
                                </a>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">JavaScript</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">CSS</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Handlebars</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Express.js</span>
                            </div>
                        </div>

                    </section>
                </section>

                <section className='full-section flex'>
                    <section className='section-1 w-1/2 m-auto px-10'>
                        <div className='proj-description hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 w-200 h-200'>
                            <div className="px-6 py-4">
                                <div className=" text-white font-bold text-3xl mb-2">Emporify-Tech</div>
                                <p className='text-slate-400 text-xl'>
                                    Emporify Tech is the back end for an e-commerce site.
                                </p>
                            </div>
                            <div className='flex text-slate-400 ml-5 text-xl'>
                                <a href='https://github.com/RyanEbanks/emporify-tech' className='flex-row mr-4 hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Github
                                </a>
                                <a href='https://www.youtube.com/watch?v=MQmZyLHzx4k' className='flex-row hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Video
                                </a>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">JavaScript</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Insomnia</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">MySQL</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Express.js</span>
                            </div>
                        </div>

                    </section>

                    <section className='section-2 w-1/2'>

                        <div className='proj-picture'>
                            <img src={img2} alt='Scentimental' className='rounded-lg' />
                        </div>
                    </section>
                </section>

                <section className='full-section flex'>
                    <section className='section-1 w-1/2'>

                        <div className='proj-picture'>
                            <img src={img3} alt='Scentimental' className='rounded-lg' />
                        </div>
                    </section>

                    <section className='section-2 w-1/2 m-auto px-10'>
                        <div className=' proj-description hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 w-200 h-200'>

                            <div className="px-6 py-4">
                                <div className=" text-white font-bold text-3xl mb-2">Weather Dashboard</div>
                                <p className='text-xl text-slate-400'>
                                This weather app grabs data from the openweathermap api to showcase the current weather and future weather for up to five days.
                                </p>
                            </div>
                            <div className='flex text-slate-400 ml-5 text-xl'>
                                <a href='https://github.com/RyanEbanks/weather-dashboard' className='flex-row mr-4 hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Github
                                </a>
                                <a href='https://ryanebanks.github.io/weather-dashboard/' className='flex-row hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink  className="inline-block w-6 h-6 mr-0.5" />
                                    App
                                </a>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">JavaScript</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">HTML</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">CSS</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Web API's</span>
                            </div>
                        </div>

                    </section>
                </section>
                <section className='full-section flex'>
                    <section className='section-1 w-1/2 m-auto px-10'>
                        <div className='proj-description hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 w-200 h-200'>
                            <div className="px-6 py-4">
                                <div className=" text-white font-bold text-3xl mb-2">Readme Generator</div>
                                <p className='text-slate-400 text-xl'>
                                This program prompts you with various questions to generate a professional and usable github readme in real time.
                                </p>
                            </div>
                            <div className='flex text-slate-400 ml-5 text-xl'>
                                <a href='https://github.com/RyanEbanks/readme-generator' className='flex-row mr-4 hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Github
                                </a>
                                <a href='https://www.youtube.com/watch?v=fwNzMFEpG6o' className='flex-row hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Video
                                </a>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">JavaScript</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Inquirer.js</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Node.js</span>
                            </div>
                        </div>

                    </section>

                    <section className='section-2 w-1/2'>

                        <div className='proj-picture'>
                            <img src={img4} alt='Scentimental' className='rounded-lg' />
                        </div>
                    </section>
                </section>
                <section className='full-section flex'>
                    <section className='section-1 w-1/2'>

                        <div className='proj-picture'>
                            <img src={img5} alt='Scentimental' className='rounded-lg' />
                        </div>
                    </section>

                    <section className='section-2 w-1/2 m-auto px-10'>
                        <div className=' proj-description hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 w-200 h-200'>

                            <div className="px-6 py-4">
                                <div className=" text-white font-bold text-3xl mb-2">Note Taker</div>
                                <p className='text-xl text-slate-400'>
                                This application was created for the purpose to allow the user to log notes to keep track of various day to day tasks.
                                </p>
                            </div>
                            <div className='flex text-slate-400 ml-5 text-xl'>
                                <a href='https://github.com/RyanEbanks/note-taker' className='flex-row mr-4 hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Github
                                </a>
                                <a href='https://pure-basin-86035.herokuapp.com/' className='flex-row hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    App
                                </a>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">JavaScript</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">HTML</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">CSS</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Express.js</span>
                            </div>
                        </div>

                    </section>
                </section>
                <section className='full-section flex'>
                    <section className='section-1 w-1/2 m-auto px-10'>
                        <div className='proj-description hover:bg-white hover:bg-opacity-5 hover:border hover:border-white/10 hover:rounded-lg hover:shadow-lg hover:scale-100 transition-transform duration-300 py-4 px-4 w-200 h-200'>
                            <div className="px-6 py-4">
                                <div className=" text-white font-bold text-3xl mb-2">PWA Text Editor</div>
                                <p className='text-slate-400 text-xl'>
                                    This text editor is a single-page applocation that meets progressive web app critera and is capable of functioning offline.
                                </p>
                            </div>
                            <div className='flex text-slate-400 ml-5 text-xl'>
                                <a href='https://github.com/RyanEbanks/pwa-text-editor' className='flex-row mr-4 hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    Github
                                </a>
                                <a href='https://damp-thicket-78676.herokuapp.com/' className='flex-row hover:text-white' target='_blank' rel="noreferrer">
                                    <AiOutlineLink className="inline-block w-6 h-6 mr-0.5" />
                                    App
                                </a>

                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">JavaScript</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">MongoDB</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Node.js</span>
                                <span className="inline-block bg-red-400/10 rounded-full px-3 py-1 text-xl  text-red-300 mr-2 mb-2">Express.js</span>
                            </div>
                        </div>

                    </section>

                    <section className='section-2 w-1/2'>

                        <div className='proj-picture'>
                            <img src={img6} alt='Scentimental' className='rounded-lg' />
                        </div>
                    </section>
                </section>

            </div>
        </motion.div>
    );
}

export default Project;

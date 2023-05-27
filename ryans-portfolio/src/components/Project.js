import React from 'react';
import { AiOutlineLink } from 'react-icons/ai'
import img1 from '../images/scentimental-cover.png';
import img2 from '../images/e-commerce.jpg';

export function Project() {
    return (
        <>
            <h1 className='text-5xl text-white font-sans text-center mt-10 mb-10'>Portfolio</h1>
            <section className='full-section flex'>
                <section className='section-1 w-1/2'>

                    <div className='proj-picture'>
                        <img src={img1} alt='Scentimental' className='rounded-lg' />
                    </div>
                </section>

                <section className='section-2 w-1/2 m-auto px-10'>
                    <div className=' proj-description'>
                        <div className="px-6 py-4">
                            <div className=" text-white font-bold text-3xl mb-2">Scentimental</div>
                            <p className='text-xl text-slate-400'>
                                Scenti-mental is an ecommerce website that showcases their companies future products for the purpose of feedback before release.
                            </p>
                        </div>
                        <div className='flex text-slate-400 ml-5 text-xl'>
                            <span>< AiOutlineLink /></span>
                            <a>Github</a>
                            <span>< AiOutlineLink /></span>
                            <a>App</a>
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
                    <div className=' proj-description '>
                        <div className="px-6 py-4">
                            <div className=" text-white font-bold text-3xl mb-2">Emporify-Tech</div>
                            <p className='text-slate-400 text-xl'>
                                Emporify Tech is the back end for an e-commerce site.
                            </p>
                        </div>
                        <div className='flex text-slate-400 ml-5 text-xl'>
                            <span>< AiOutlineLink /></span>
                            <a>Github</a>
                            <span>< AiOutlineLink /></span>
                            <a>App</a>
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

        </>
    );
}

export default Project;

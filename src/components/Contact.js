import React from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className='h-screen'>
          <section className='pt-10'>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="pt-10 tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center text-white">Contact Me</h2>
              <p className="mb-4 lg:mb-8 font-light text-center text-slate-400 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl">Got any questions?</p>
              <form action="#" className="space-y-6 md:space-y-8">
                <div>
                  <label htmlFor="email" className="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 text-lg sm:text-xl md:text-2xl lg:text-2xl w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-center text-white flex items-center bg-red-400 hover:bg-red-500 rounded shadow ml-4">Send message</button>
              </form>
              <h3 className='mt-4 lg:mt-8 mb-4 lg:mb-8 font-light text-center text-slate-400 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl'>Or</h3>
              <h3 className='mt-4 lg:mt-8 font-light text-center text-slate-400 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl'>email rkebanks@gmail.com</h3>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;

import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

function Home() {
    const [currentPage, setCurrentPage] = useState('About');

    //Checking to see what the value of currentPage is. It will render what the component of that value.
    const renderPage = () => {
        if (currentPage === 'About') {
            return (
                <>
                    <About key='about' />
                </>

            );
        }
        if (currentPage === 'Project') {
            return (
                <>
                    <Project key='project' />
                </>

            );
        }
        if (currentPage === 'Resume') {
            return (
                <>
                    <Resume key='resume' />
                </>

            );
        }
        if (currentPage === 'Contact') {
            return (
                <>
                    <Contact key='contact' />
                </>

            );
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <>
          <main className="bg-gray-950">
            <section>
              <div className="px-10">
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
              </div>
              <div className="px-10">
                <AnimatePresence>
                  {currentPage && (
                    <motion.div key={currentPage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {renderPage()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Footer />
            </section>
          </main>
        </>
      );
    }

export default Home;

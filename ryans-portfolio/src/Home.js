import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function Home() {
    const [currentPage, setCurrentPage] = useState('About');

    //Checking to see what the value of currentPage is. It will render what the component of that value.
    const renderPage = () => {
        if (currentPage === 'About') {
            return (
                <>
                    <About />
                </>

            );
        }
        if (currentPage === 'Project') {
            return (
                <>
                    <Project />
                </>

            );
        }
        if (currentPage === 'Resume') {
            return (
                <>
                    <Resume />
                </>

            );
        }
        if (currentPage === 'Contact') {
            return (
                <>
                    <Contact />
                </>

            );
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <>
            <main className='bg-space px-10'>
                <section className='px-10'>
                    {/* here we are passing the currentPage from state to the function to update it */}
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                    {/* Here we are calling the render page method to return the component */}
                    {renderPage()}
                    <Footer />
                </section>
            </main>
        </>
    );
}

export default Home;

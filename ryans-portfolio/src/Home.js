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
            <main className='bg-gray-950'>
                <section>
                    {/* here we are passing the currentPage from state to the function to update it */}
                    <div className='px-10'><Navigation currentPage={currentPage} handlePageChange={handlePageChange} /></div>
                    {/* Here we are calling the render page method to return the component */}
                    <div className='px-10'>{renderPage()}</div>
                    <Footer />
                </section>
            </main>
        </>
    );
}

export default Home;

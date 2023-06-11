import React from 'react';


export function Footer() {
    return (
        <>
            <footer className="shadow mt-4 bg-gray-900 bottom-0 left-0 right-0 w-full mb-0 mx-0 fixed">
                <div className="max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023 <a href="https://www.linkedin.com/in/ryan-ebanks-752a92169/" className="hover:underline">Ryan Ebanks</a>
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Go to Top</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;
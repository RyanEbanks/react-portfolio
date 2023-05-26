import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main className='bg-space px-10'>
        <section className='px-10'>
          <Navigation />
        </section>
        <section className='px-10'>
          <About />
        </section>
        <section className='px-10 max-w-[80%] m-auto'>
          <Project />
        </section>
        <section className='px-10'>
          <Contact />
        </section>
        <section className='px-10'>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Philosophy from './components/Philosophy';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [motionOn, setMotionOn] = useState(true);

  const toggleMotion = () => {
    setMotionOn(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('nm', !motionOn);
  }, [motionOn]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar motionOn={motionOn} toggleMotion={toggleMotion} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Philosophy />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


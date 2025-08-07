'use client';

import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';

const HomeSection = () => {
  useEffect(() => {
    // Optional: Scroll restoration or animations
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 pixel-glow font-mono">
            HELLO_WORLD
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl mb-8 font-mono">
            <TypeAnimation
              sequence={[
                'I am a Developer',
                2000,
                'I am a Designer',
                2000,
                'I am a Creator',
                2000,
                'I build digital experiences',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-12 font-mono text-muted-foreground max-w-2xl mx-auto">
            Welcome to my digital realm where code meets creativity. Crafting pixel-perfect experiences one line at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('projects')} className="btn-pixel">
              VIEW_PROJECTS
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-pixel">
              CONTACT_ME
            </button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-6 sm:left-10 text-primary animate-pulse">{'{'}</div>
        <div className="absolute top-40 right-6 sm:right-20 text-secondary animate-pulse">{'}'}</div>
        <div className="absolute bottom-20 left-6 sm:left-20 text-accent animate-pulse">{'</>'}</div>
        <div className="absolute bottom-40 right-4 sm:right-10 text-pixel-warning animate-pulse">{'[]'}</div>
      </div>
    </section>
  );
};

export default HomeSection;

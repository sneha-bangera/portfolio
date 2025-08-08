'use client';

import { TypeAnimation } from 'react-type-animation';
import ShinyText from './ShinyText';

const HomeSection = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* <h1 className="text-5xl sm:text-6xl md:text-8xl mb-6 pixel-glow title-font">
            Hey, I'm Sneha
          </h1> */}
          <ShinyText text="Hey, I'm Sneha!" disabled={false} speed={3} className='custom-class' />
          <div className="text-base sm:text-lg md:text-xl mb-8 font-mono">
            <TypeAnimation
              sequence={[
                'Engineer. Coder. Creator.',
                2000,
                'Web Developer',
                2000,
                'Design. Develop. Deploy.',
                2000,
                'React | Next.js | Node.js',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-12 font-mono text-muted-foreground max-w-2xl mx-auto text-gray-300">
            Turning ideas into interactive web experiences. <br />I code, create, and build with precision and creativity.
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

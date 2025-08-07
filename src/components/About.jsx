'use client';

import React from 'react';

const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js',
    'Node.js', 'Express', 'Tailwind', 'MongoDB',
    'Python',  'Java', 'C', 'C++', 
    'Git', 'Figma',
  ];

  return (
    <section id="about" className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-mono pixel-glow">
          {'<ABOUT_ME/>'}
        </h2>

        <div className="gap-12 max-w-6xl mx-auto">
          {/* About Text */}
          <div className="space-y-6 mb-10">
            <div className="card-pixel">
              <h3 className="text-2xl font-bold mb-4 font-mono text-secondary px-5 pt-3.5">
                {'> WHO_AM_I'}
              </h3>
              <p className="font-mono text-muted-foreground leading-relaxed text-justify px-5 pb-5">
                Hey there! I’m Sneha, a third-year AI & ML Engineering student and a self-driven Web Developer
                passionate about turning ideas into impactful digital experiences.
                I love building clean, responsive websites and am currently seeking internship opportunities.
                Outside of tech, I enjoy reading, drawing, and painting things that fuel my creativity.
                Let’s connect and create something amazing together! 
              </p>
            </div>

            {/* <div className="card-pixel">
              <h3 className="text-2xl font-bold mb-4 font-mono text-accent">
                {'> INTERESTS'}
              </h3>
              <p className="font-mono text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, playing retro games, 
                or experimenting with digital art and design. I believe in 
                continuous learning and staying ahead of the curve.
              </p>
            </div> */}
          </div>

          {/* Skills Grid */}
          <div className="card-pixel">
            <h3 className="text-2xl font-bold mb-6 font-mono text-primary px-5 pt-3">
              {'> SKILLS'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-5 pb-5">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="skill-tag m-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

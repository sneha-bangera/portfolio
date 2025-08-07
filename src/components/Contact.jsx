'use client';

import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:snehabangera05@gmail.com',
      handle: 'snehabangera05@gmail.com',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sneha-bangera',
      handle: '@sneha-bangera',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/sneha-bangera-6ba99b2b5',
      handle: '/in/sneha-bangera',
    },
    // {
    //   name: 'Twitter',
    //   icon: Twitter,
    //   url: 'https://twitter.com/yourusername',
    //   handle: '@yourusername',
    // },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-mono pixel-glow">
          {'<CONTACT/>'}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="card-pixel text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 font-mono text-secondary px-5 pt-3">
              {'> GET_IN_TOUCH'}
            </h3>
            <p className="font-mono text-muted-foreground leading-relaxed text-justify text-lg px-5 pb-5">
              Ready to collaborate on your next project? Let's connect and build
              something amazing together. I'm always open to discussing new
              opportunities and ideas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-pixel flex items-center gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-lg group-hover:pixel-glow transition-all duration-300">
                      {link.name}
                    </h4>
                    <p className="font-mono text-muted-foreground text-sm">
                      {link.handle}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="font-mono text-muted-foreground text-sm">
              {'<footer>'}
              <br />
              © 2025 Sneha Bangera
              <br />
              {'</footer>'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

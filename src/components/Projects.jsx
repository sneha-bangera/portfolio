import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Thrift Up",
      description: "Full-stack e-commerce solution with modern UI/UX design and secure payment integration for seamless shopping experience.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and intuitive drag-and-drop functionality.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and beautiful data visualizations for climate insights.",
      technologies: ["React", "TypeScript", "Chart.js", "API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Social Media Clone",
      description: "Feature-rich social media platform with user authentication, real-time messaging, and content sharing capabilities.",
      technologies: ["Next.js", "Firebase", "Tailwind", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with pixel art theme showcasing projects and skills with modern animations.",
      technologies: ["React", "TypeScript", "Tailwind", "Framer"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "API Management Tool",
      description: "Developer tool for API testing and documentation with automated testing features and performance monitoring.",
      technologies: ["Python", "FastAPI", "Docker", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center font-mono pixel-glow">
          {'<PROJECTS/>'}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-pixel group"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-mono text-secondary group-hover:pixel-glow transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-[2px_2px_0px_0px_hsl(var(--primary))]"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:shadow-[2px_2px_0px_0px_hsl(var(--accent))]"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono border border-muted text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
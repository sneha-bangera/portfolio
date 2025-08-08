import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Thrift Up",
      description: "A thrifting platform where users can buy, sell, and list second-hand fashion items. Includes a community section for user posts and discussions.",
      technologies: ["Next.js", "TailwindCSS","Node.js", "MongoDB"],
      githubUrl: "https://github.com/sneha-bangera/ThriftUp",
      liveUrl: "https://thrift-up.vercel.app"
    },
    {
      title: "BlogPost",
      description: "A minimalistic blogging website where users can write, publish, and browse blogs on various topics. Focuses on a clean writing experience.",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/sneha-bangera/NextJS",
      liveUrl: "https://blog-post-ten-zeta.vercel.app/"
    },
    {
      title: "E-Commerce Website",
      description: "Fully functional e-commerce platform with customer-facing store and admin dashboard for product and order management.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/sneha-bangera/Shopper-E-commerce",
      // liveUrl: "https://example.com"
    },
    {
      title: "Recipe Website",
      description: "Built a React-based recipe site with dynamic API fetching and search functionality for filtering recipes.",
      technologies: ["React", "TailwindCSS", "Node.js", "API"],
      githubUrl: "https://github.com/sneha-bangera/Recipe-website",
      // liveUrl: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing about me, projects and skills sections with modern animations.",
      technologies: ["Next.js", "TailwindCSS", "Framer"],
      githubUrl: "https://github.com/sneha-bangera/portfolio",
      liveUrl: "https://portfolio-chi-nine-73.vercel.app/"
    },
    {
      title: "Loan Risk Prediction Model",
      description: "A machine learning model that predicts loan risk level (Low, Medium, High) based on financial, demographic and many other features.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      githubUrl: "https://github.com/sneha-bangera/Loan_Risk_Prediction",
      // liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl mb-16 text-center title-font pixel-glow">
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
                    className="p-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 "
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <p className="font-mono text-sm  mb-4 leading-relaxed text-gray-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono border border-muted text-gray-300"
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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import project4 from "@/assets/project-1.jpg";
import project5 from "@/assets/project-2.jpg";
import project6 from "@/assets/project-3.jpg";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Food Ordering pos App",
      description: "A Food Order POS application that helps culinary businesses manage orders, payments, and inventory quickly, conveniently, and efficiently. Ideal for restaurants, cafes, and food MSMEs seeking a more streamlined and modern operation.",
      techStack: ["Flutter", "Firebase", "Riverpod"],
      image: project4,
      color: "from-blue-500 to-indigo-600",
      github: "https://github.com/Figo04/food_order_app",
    },
    {
      title: "Recipe & Cooking App",
      description: "Discover recipes, plan meals, and create shopping lists. Features step-by-step instructions with timers.",
      techStack: ["Flutter", "REST API", "Firebase", "Riverpod"],
      image: project5,
      color: "from-orange-500 to-amber-600",
      github: "https://github.com/Figo04/Meals_app",
    },
    {
      title: "Finance Tracker",
      description: "Track expenses, manage budgets, and visualize spending patterns. Includes multi-currency support and reports.",
      techStack: ["Flutter", "Supabase", "Charts", "Provider"],
      image: project6,
      color: "from-cyan-500 to-blue-600",
      github: "https://github.com/Figo04/fintrack_app",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-mono uppercase tracking-widest"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A selection of mobile applications I've designed and developed
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden card-glow hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Preview */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Figo04" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

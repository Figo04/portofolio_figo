import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Sparkles, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "7th Semester",
      description: "Information Technology Student",
    },
    {
      icon: Smartphone,
      title: "Mobile Focus",
      description: "Flutter & Cross-platform Apps",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Scalable Architecture",
    },
    {
      icon: Sparkles,
      title: "User-Centric",
      description: "Beautiful UI/UX Design",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-mono uppercase tracking-widest"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Passionate About <span className="text-gradient">Mobile Development</span>
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a 7th semester Information Technology student, I've dedicated my academic 
                journey to mastering mobile application development. My passion lies in creating 
                applications that not only function flawlessly but also provide exceptional user 
                experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in multiple projects, I specialize in building 
                <span className="text-primary font-medium"> clean, scalable, and maintainable </span>
                Flutter applications. From concept to deployment, I focus on delivering solutions 
                that meet both technical excellence and user needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm passionate about software engineering principles, exploring 
                new technologies, and continuously improving my craft in the ever-evolving 
                mobile development landscape.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-glow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

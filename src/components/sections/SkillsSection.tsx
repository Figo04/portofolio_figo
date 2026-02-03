import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Mobile Development",
      items: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "UI/UX Mobile", level: 75 },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Firebase", level: 88 },
        { name: "Supabase", level: 70 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQLite", level: 75 },
      ],
    },
    {
      category: "Tools & APIs",
      items: [
        { name: "REST API", level: 88 },
        { name: "Git", level: 85 },
        { name: "Firebase Auth", level: 90 },
        { name: "Firestore", level: 88 },
      ],
    },
  ];

  const techIcons = [
    { name: "Flutter", color: "from-blue-400 to-blue-600" },
    { name: "Dart", color: "from-cyan-400 to-cyan-600" },
    { name: "Firebase", color: "from-orange-400 to-orange-600" },
    { name: "Supabase", color: "from-emerald-400 to-emerald-600" },
    { name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
    { name: "SQLite", color: "from-sky-400 to-sky-600" },
    { name: "REST API", color: "from-purple-400 to-purple-600" },
    { name: "Git", color: "from-orange-500 to-red-500" },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
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
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-mono uppercase tracking-widest"
            >
              Tech Stack
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Skills & <span className="text-gradient">Technologies</span>
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              The tools and technologies I use to bring ideas to life
            </motion.p>
          </div>

          {/* Tech Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center card-glow"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow`}>
                  <span className="text-white font-bold text-lg">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Progress */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-primary mb-6">
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

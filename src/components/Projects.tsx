import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "EduTwin",
      tech: "React • TypeScript • Tailwind CSS",
      description:
        "Educational platform designed to enhance learning experience with an interactive and responsive interface.",
    },
    {
      title: "AI Caretaker",
      tech: "Python • AI",
      description:
        "AI assistant built to support specially-abled individuals with personalized assistance.",
    },
    {
      title: "Animal Intrusion Detection",
      tech: "Machine Learning • Python • IoT",
      description:
        "Smart system that detects animal movement and triggers real-time alerts using ML models.",
    },
    {
      title: "Smart Light Control System",
      tech: "IoT",
      description:
        "Energy-efficient automation system for intelligent lighting control.",
    },
    {
      title: "AI Dialect Translator",
      tech: "AI • NLP • Python",
      description:
        "Translates speech and text across multiple languages and regional dialects using AI.",
    },
    {
      title: "Attendance System",
      tech: "Python • Database",
      description:
        "Digital attendance tracking system for educational institutions with automated records.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 text-slate-900 bg-transparent relative"
    >
      {/* Soft background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#B0E0E6]/40 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#C5E8F7]/50 blur-[160px] rounded-full"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#2b3a4a]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              bg-white/25
              backdrop-blur-xl
              border
              border-white/30
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-md
              transition-all
              duration-300
            "
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-[#2f3e4e] mb-2">
              {project.title}
            </h3>

            {/* Tech */}
            <p className="text-sm text-[#4b5f73] mb-3">
              {project.tech}
            </p>

            {/* Description */}
            <p className="text-sm text-[#3b4f63] leading-relaxed">
              {project.description}
            </p>

            {/* Bottom label */}
            <div className="mt-5 text-xs text-[#5a6f82] font-medium">
              🚀 Project Showcase
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "EduTwin",
      tech: "React • TypeScript • Tailwind CSS",
      description:
        "Educational platform developed to enhance learning experiences for students and teachers through an interactive and responsive interface.",
    },
    {
      title: "Smart Personalised AI Caretaker",
      tech: "Python • AI",
      description:
        "AI-powered assistant designed to provide personalised support and assistance for specially-abled individuals.",
    },
    {
      title: "Animal Intrusion Detection System",
      tech: "Machine Learning • Python • IoT",
      description:
        "Smart system that detects animal intrusions using machine learning models and provides real-time alerts.",
    },
    {
      title: "Smart Light Control System",
      tech: "IoT",
      description:
        "IoT-based automation solution for intelligent lighting control and energy-efficient management.",
    },
    {
      title: "AI Dialect Translator",
      tech: "AI • Python • NLP",
      description:
        "AI-powered translator capable of converting text and speech between different languages and regional dialects.",
    },
    {
      title: "Smart Attendance Management System",
      tech: "Python • Database",
      description:
        "Digital attendance tracking solution for educational institutions with automated record management.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen text-white px-8 py-20 overflow-hidden bg-transparent"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              group
              relative
              backdrop-blur-xl
              border
              border-cyan-500/20
              rounded-3xl
              p-6
              overflow-hidden
              shadow-[0_0_25px_rgba(34,211,238,0.15)]
              hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
              transition-all
              duration-500
            "
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Top Line */}
            <div className="mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {project.title}
            </h3>

            {/* Tech */}
            <p className="text-sm text-slate-300 mb-4">
              {project.tech}
            </p>

            {/* Description */}
            <p className="text-slate-200 leading-relaxed">
              {project.description}
            </p>

            {/* Footer */}
            <div className="mt-6">
              <span className="text-cyan-400 text-sm font-medium">
                🚀 Project Showcase
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
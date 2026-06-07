import { motion } from "framer-motion";
import {
  FaPython,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiC,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "Python",
      icon: <FaPython size={45} />,
      desc: "Strong • AI, ML & Automation",
      level: "strong",
    },
    {
      name: "C Programming",
      icon: <SiC size={45} />,
      desc: "Strong • Programming Fundamentals",
      level: "strong",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={45} />,
      desc: "Currently Learning",
      level: "learning",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={45} />,
      desc: "Currently Learning",
      level: "learning",
    },
    {
      name: "React",
      icon: <SiReact size={45} />,
      desc: "Currently Learning",
      level: "learning",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={45} />,
      desc: "Currently Learning",
      level: "learning",
    },
    {
      name: "HTML",
      icon: <SiHtml5 size={45} />,
      desc: "Basics Learning",
      level: "learning",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={45} />,
      desc: "Basics Learning",
      level: "learning",
    },
    {
      name: "Git & GitHub",
      icon: <SiGit size={45} />,
      desc: "Currently Learning",
      level: "learning",
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-8 py-20 text-white">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              group
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-8
              text-center
              cursor-pointer
              transition-all
            "
          >
            {/* Icon */}
            <div className="flex justify-center text-cyan-300 mb-4">
              {skill.icon}
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold mb-2">
              {skill.name}
            </h3>

            {/* Level Badge */}
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                skill.level === "strong"
                  ? "bg-green-500/20 text-green-300"
                  : "bg-yellow-500/20 text-yellow-300"
              }`}
            >
              {skill.level === "strong" ? "Strong" : "Learning"}
            </span>

            {/* Description */}
            <p className="text-slate-300 mt-4 text-sm opacity-80">
              {skill.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;
import { motion } from "framer-motion";
import { FaPython, FaCss3Alt } from "react-icons/fa";

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
    { name: "Python", icon: <FaPython size={42} />, level: "strong" },
    { name: "C Programming", icon: <SiC size={42} />, level: "strong" },

    { name: "JavaScript", icon: <SiJavascript size={42} />, level: "learning" },
    { name: "TypeScript", icon: <SiTypescript size={42} />, level: "learning" },
    { name: "React", icon: <SiReact size={42} />, level: "learning" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={42} />, level: "learning" },
    { name: "HTML", icon: <SiHtml5 size={42} />, level: "learning" },
    { name: "CSS", icon: <FaCss3Alt size={42} />, level: "learning" },
    { name: "Git & GitHub", icon: <SiGit size={42} />, level: "learning" },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 text-slate-900">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#2b3a4a]">
        Skills
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              bg-white/25
              backdrop-blur-xl
              border
              border-white/30
              rounded-2xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              transition-all
            "
          >
            {/* Icon */}
            <div className="flex justify-center text-[#3b4f63] mb-3">
              {skill.icon}
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-[#2f3e4e]">
              {skill.name}
            </h3>

            {/* Badge */}
            <div
              className={`
                mt-3 inline-block px-3 py-1 text-xs rounded-full
                ${
                  skill.level === "strong"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }
              `}
            >
              {skill.level === "strong" ? "Strong" : "Learning"}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Skills;
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
    <section
      id="skills"
      className="min-h-screen px-6 py-20 relative overflow-hidden text-[#f0e8e8]"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
      }}
    >
      {/* 🌸 Background blobs (NOW IT WILL SHOW) */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-[rgba(180,100,120,0.18)] blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[rgba(120,80,160,0.15)] blur-[180px] rounded-full"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-14"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#f0e8e8",
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              bg-gradient-to-b
              from-[#25202e]
              to-[#1e1825]
              backdrop-blur-xl
              border
              border-[rgba(200,140,160,0.15)]
              rounded-2xl
              p-6
              text-center
              shadow-[0_8px_30px_rgba(0,0,0,0.4)]
              hover:shadow-[0_10px_40px_rgba(180,100,120,0.2)]
              transition-all
              duration-300
            "
          >
            <div className="flex justify-center text-[#d4859a] mb-3">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold text-[#e8d8dc]">
              {skill.name}
            </h3>

            <div
              className={`
                mt-3 inline-block px-3 py-1 text-xs rounded-full
                ${
                  skill.level === "strong"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-yellow-500/20 text-yellow-200"
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
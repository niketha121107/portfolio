import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 text-slate-900 bg-transparent relative"
    >
      {/* 💎 Glass Card */}
      <motion.div
        className="max-w-4xl text-center backdrop-blur-2xl bg-white/20 border border-white/30 rounded-3xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ✨ Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2b3a4a]">
          About Me
        </h2>

        {/* 🧠 Intro */}
        <p className="text-lg md:text-xl leading-relaxed text-[#2f3e4e]">
          Hi, I’m <span className="font-semibold">Niketha</span> 👋  
          an enthusiastic first-year engineering student in the field of
          <span className="font-medium"> Artificial Intelligence & Data Science</span>.
        </p>

        {/* 📘 Background */}
        <p className="text-md md:text-lg mt-6 text-[#3b4f63] leading-relaxed">
          I completed my schooling at Avila Convent Matriculation Higher Secondary School,
          where I studied Biology and Mathematics as my core subjects. During that time,
          I developed a strong interest in problem-solving and logical thinking, which
          naturally led me toward the world of programming and technology.
        </p>

        {/* 💻 Tech Journey */}
        <p className="text-md md:text-lg mt-6 text-[#3b4f63] leading-relaxed">
          Now, I am exploring the world of software development through technologies like
          Python, C Programming, React, and TypeScript. I am also gradually building my
          understanding of Data Structures, Algorithms, and AI fundamentals.
        </p>

        {/* 🚀 Interest */}
        <p className="text-md md:text-lg mt-6 text-[#3b4f63] leading-relaxed">
          I enjoy learning step-by-step, building small projects, and improving my skills
          through consistent practice. I am especially interested in Artificial Intelligence
          because of its ability to solve real-world problems and create impactful solutions.
        </p>

        {/* ✨ Personal touch */}
        <p className="mt-6 text-sm md:text-base text-[#4b5f73]">
          I consider myself a curious learner who believes that growth comes through
          practice, patience, and continuous improvement.
        </p>

        {/* 🏷 Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-white/30 border border-white/40 text-sm">
            AI & Data Science Student
          </span>
          <span className="px-4 py-2 rounded-full bg-white/30 border border-white/40 text-sm">
            Python & C Programming
          </span>
          <span className="px-4 py-2 rounded-full bg-white/30 border border-white/40 text-sm">
            React & TypeScript
          </span>
          <span className="px-4 py-2 rounded-full bg-white/30 border border-white/40 text-sm">
            Beginner Developer 🚀
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
      }}
    >
      {/* soft glow blobs (same vibe as hero) */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      {/* 💎 Glass Card */}
      <motion.div
        className="max-w-4xl text-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#f0e8e8]">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed text-[#d4b8c0]">
          Hi, I’m <span className="font-semibold text-[#d4859a]">Niketha</span> 👋  
          an enthusiastic AI & Data Science engineering student.
        </p>

        {/* Background */}
        <p className="text-md md:text-lg mt-6 text-[#a07888] leading-relaxed">
          I completed my schooling at Avila Convent Matriculation Higher Secondary School,
          where I studied Biology and Mathematics. That phase shaped my logical thinking
          and curiosity toward technology.
        </p>

        {/* Journey */}
        <p className="text-md md:text-lg mt-6 text-[#a07888] leading-relaxed">
          Currently, I am exploring Python, C Programming, React, and TypeScript while
          building strong foundations in Data Structures, AI, and web development.
        </p>

        {/* Interest */}
        <p className="text-md md:text-lg mt-6 text-[#a07888] leading-relaxed">
          I enjoy learning through hands-on projects and I’m especially drawn toward AI
          because of its real-world impact and problem-solving power.
        </p>

        {/* Personal touch */}
        <p className="mt-6 text-sm md:text-base text-[#8a7070]">
          I believe consistency + curiosity is the real key to becoming a great developer.
        </p>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            AI & Data Science
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            Python & C
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            React & TypeScript
          </span>
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4b8c0] text-sm">
            Beginner Developer 🚀
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
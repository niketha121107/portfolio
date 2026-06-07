import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 text-slate-800 bg-transparent">

      {/* 🌊 Background glow (same soft system as About page) */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-[#B0E0E6]/40 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#C5E8F7]/50 blur-[180px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#AEC6CF]/40 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* ✨ Floating elements (softened colors) */}
      <div className="absolute top-24 left-20 w-2 h-2 bg-[#4A90A4]/40 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-24 w-3 h-3 bg-[#5B8FA8]/40 rounded-full animate-bounce"></div>
      <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-[#AEC6CF]/60 rounded-full animate-ping"></div>

      {/* 💎 Glass Card */}
      <motion.div
        className="z-10 max-w-2xl text-center backdrop-blur-2xl bg-white/40 p-10 rounded-3xl border border-white/60 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* 👋 NAME (FIXED: BLACK + BOLD) */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-black">
          Hi, I'm{" "}
          <span className="text-black font-black">
            Niketha
          </span>
          👋
        </h1>

        {/* ✨ Role animation */}
        <div className="mt-5">
          <TypeAnimation
            sequence={[
              "AI & Data Science Student",
              2000,
              "Aspiring AI Engineer",
              2000,
              "Web Development Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#000080] text-xl md:text-2xl font-medium"
          />
        </div>

        {/* 🧠 About line */}
        <p className="text-slate-700 mt-6 text-base md:text-lg leading-relaxed">
          Passionate learner exploring Artificial Intelligence, Data Science and modern web development.
        </p>

        {/* 🎯 Goal */}
        <p className="text-slate-500 text-sm mt-4">
          🎯 Goal: Become a strong AI Engineer & Developer <br />
          💡 Mindset: Learn • Build • Improve • Grow
        </p>

        {/* 🔘 Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">

          <a
            href="/resume/Niketha_MS_Resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white/50 border border-white/60 text-slate-700 backdrop-blur-md hover:bg-white/70 transition hover:scale-105"
          >
            Resume
          </a>

          <a
            href="https://github.com/niketha121107"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white/50 border border-white/60 text-slate-700 backdrop-blur-md hover:bg-white/70 transition hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="mailto:msniketha1211@gmail.com"
            className="px-6 py-3 rounded-xl bg-white/50 border border-white/60 text-slate-700 backdrop-blur-md hover:bg-white/70 transition hover:scale-105"
          >
            Contact
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;
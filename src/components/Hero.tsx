import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-transparent">

      {/* 🌈 Glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/20 blur-[200px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/20 blur-[200px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* ✨ Floating particles */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-pink-300 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-24 w-4 h-4 bg-purple-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-24 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>

      {/* 💻 Main Card */}
      <motion.div
        className="text-center z-10 px-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* 👋 Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
            Niketha
          </span>
          👋
        </h1>

        {/* ✨ Typing */}
        <div className="mt-4">
          <TypeAnimation
            sequence={[
              "AI & Data Science Student",
              2000,
              "Aspiring AI Engineer",
              2000,
              "Aspiring Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-pink-400 text-xl md:text-3xl font-semibold"
          />
        </div>

        {/* 📝 Description */}
        <p className="text-slate-200 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Passionate about Artificial Intelligence, Data Science and Web Development.
          I love building creative, impactful and futuristic tech solutions 🚀
        </p>

        {/* 🔘 Buttons */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap">

          {/* ✅ Resume (NOW GLASS STYLE) */}
          <a
            href="/resume/Niketha_MS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-purple-400 bg-white/5 backdrop-blur-md hover:bg-pink-500/10 font-semibold transition-all hover:scale-105"
          >
            Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/niketha121107"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-purple-400 bg-white/5 backdrop-blur-md hover:bg-pink-500/10 font-semibold transition-all hover:scale-105"
          >
            GitHub
          </a>

          {/* Contact */}
          <a
            href="mailto:msniketha1211@gmail.com"
            className="px-6 py-3 rounded-xl border border-purple-400 bg-white/5 backdrop-blur-md hover:bg-purple-500/10 font-semibold transition-all hover:scale-105"
          >
            Contact Me
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;
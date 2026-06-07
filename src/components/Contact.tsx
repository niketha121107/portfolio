import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 text-[#1f2a37]"
    >
      <motion.div
        className="w-full max-w-2xl text-center backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-10 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1f2a37]">
          Contact Me
        </h2>

        <p className="text-[#3b4a5a] mb-10">
          Let’s connect — I’m always open to collaboration and learning 🚀
        </p>

        {/* ICON LINKS */}
        <div className="flex justify-center gap-10 text-4xl mb-8">

          {/* GitHub */}
          <a
            href="https://github.com/niketha121107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1f2a37] hover:text-[#0ea5e9] transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/niketha-ms-1a5262379"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1f2a37] hover:text-[#0ea5e9] transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:msniketha1211@gmail.com"
            className="text-[#1f2a37] hover:text-[#0ea5e9] transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* TEXT LINKS (VISIBLE + CLEAN) */}
        <div className="space-y-3 text-sm md:text-base text-[#334155]">

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/niketha121107"
              target="_blank"
              className="text-[#0ea5e9] font-medium hover:underline"
            >
              github.com/niketha121107
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/niketha-ms-1a5262379"
              target="_blank"
              className="text-[#0ea5e9] font-medium hover:underline"
            >
              linkedin.com/in/niketha-ms
            </a>
          </p>

          <p>
            📧 Email:{" "}
            <span className="text-[#0ea5e9] font-medium">
              msniketha1211@gmail.com
            </span>
          </p>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
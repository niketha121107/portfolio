import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 text-white bg-transparent"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
          Contact Me
        </h2>

        {/* Sub text */}
        <p className="text-slate-200 text-lg mb-10">
          Feel free to connect with me through the platforms below.
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-10 text-5xl">

          <a
            href="https://github.com/niketha121107"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/niketha-ms-1a5262379"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:msniketha1211@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Info */}
        <div className="mt-10 space-y-3">
          <p className="text-slate-300">📧 msniketha1211@gmail.com</p>
          <p className="text-slate-300">💼 LinkedIn: Niketha MS</p>
          <p className="text-slate-300">💻 GitHub: niketha121107</p>
        </div>

      </motion.div>
    </section>
  );
}

export default Contact;
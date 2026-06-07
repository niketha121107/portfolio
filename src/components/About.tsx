import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 text-white bg-transparent"
    >
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="
            text-5xl
            font-bold
            mb-12
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          About Me
        </h2>

        <p className="text-xl text-slate-200 leading-relaxed">
          I am an aspiring AI & Data Science Engineer passionate about
          Artificial Intelligence, Machine Learning, Web Development
          and solving real-world problems through technology.
        </p>

        <p className="text-xl text-slate-200 leading-relaxed mt-6">
          Currently learning Python, C Programming, React,
          TypeScript and Data Structures & Algorithms.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
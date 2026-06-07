import { motion } from "framer-motion";

function Education() {
  const timeline = [
    {
      year: "2025 - 2029",
      title: "B.Tech - Artificial Intelligence & Data Science",
      place: "Karunya Institute of Science and Technology, Coimbatore",
      desc: "Currently pursuing undergraduate degree focusing on AI, Data Science, Machine Learning, and Software Development.",
    },
    {
      year: "Higher Secondary Education",
      title: "Biology & Mathematics Stream",
      place: "Avila Convent Matriculation Higher Secondary School",
      desc: "Completed higher secondary education with strong foundation in Biology and Mathematics.",
    },
    {
      year: "Secondary Education",
      title: "SSLC",
      place: "Avila Convent Matriculation School",
      desc: "Completed secondary schooling with overall academic excellence and early interest in science.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-20 flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, #3d1f2d 0%, #1a1a1f 55%),
          radial-gradient(ellipse at 80% 20%, #2a1a2e 0%, transparent 60%)
        `,
      }}
    >
      {/* glow effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-pink-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-500/10 blur-[160px] rounded-full"></div>

      <div className="max-w-4xl w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#f0e8e8]">
          Education Journey 🎓
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-8 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* dot */}
              <div className="absolute w-4 h-4 rounded-full -left-10 mt-2 bg-[#d4859a] shadow-[0_0_15px_rgba(212,133,154,0.5)]"></div>

              {/* card */}
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(180,100,120,0.25)] transition">

                <span className="text-sm font-semibold text-[#d4859a]">
                  {item.year}
                </span>

                <h3 className="text-xl font-bold mt-1 text-[#f0e8e8]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#a07888] mt-1">
                  📍 {item.place}
                </p>

                <p className="text-sm text-[#8a7070] mt-3 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;
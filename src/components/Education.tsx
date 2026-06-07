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
      desc: "Completed secondary schooling with overall academic excellence and interest in science.",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen px-6 py-20 text-[#1f2a37] flex items-center justify-center"
    >
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Education Journey 🎓
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#0ea5e9]/40 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <div className="absolute w-4 h-4 bg-[#0ea5e9] rounded-full -left-2 mt-2"></div>

              {/* Card */}
              <div className="backdrop-blur-xl bg-white/40 border border-white/30 p-6 rounded-2xl shadow-md hover:shadow-xl transition">

                <span className="text-sm font-semibold text-[#0ea5e9]">
                  {item.year}
                </span>

                <h3 className="text-xl font-bold mt-1">
                  {item.title}
                </h3>

                <p className="text-sm text-[#475569] mt-1">
                  📍 {item.place}
                </p>

                <p className="text-sm text-[#64748b] mt-3 leading-relaxed">
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
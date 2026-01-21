import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-5 py-16 md:py-24 bg-black text-white snap-start"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {projectsData.map((p, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.97 }}
            className="group relative p-6 rounded-xl bg-[#0f1629]
                       border border-gray-800 overflow-hidden"
          >
            <h3 className="text-xl text-cyan-400 font-semibold">{p.title}</h3>

            <p className="text-gray-400 mt-3">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full
                             border border-gray-700 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Hover / Focus Actions */}
            <div
              className="absolute inset-0 bg-black/80 opacity-0
                         group-hover:opacity-100 transition
                         flex items-center justify-center gap-4"
            >
              <a
                href={p.github}
                target="_blank"
                className="px-4 py-2 border border-cyan-400
                           rounded text-cyan-400 hover:bg-cyan-400
                           hover:text-black transition"
              >
                GitHub
              </a>

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  className="px-4 py-2 bg-cyan-400
                             text-black rounded transition"
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <motion.a
          href="https://github.com/ashisherikilla?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
      px-8 py-4 rounded-full
      bg-linear-to-r from-cyan-500 to-blue-500
      text-black font-semibold
      shadow-lg shadow-cyan-500/30
      transition
    "
        >
          See More Projects →
        </motion.a>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black text-white px-6 py-20 snap-start">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-[#0f1629] border border-gray-800 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold mb-4 capitalize text-cyan-400">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-black border border-gray-700
                             hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

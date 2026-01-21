import { motion } from "framer-motion";
import { aboutData } from "../data/aboutData";
import profilePic from "../assets/Portrait1.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 snap-start"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT — PHOTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Erikilla Ashish"
            className="w-64 h-74 object-cover rounded-2xl 
                       border border-gray-700
                       shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          />
        </motion.div>

        {/* RIGHT — STORY + TIMELINE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            About Me
          </motion.h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            {aboutData.intro}
          </p>

          {/* Timeline */}
          <div className="relative border-l border-gray-700 pl-6 space-y-10">
            {aboutData.journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute -left-[33px] top-1 w-4 h-4 bg-cyan-400 rounded-full" />

                <span className="text-cyan-400 font-semibold">{item.year}</span>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>

                {/* Skill Evolution */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full 
                                 border border-gray-700 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

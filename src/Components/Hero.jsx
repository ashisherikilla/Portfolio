import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroData } from "../data/heroData";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fullName = "Erikilla Ashish";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center text-white px-6 snap-start">
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(
            600px at ${mousePos.x}px ${mousePos.y}px,
            rgba(34,211,238,0.18),
            transparent 70%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold"
        >
          <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
            {heroData.name}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-300"
        >
          {heroData.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-gray-400 text-lg"
        >
          {heroData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* View Projects */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black
               font-semibold text-center transition"
          >
            View Projects
          </motion.a>

          {/* Contact Me */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg border border-gray-600
               text-gray-200 text-center
               hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

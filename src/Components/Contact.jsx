import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-20 md:py-28 bg-black text-white snap-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* LEFT — TEXT + PLATFORMS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Connect</h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I’m actively looking for internship and project opportunities in
            frontend, backend, full-stack, and SDE roles. Feel free to reach out
            through the form or platforms below.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:erikillaashish11@gmail.com"
              className="px-5 py-3 rounded-lg border border-gray-700
                         hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/erikilla-ashish-11ash07ish"
              target="_blank"
              className="px-5 py-3 rounded-lg border border-gray-700
                         hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ashisherikilla"
              target="_blank"
              className="px-5 py-3 rounded-lg border border-gray-700
                         hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/916305852159?text=Hello%20Ashish,%20I%20came%20across%20your%20portfolio."
              target="_blank"
              className="px-5 py-3 rounded-lg border border-gray-700
                         hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <motion.form
          whileHover={{ scale: 1.01 }}
          className="bg-[#0f1629] border border-gray-800
                     rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500
                       text-black font-semibold
                       hover:bg-cyan-400 active:scale-95 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="/ErikillaAshish_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(34,211,238,0)",
                "0 0 30px rgba(34,211,238,0.6)",
                "0 0 0 rgba(34,211,238,0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="
      px-10 py-4 rounded-2xl
      bg-linear-to-r from-cyan-500 to-blue-500
      text-black font-semibold text-lg
      shadow-xl
      transition
    "
          >
            📄 View My Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

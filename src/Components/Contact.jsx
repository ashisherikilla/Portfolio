import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "916305852159"; // your WhatsApp number (no +)

    const text = `
Hello Ashish 👋

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

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
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-gray-700
                         hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ashisherikilla"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-gray-700
                         hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://wa.me/916305852159"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-gray-700
                         hover:border-green-500 hover:text-green-500 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT — CONTACT FORM (WHATSAPP SUBMIT) */}
        <motion.form
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.01 }}
          className="bg-[#0f1629] border border-gray-800
                     rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none"
          />

          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg
                       bg-black border border-gray-700
                       focus:border-cyan-400 outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500
                       text-black font-semibold
                       hover:bg-green-400 active:scale-95 transition"
          >
            Send via WhatsApp
          </button>
        </motion.form>

        {/* RESUME CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2 mt-12 flex justify-center"
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
              bg-gradient-to-r from-cyan-500 to-blue-500
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

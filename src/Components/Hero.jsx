import { motion } from "framer-motion";

const Hero = () => {
  return (
<section
  id="home"
  className="relative min-h-screen flex items-center text-white overflow-hidden bg-black"
>
  {/* 🔵 Strong Blue Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-600 opacity-40 blur-[200px]" />
  </div>

  {/* ⚫ Dark overlay (controls intensity) */}
  <div className="absolute inset-0 bg-black/80" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 pt-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-gray-400 mb-4">Hi, I am</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Parveen
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 mt-2">
            I build modern web interfaces.
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl">
            I’m a frontend-focused developer who enjoys building clean,
            responsive, and user-friendly web applications using modern tools.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-black font-medium rounded hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
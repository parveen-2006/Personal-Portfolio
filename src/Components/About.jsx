import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      {/* 🔵 subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m{" "}
              <span className="text-white font-semibold">Parveen</span>, a
              frontend-focused developer passionate about building clean,
              modern, and user-friendly interfaces.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              I focus on writing maintainable code, creating smooth user
              experiences, and continuously improving my skills in modern web
              technologies.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-gray-300">Clean UI & UX focused</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-gray-300">Modern React workflows</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <p className="text-gray-300">Continuous learner mindset</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Card UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              Quick Info
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-gray-500">Role:</span> Frontend Developer
              </p>
              <p>
                <span className="text-gray-500">Focus:</span> React, UI/UX
              </p>
              <p>
                <span className="text-gray-500">Learning:</span> Backend & System Design
              </p>
              <p>
                <span className="text-gray-500">Goal:</span> Build impactful products
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
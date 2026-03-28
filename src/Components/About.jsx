import { motion } from "framer-motion";
import Skills from "./Skills";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>

            <p className="text-gray-400 max-w-md">
              I’m <span className="text-white font-medium">Parveen</span>, a
              frontend-focused developer who builds clean, responsive, and
              user-friendly web interfaces.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>• Strong focus on clean UI & UX</li>
              <li>• Comfortable with modern React workflows</li>
              <li>• Continuously learning and improving</li>
            </ul>
          </div>

          {/* Right Content – Skills */}
            <Skills/>

        </motion.div>
      </div>
    </section>
  );
};

export default About;

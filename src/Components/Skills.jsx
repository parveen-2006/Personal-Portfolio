import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <h3 className="text-2xl font-semibold mb-6">
        Skills & <span className="text-blue-500">Tools</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
        
        <div>
          <h4 className="font-medium text-white mb-2">Frontend</h4>
          <ul className="space-y-1">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white mb-2">Backend (Basics)</h4>
          <ul className="space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white mb-2">Tools</h4>
          <ul className="space-y-1">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>

      </div>
    </motion.div>
  );
};

export default Skills;

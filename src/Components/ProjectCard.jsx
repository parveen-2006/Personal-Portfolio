import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-[#0b0b0b] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500 transition"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 text-sm">
        <a
          href={project.live}
          className="text-blue-500 hover:underline"
        >
          Live
        </a>
        <a
          href={project.github}
          className="text-gray-400 hover:text-white"
        >
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

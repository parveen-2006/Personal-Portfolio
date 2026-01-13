import { motion } from "framer-motion";
import { projects } from "../Components/data/Project";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-md">
            A selection of projects that showcase my skills and approach to
            building clean, functional interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

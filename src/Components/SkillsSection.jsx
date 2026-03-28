import React from "react";

const skills1 = [
  "/skills/html.png",
  "/skills/css.png",
  "/skills/js.png",
  "/skills/react.png",
];

const skills2 = [
  "/skills/node.png",
  "/skills/mongodb.png",
  "/skills/express.png",
  "/skills/git.png",
];

const skills3 = [
  "/skills/tailwind.png",
  "/skills/mysql.png",
  "/skills/github.png",
  "/skills/postman.png",
];

const Row = ({ images, reverse = false }) => {
  return (
    <div className="relative overflow-hidden py-4 sm:py-6">
      
      {/* Responsive fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        className={`flex w-max gap-6 sm:gap-10 md:gap-14 ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {/* only duplicate 2x (important) */}
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="skill"
            className="
              h-10 w-10 
              sm:h-14 sm:w-14 
              md:h-16 md:w-16 
              object-contain 
              grayscale hover:grayscale-0 
              hover:scale-110 
              transition duration-300
            "
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      {/* 🔵 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600 opacity-30 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Carousel Rows */}
        <Row images={skills1} />
        <Row images={skills2} reverse />
        <Row images={skills3} />

      </div>
    </section>
  );
};

export default SkillsSection;
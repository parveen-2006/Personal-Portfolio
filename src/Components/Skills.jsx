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
    <div className="relative overflow-hidden py-5">
      
      {/* Fade effect (left + right) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        className={`flex w-max gap-12 ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="skill"
            className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-black py-16">
      <Row images={skills1} />
      <Row images={skills2} reverse />
      <Row images={skills3} />
    </div>
  );
};

export default Skills;
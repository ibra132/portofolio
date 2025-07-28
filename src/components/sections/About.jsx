import React, { useState } from "react";
import Milestone from "../Milestone";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    "A dedicated Frontend Engineer specializing in web development,...";
  const fullText =
    "A dedicated Frontend Engineer specializing in web development, with strong proficiency in a diverse set of frontend technologies. I have extensive hands-on experience in building robust and scalable web applications using Vue and TypeScript. My expertise focuses on crafting intuitive user interfaces, implementing responsive designs, and ensuring optimal user experiences using modern styling tools such as Tailwind CSS and SCSS.";

  const work = [
    {
      title: "PT Qtera Mandiri",
      subtitle: "Frontend Developer Intern",
      year: "2025 | January 04 - July 09",
    },
    {
      title: "PT Adici Jaya Bersama",
      subtitle: "Frontend Developer Intern",
      year: "2022 - 2023",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-10 bg-white"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-sm md:text-base text-gray-700">
          {expanded ? fullText : shortText}
        </p>
        {expanded && <Milestone title="Work Experience" items={work} />}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 text-pink-400 ml-2 underline"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </section>
  );
};

export default About;

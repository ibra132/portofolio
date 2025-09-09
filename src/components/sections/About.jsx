import React from "react";
import { motion } from "framer-motion";
import Milestone from "../Milestone";

const About = () => {
  const fullText =
    "A dedicated Frontend Engineer specializing in web development, with strong proficiency in a diverse set of frontend technologies. I have extensive hands-on experience in building robust and scalable web applications using Vue and TypeScript. My expertise focuses on crafting intuitive user interfaces, implementing responsive designs, and ensuring optimal user experiences using modern styling tools such as Tailwind CSS and SCSS.";

  const work = [
    {
      title: "PT WIR Group Asia",
      subtitle: "Frontend Developer Intern",
      year: "2025 | August 04 - Present",
    },
    {
      title: "PT Qtera Mandiri",
      subtitle: "Frontend Developer Intern",
      year: "2025 | January 04 - July 09",
    },
    {
      title: "PT Adici Jaya Bersama",
      subtitle: "Frontend Developer Intern",
      year: "2023 | January 09 - 2023 | March 30",
    },
  ];

  const education = [
    {
      title: "SMKN 56 Jakarta",
      subtitle: "Multimedia",
      year: "2021 - 2024",
    },
    {
      title: "Universitas Esa Unggul",
      subtitle: "Teknik Informatika",
      year: "2024 - Present",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-18 bg-white"
    >
      <motion.div
        className="max-w-3xl text-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Text */}
        <motion.p
          className="text-sm md:text-base text-gray-700 text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {fullText}
        </motion.p>

        {/* Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.3,
                duration: 1.2,
                ease: "easeInOut",
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Milestone title="Work Experience 🏢" items={work} />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Milestone title="Education Experience 🏫" items={education} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

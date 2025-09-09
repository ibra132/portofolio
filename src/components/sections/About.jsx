import React from "react";
import { motion } from "framer-motion";
import Milestone from "../Milestone";
import { aboutText, education, work } from "../../data";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center py-18 bg-white"
    >
      <motion.div
        className="max-w-3xl text-center gap-4 px-5"
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
          {aboutText}
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

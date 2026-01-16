import React from "react";
import { motion } from "framer-motion";
import Milestone from "../Milestone";
import { aboutText, education, work } from "../../data";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* KTP CARD */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* FOTO */}
            <div className="w-40 shrink-0">
              <img
                src="/assets/images/profile.jpeg"
                alt="Profile"
                className="w-full aspect-[3/4] object-cover rounded-lg border border-gray-200"
              />
            </div>

            {/* IDENTITAS */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">Ibra G</h2>
              <p className="text-sm text-gray-500 mb-4">Frontend Developer</p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mb-6">
                {aboutText}
              </p>

              {/* GARIS PEMISAH */}
              <div className="h-px bg-gray-200 my-6" />

              {/* MILESTONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Milestone title="Work Experience" items={work} />
                <Milestone title="Education" items={education} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

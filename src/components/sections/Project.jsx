import React from "react";
import { listProjects, GradientImage } from "../../data";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section
      id="project"
      className="relative text-white py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${GradientImage})` }}
    >
      {/* Overlay biar lebih readable */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-full mx-10 px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            Selected Projects
          </h1>
          <p className="text-zinc-300 text-sm lg:text-base">
            A collection of projects I’ve worked on, focusing on frontend
            development and user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {listProjects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              {/* Image */}
              {item.img && (
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.project}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <h2 className="text-lg font-semibold group-hover:text-white">
                  {item.project}
                </h2>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-white/10 border border-white/10 px-2 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center text-sm font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-zinc-200 transition"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

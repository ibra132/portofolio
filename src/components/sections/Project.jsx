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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-full lg:mx-10 mx-5">
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
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08, // kecilin biar ringan
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {listProjects.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
            >
              {/* Image */}
              {item.img && (
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.project}
                    loading="lazy"
                    className="w-full h-[200px] object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <h2 className="text-lg font-semibold">{item.project}</h2>

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
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

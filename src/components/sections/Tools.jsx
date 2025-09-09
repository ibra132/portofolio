import React from "react";
import { listTools } from "../../data";
import { motion } from "framer-motion";

const Tools = () => {
  return (
    <section className="tools text-white md:p-10 p-5 space-y-5 my-16">
      <h1 className="text-4xl font-bold">Tools that I use..</h1>
      <p>
        💻 From coding to design — here are the tools that fuel my creativity
        and productivity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2">
        {listTools.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center p-3 gap-4 border border-zinc-600 rounded-md 
                       bg-zinc-800/40 hover:bg-zinc-700/50 
                       transition-all duration-300 ease-in-out 
                       hover:scale-[1.02] hover:shadow-lg"
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="w-14 p-1 bg-zinc-900 rounded-md transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col space-y-1">
              <h4 className="font-bold group-hover:text-pink-400 transition-colors duration-300">
                {item.nama}
              </h4>
              <p className="text-sm text-zinc-400">{item.ket}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tools;

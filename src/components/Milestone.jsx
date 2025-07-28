import React from "react";

const Milestone = ({ title, items }) => {
  return (
    <section className="py-10 flex justify-center items-center">
      <h2 className="text-xl font-bold text-center">{title}</h2>
      <div className="relative border-l-4 border-pink-400 ml-4 space-y-10">
        {items.map((item, idx) => (
          <div key={idx} className="ml-6">
            <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-2.5 top-1.5"></div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-md">{item.subtitle}</p>
            <span className="text-sm text-gray-500">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestone;

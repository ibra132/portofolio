import React from "react";

const Milestone = ({ title, items }) => {
  return (
    <section className="py-10 flex justify-center items-start">
      <div>
        <h2 className="text-xl font-bold text-center mb-8">{title}</h2>
        <div className="relative border-l-4 border-pink-400 ml-4">
          {items.map((item, idx) => (
            <div key={idx} className="relative pl-5">
              {/* Dot pink */}
              <div className="absolute w-5 h-5 bg-pink-400 rounded-full -left-3 top-1.5"></div>
              <div className="absolute w-3 h-3 bg-white rounded-full -left-2 top-2.5"></div>

              {/* Grid content */}
              <div className="flex text-start flex-col mt-10 gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
                <span className="text-sm text-gray-500">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;

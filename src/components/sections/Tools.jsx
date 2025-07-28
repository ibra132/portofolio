import React from "react";
import { listTools } from "../../data";

const Tools = () => {
  return (
    <section className="tools text-white md:p-10 p-5 space-y-5 my-16">
      <h1 className="text-4xl font-bold">Tools that i used..</h1>
      <p>
        💻 From coding to design — here are the tools that fuel my creativity
        and productivity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2">
        {listTools.map((item) => (
          <div
            className="flex items-center p-3 gap-4 hover:bg-zinc-600 border-1 border-zinc-600 rounded-md"
            key={item.id}
          >
            <img src={item.gambar} alt="" className="w-14 p-1 bg-zinc-800" />
            <div className="flex flex-col space-y-1">
              <h4 className="font-bold">{item.nama}</h4>
              <p className="text-sm text-zinc-400">{item.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;

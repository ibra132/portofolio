import React, { useEffect, useState } from "react";

const Navbar = () => {
  const menus = ["Home", "About", "Project", "Contact"];

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setActive(true);
      else setActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 px-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          バイム's Porto
        </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 fixed z-10 md:z-0 md:static left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 md:top-0 border-1 md:border-none bg-black/50 text-white backdrop-blur-md p-4 rounded rounded-br-2xl rounded-bl-2xl transition-all md:transition-none ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        {menus.map((link) => (
          <li key={link}>
            <a href={`#${link === "Home" ? "" : link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        navbar py-4 px-10 flex items-center justify-between
        md:fixed md:top-0 md:left-0 md:right-0 md:z-50
        md:backdrop-blur-md
        md:border-b md:border-white/10
      "
    >
      {/* LOGO */}
      <div className="logo">
        <h1 className="text-2xl sm:text-4xl md:text-2xl font-bold text-white">
          Ibrahim
        </h1>
      </div>

      {/* MENU */}
      <ul
        className={`
          menu flex items-center sm:gap-10 gap-4
          fixed z-10 md:z-0
          md:static
          left-1/2 -translate-x-1/2 md:-translate-x-0
          md:opacity-100
          md:top-0
          border-1 md:border-none
          bg-black/50 md:bg-transparent
          text-white md:text-zinc-400 
          backdrop-blur-md md:backdrop-blur-0
          p-4 md:p-0
          rounded rounded-br-2xl rounded-bl-2xl md:rounded-none
          transition-all md:transition-none
          ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}
        `}
      >
        {menus.map((link) => (
          <li key={link} className="md:relative">
            <a
              href={`#${link === "Home" ? "" : link.toLowerCase()}`}
              className="
                md:text-sm md:font-medium
                md:hover:text-white/80
                transition-colors
              "
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

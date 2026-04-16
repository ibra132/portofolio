import React, { useState } from "react";
import { useScroll } from "../hooks/useScroll";

// const Navbar = () => {
//   const menus = ["Home", "About", "Project", "Contact"];
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 150) setActive(true);
//       else setActive(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className="
//         navbar py-4 px-10 flex items-center justify-between
//         md:fixed md:top-0 md:left-0 md:right-0 md:z-50
//         md:backdrop-blur-md
//         md:bg-black/50
//         md:border-b md:border-white/10
//       "
//     >
//       {/* LOGO */}
//       <div className="logo">
//         <h1 className="text-2xl sm:text-4xl md:text-2xl font-bold text-white">
//           Ibrahim
//         </h1>
//       </div>

//       {/* MENU */}
//       <ul
//         className={`
//           menu flex items-center sm:gap-10 gap-4
//           fixed z-10 md:z-0
//           md:static
//           left-1/2 -translate-x-1/2 md:-translate-x-0
//           md:opacity-100
//           md:top-0
//           bg-black/50 md:bg-transparent
//           border-1 md:border-none
//           text-white
//           backdrop-blur-md md:backdrop-blur-none
//           p-4 md:p-0
//           rounded rounded-br-2xl rounded-bl-2xl md:rounded-none
//           transition-all md:transition-none
//           ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}
//         `}
//       >
//         {menus.map((link) => (
//           <li key={link} className="md:relative">
//             <a
//               href={`#${link === "Home" ? "" : link.toLowerCase()}`}
//               className="
//                 md:text-sm md:font-medium
//                 md:hover:text-white/80
//                 transition-colors
//               "
//             >
//               {link}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const Navbar = () => {
  const isScrolled = useScroll();
  const menus = ["Home", "About", "Project", "Contact"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`
        fixed left-0 w-full z-50 transition-all duration-500 
        ${isScrolled ? "top-6 py-0" : "top-0 py-5"}
      `}
    >
      <div className="mx-auto w-[90%] md:max-w-7xl">
        {/* NAVBAR */}
        <div
          className={`
            flex items-center justify-between px-6 rounded-full transition-all duration-500
            ${
              isScrolled
                ? "bg-black/75 backdrop-blur-md py-3 shadow-lg border border-white/50"
                : "bg-transparent py-5"
            }
          `}
        >
          <h1 className="text-lg md:text-2xl font-bold text-white">Ibrahim</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-white">
            {menus.map((link) => {
              const href = `#${link === "Home" ? "" : link.toLowerCase()}`;
              return (
                <a
                  key={link}
                  href={href}
                  className="md:text-md md:font-medium hover:text-white/80 transition-colors"
                >
                  {link}
                </a>
              );
            })}
          </nav>

          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="bg-black/90 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-4 text-white border border-white/50">
            {menus.map((link) => {
              const href = `#${link === "Home" ? "" : link.toLowerCase()}`;
              return (
                <a
                  key={link}
                  href={href}
                  className="py-1 hover:text-white/70 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              );
            })}

            <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
              <button className="bg-pink-600 py-2 rounded-lg">
                Hello World 🌎
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

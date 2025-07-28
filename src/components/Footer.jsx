import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-pink-400">Baim.dev</h2>
          <p className="mt-2 text-sm text-gray-400">
            Frontend developer with a passion for building elegant, performant,
            and user-focused interfaces.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="" className="hover:text-pink-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-pink-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-pink-400 transition">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Let's Connect</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a
                href="https://github.com/ibra132"
                target="_blank"
                className="hover:text-pink-400 transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ibrahim-gunawan-25621228b/"
                target="_blank"
                className="hover:text-pink-400 transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:baimgunawan1@gmail.com"
                className="hover:text-pink-400 transition"
              >
                Email Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-6 text-sm text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Baim. All rights reserved.</p>
        <p>Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;

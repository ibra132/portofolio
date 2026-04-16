import React, { useEffect, useState } from "react";
import { GradientImage, Radiohead } from "../../data";
import toast from "react-hot-toast";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ["Frontend Developer 🚀", "Obsessed with Clean Code"];

    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

      setText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const handleDownload = () => {
    toast.success("CV downloaded!");
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="flex flex-col items-start justify-center md:p-10 px-10 py-35 text-white md:space-y-6 space-y-8">
        <div className="flex gap-4 max-w-md md:text-base text-sm items-center bg-zinc-800 p-4 rounded-2xl">
          "Second best time to learn is now!"
        </div>
        <h1 className="text-4xl font-bold">
          Turning Ideas Into Clean, Fast & Interactive Web Apps
        </h1>
        <p className="md:text-base text-sm">
          I build responsive and user-friendly web apps using modern
          technologies. Focused on performance, clean architecture, and great
          user experience.
        </p>
        <div className="flex gap-2">
          <a
            onClick={handleDownload}
            href="/cv.pdf"
            download
            className="bg-white text-black px-4 py-2 rounded-lg"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border-1 border-white text-white px-4 py-2 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right */}
      <div
        className="ml-auto self-center h-[500px] w-full flex justify-center items-center text-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${GradientImage})` }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold">
          <span
            className={`text-pink-500 transition duration-500 opacity-70 ${
              !isDeleting
                ? "text-pink-400 drop-shadow-[0_0_6px_#ec4899] opacity-100"
                : ""
            }`}
          >
            {text}|
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;

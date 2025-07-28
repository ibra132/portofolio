import React, { useEffect, useState } from "react";
import { GradientImage, Radiohead } from "../../data";

const words = ["Frontend Developer"];

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[640px]">
      {/* Left */}
      <div className="flex flex-col items-start justify-center md:p-10 p-5 text-white md:space-y-6 space-y-8">
        <div className="flex gap-4 max-w-md items-center bg-zinc-800 p-4 rounded-2xl">
          <img
            src={Radiohead}
            alt=""
            className="w-10 h-10 rounded-lg object-cover"
          />
          🎧 Let Down - Radiohead
        </div>
        <h1 className="text-4xl font-bold">Welcome to My Portfolio :D</h1>
        <p>
          I love turning creative ideas into beautiful, responsive web
          interfaces. With a focus on clean code and user experience, I enjoy
          building things that live on the web.
        </p>
        <div className="flex gap-2">
          <a
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
        className="ml-auto self-center h-[500px] w-full flex justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${GradientImage})` }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold">
          I'm <span className="text-pink-500">{text}|</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // @ts-ignore
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    // @ts-ignore
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    // @ts-ignore
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_name: "Baim",
    };

    try {
      setIsLoading(true);

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success("Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="text-black bg-white bg-cover bg-center">
      <div className="flex flex-col justify-center items-center space-y-10 px-6 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold">Contact</h1>
          <p className="md:text-base text-sm text-gray-600 justify-center">
            Feel free to drop a message anytime, I'll get back to you soon!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md md:max-w-2xl bg-white shadow-lg rounded-lg p-6 space-y-6"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              disabled={isLoading}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-60"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={isLoading}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-60"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              disabled={isLoading}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 resize-y h-40 disabled:opacity-60"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full flex items-center justify-center gap-2
              bg-pink-500 hover:bg-pink-600
              disabled:bg-pink-400
              text-white font-semibold py-2 rounded-md
              transition-all
            "
          >
            {isLoading && (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

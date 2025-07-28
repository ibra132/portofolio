import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success("Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email.");
    }
  };

  return (
    <section
      id="contact"
      className="text-black bg-white min-h-screen bg-cover bg-center"
    >
      <div className="flex flex-col justify-center items-center space-y-10 px-6 py-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-gray-600">
            Feel free to drop a message anytime, I'll get back to you soon!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white  shadow-lg rounded-lg p-6 space-y-6"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
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
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

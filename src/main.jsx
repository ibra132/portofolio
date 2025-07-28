import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import React from "react";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Navbar />
      <div className="container mx-auto">
        <App />
      </div>
      <Footer />
    </StrictMode>
  );
} else {
  console.error("Root element not found!");
}

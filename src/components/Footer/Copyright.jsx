// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <footer className="w-full bg-black text-gray-300 text-sm">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4" id="footer">
        
        {/* Footer Navigation */}
        <nav className="flex flex-wrap gap-6 justify-center md:justify-start" aria-label="Footer Navigation">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/shop" className="hover:text-white transition">Shop</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p>Copyright &copy; 2025 Black Friday</p>
        </div>

      </div>
    </footer>
  );
};

export default Copyright;

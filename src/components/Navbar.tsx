"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for open/close menu

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

// Function to handle smooth scrolling
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Closes mobile menu after clicking
};

return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full flex justify-between items-center z-50">
    {/* Logo */}
    <h1 className="text-3xl font-bold text-black">Sanka Marketplace</h1>

    {/* Hamburger Menu (Mobile) */}
    <button
        className="sm:hidden text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
    >
        {menuOpen ? <X size={32} /> : <Menu size={32} />} {/* Toggle between ☰ and ✖ */}
    </button>

    {/* Desktop Menu */}
    <ul className="hidden sm:flex space-x-6 text-black text-xl">
        <li>
        <a href="#about" className="hover:text-red-600" onClick={(e) => handleSmoothScroll(e, "about")}>
            About
        </a>
        </li>
        <li>
        <a href="#fairtrade" className="hover:text-red-600" onClick={(e) => handleSmoothScroll(e, "fairtrade")}>
            Fair Trade
        </a>
        </li>
        <li>
        <a href="#contact" className="hover:text-red-600" onClick={(e) => handleSmoothScroll(e, "contact")}>
            Contact
        </a>
        </li>
    </ul>

    {/* Mobile Menu (Opens when menuOpen is true) */}
    {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 sm:hidden">
        <li>
            <a href="#about" className="text-black text-xl hover:text-gray-600" onClick={(e) => handleSmoothScroll(e, "about")}>
            About
            </a>
        </li>
        <li>
            <a href="#fairtrade" className="text-black text-xl hover:text-gray-600" onClick={(e) => handleSmoothScroll(e, "fairtrade")}>
            Fair Trade
            </a>
        </li>
        <li>
            <a href="#contact" className="text-black text-xl hover:text-gray-600" onClick={(e) => handleSmoothScroll(e, "contact")}>
            Contact
            </a>
        </li>
        </ul>
    )}
    </nav>
);
}

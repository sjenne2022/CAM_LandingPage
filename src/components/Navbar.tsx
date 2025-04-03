"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
};

return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full flex justify-between items-center z-50">
    {/* Logo */}
    <Link href="/" className="flex items-center space-x-2">
        <Image
        src="/favicon.ico" // or "/Sanka_Marketplace_logo.png"
        alt="Sanka Marketplace Logo"
        width={36}
        height={36}
        />
        <span className="text-2xl font-bold text-black hidden sm:inline">Sanka Marketplace</span>
    </Link>

    {/* Hamburger Menu */}
    <button
        className="sm:hidden text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
    >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
    </button>

    {/* Desktop Menu */}
    <ul className="hidden sm:flex space-x-6 text-black text-xl">
        <li>
        <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-red-600">About</a>
        </li>
        <li>
        <a href="#fairtrade" onClick={(e) => handleSmoothScroll(e, "fairtrade")} className="hover:text-red-600">Fair Trade</a>
        </li>
        <li>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-red-600">Contact</a>
        </li>
    </ul>

    {/* Mobile Menu */}
    {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 sm:hidden">
        <li>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="text-black text-xl hover:text-gray-600">About</a>
        </li>
        <li>
            <a href="#fairtrade" onClick={(e) => handleSmoothScroll(e, "fairtrade")} className="text-black text-xl hover:text-gray-600">Fair Trade</a>
        </li>
        <li>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="text-black text-xl hover:text-gray-600">Contact</a>
        </li>
        </ul>
    )}
    </nav>
);
}

"use client";

export default function Navbar() {
    return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">CAM Store</h1>
        <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-gray-600">About</a></li>
        <li><a href="#fairtrade" className="hover:text-gray-600">Fair Trade</a></li>
        <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
        </ul>
    </nav>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
const heroRef = useRef(null);

useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
}, []);

return (
    <section ref={heroRef} className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
    <h1 className="text-4xl font-bold mb-4">Discover Authentic African Goods</h1>
    <p className="text-lg mb-6">Join our community and get notified when we launch.</p>
    <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700">
        Sign Up
    </button>
    </section>
);
}   
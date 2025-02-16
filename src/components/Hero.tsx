"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
const heroRef = useRef(null);

useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
}, []);

return (
    <section ref={heroRef} className="h-screen flex flex-row items-center bg-white text-left px-12 text-black">
    {/* Left Side - Text Content */}
    <div className="w-1/2 pl-16">
        <h1 className="text-7xl font-bold mb-4 max-w-3xl leading-tight">
        Discover authentic African goods that spark conversation
        </h1>
        <p
            className="text-2xl font-semibold mb-6 mt-8 relative pb-2 max-w-[362px]"
            style={{
            borderBottom: "4px dashed",
            borderImage: "linear-gradient(to right, green 0%, green 20%, #8B0000 20%, #8B0000 40%, green 40%, green 60%, #8B0000 60%, #8B0000 80%, green 80%, green 100%) 1",
            }}
    >
            each product has a story to tell.
        </p>
        <button className="bg-red-800 text-white py-3 px-6 rounded-3xl text-lg hover:bg-red-600 a mt-8  active:bg-red-950 ">
        Sign Up for Early Access
        </button>
    </div>

    {/* Right Side - Image */}
    <div className="w-1/2 flex justify-center">
        <Image
        src="/AfricanStyle.png" // Update with your image path
        alt="Authentic African Goods"
        width={690} // Adjust as needed
        height={1000} // Adjust as needed
        className="rounded-lg"
        />
    </div>
    </section>
);
}

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
    <section
    ref={heroRef}
    className="min-h-screen w-full max-w-none flex flex-col sm:flex-row items-center bg-white text-left px-6 sm:px-16 text-black pt-24 sm:pt-0 pb-12"
    >
    {/* Left Side - Text Content */}
    <div className="w-full sm:w-2/3 flex flex-col justify-center items-center sm:items-start gap-12">
        <h1 className="text-5xl sm:text-8xl font-bold w-full max-w-none leading-tight text-center sm:text-left">
        Discover authentic African goods that spark conversation
        </h1>
        <p
        className="text-xl sm:text-2xl font-semibold relative pb-2 max-w-[400px] sm:max-w-[500px] text-center sm:text-left"
        style={{
            borderBottom: "4px dashed",
            borderImage:
            "linear-gradient(to right, green 0%, green 20%, #8B0000 20%, #8B0000 40%, green 40%, green 60%, #8B0000 60%, #8B0000 80%, green 80%, green 100%) 1",
        }}
        >
        each product has a story to tell.
        </p>
        <button className="bg-red-800 text-white py-3 px-6 rounded-3xl text-xl sm:text-lg hover:bg-red-600 active:bg-red-950">
        Sign Up for Early Access
        </button>
    </div>

    {/* Right Side - Image */}
    <div className="w-full sm:w-[45%] lg:w-1/2 flex justify-center mt-8 sm:mt-0">
        <Image
        src="/AfricanStyle.png"
        alt="Authentic African Goods"
        width={1400}
        height={1400}
        className="rounded-lg w-full sm:w-auto sm:max-w-lg lg:max-w-3xl h-auto object-contain"
        />
    </div>
    </section>
);
}

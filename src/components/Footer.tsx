"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
const footerRef = useRef(null);

useEffect(() => {
    gsap.fromTo(
    footerRef.current,
    { opacity: 0, y: 50, scale: 0.95 }, // Starts slightly smaller & lower
    {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5, // Slower animation for a smooth effect
        delay: 0.3, // Small delay before animation starts
        ease: "power2.out",
        scrollTrigger: footerRef.current,
    }
    );
}, []);

return (
    <footer ref={footerRef} id="contact" className="bg-green-900 text-white py-16 px-6 sm:px-16">
    <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Left Section - Email Contact */}
        <div className="w-full">
        <p className="text-lg sm:text-xl font-semibold tracking-wide opacity-60">
            Reach out:
        </p>
        <a
            href="mailto:cam.landingpage@gmail.com"
            className="text-xl sm:text-6xl font-bold underline underline-offset-4 hover:no-underline transition-all duration-300 block hover:tracking-wider"
        >
            cam.landingpage@gmail.com →
        </a>
        </div>

        {/* Right Section - Our Style */}
        <div className="w-full">
        <p className="text-lg sm:text-xl font-semibold tracking-wide opacity-60">
            Our Style:
        </p>
        <p className="text-xl sm:text-6xl font-semibold leading-snug mt-4 sm:mt-2">
            A store that brings the 🌍 to you, with an authentic approach rooted in African craftsmanship.
        </p>
        </div>
    </div>
    </footer>
);
}

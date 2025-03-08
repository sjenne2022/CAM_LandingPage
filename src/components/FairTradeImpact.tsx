"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FairTradeImpact() {
// Updated ref type definition
const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
    gsap.from(pillarsRef.current, {
    scrollTrigger: {
        trigger: pillarsRef.current[0],
        start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3
    });
}, []);

return (
    <section className="py-20 px-6 bg-white text-black">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        
        {/* Pillar 1 */}
        <div
        className="flex flex-col items-center px-4"
        ref={(el) => {pillarsRef.current[0] = el}}
        >
        <h3 className="text-6xl sm:text-7xl font-bold">💰</h3>
        <h4 className="text-2xl font-semibold mt-4">Authenticity</h4>
        <p className="text-lg mt-2 max-w-xs">
            Products straight from the motherland
        </p>
        </div>

        {/* Pillar 2 */}
        <div
        className="flex flex-col items-center px-4"
        ref={(el) => {pillarsRef.current[1] = el}}
        >
        <h3 className="text-6xl sm:text-7xl font-bold">🌍</h3>
        <h4 className="text-2xl font-semibold mt-4">Economic Empowerment</h4>
        <p className="text-lg mt-2 max-w-xs">
            Market expansion for African sellers
        </p>
        </div>

        {/* Pillar 3 */}
        <div
        className="flex flex-col items-center px-4"
        ref={(el) => {pillarsRef.current[2] = el}}
        >
        <h3 className="text-6xl sm:text-7xl font-bold">🤝</h3>
        <h4 className="text-2xl font-semibold mt-4">Exclusivity</h4>
        <p className="text-lg mt-2 max-w-xs">
            Products only made in Africa
        </p>
        </div>

    </div>
    </section>
);
}

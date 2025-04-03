"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FairTradeImpact() {
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
    stagger: 0.3,
    });
}, []);

return (
    <section className="py-20 px-6 bg-[#FAF4EF] text-black  border-b-4 border-black border-opacity-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
        
        {/* Pillar 1 */}
        <div className="flex flex-col items-center px-4 gap-y-4" ref={(el) => { pillarsRef.current[0] = el }}>
        <div className="w-32 h-32 flex items-center justify-center">
            <Image 
            src="/Africaicon.png"
            alt="Authenticity Icon"
            width={128}
            height={128}
            className="object-contain"
            />
        </div>
        <h4 className="text-2xl font-semibold">Authenticity</h4>
        <p className="text-lg max-w-xs">
            Products straight from the motherland
        </p>
        </div>

        {/* Pillar 2 */}
        <div className="flex flex-col items-center px-4 gap-y-4" ref={(el) => { pillarsRef.current[1] = el }}>
        <div className="w-32 h-32 flex items-center justify-center">
            <Image 
            src="/investment.png"
            alt="Economic Empowerment Icon"
            width={128}
            height={128}
            className="object-contain"
            />
        </div>
        <h4 className="text-2xl font-semibold">Economic Empowerment</h4>
        <p className="text-lg max-w-xs">
            Market expansion for African sellers
        </p>
        </div>

        {/* Pillar 3 */}
        <div className="flex flex-col items-center px-4 gap-y-4" ref={(el) => { pillarsRef.current[2] = el }}>
        <div className="w-32 h-32 flex items-center justify-center">
            <Image 
            src="/exclusive.png"
            alt="Exclusivity Icon"
            width={128}
            height={128}
            className="object-contain"
            />
        </div>
        <h4 className="text-2xl font-semibold">Exclusivity</h4>
        <p className="text-lg max-w-xs">
            Products only made in Africa
        </p>
        </div>

    </div>
    </section>
);
}

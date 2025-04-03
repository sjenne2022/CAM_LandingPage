"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
const SubscribeModal = dynamic(() => import("./SubscribeModal"), { ssr: false });


export default function Hero() {
const heroRef = useRef(null);
const textRef = useRef(null);
const imageRef = useRef(null);
const cursorRef = useRef<HTMLDivElement>(null);
const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
const [modalState, setModalState] = useState<'closed' | 'opening' | 'visible' | 'closing'>('closed');


const headingText =
    "Discover authentic African goods that spark conversation";
const words = headingText.split(" ");

useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.fromTo(heroRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
    .from(textRef.current, { opacity: 0, y: 20 }, "-=0.5")
    .from(imageRef.current, { opacity: 0, x: 50 }, "-=0.5");

    gsap.from(wordRefs.current, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.3,
    delay: 0.5,
    });
}, []);

const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "SankaMarketplace | Discover African Goods",
                text: "Check out SankaMarketplace — your destination for authentic African goods that spark conversation!"
            });
            console.log("Content shared successfully!");
        } catch (error) {
            if (error instanceof Error && error.name !== "AbortError") {
                console.error("Error sharing:", error);
            }
        }
    } else {
        alert("Sharing not supported on this device.");
    }
};


return (
    <section
    ref={heroRef}
    className="relative min-h-screen w-full max-w-none flex flex-col sm:flex-row items-center bg-[#FAF4EF] text-left px-6 sm:px-16 text-black pt-24 sm:pt-0 pb-12 border-b-4 border-black border-opacity-10"
    >
    <div
        ref={cursorRef}
        className="pointer-events-none fixed flex items-center justify-center bg-red-800 active:bg-red-600 text-white font-bold text-sm sm:text-lg px-4 py-2 rounded-lg shadow-lg z-[9999]"
        style={{ transform: "translate(-50%, -50%)", display: "none" }}
    >
        Get Early Access Now
    </div>

    {/* Left Side - Text Content */}
    <div
        ref={textRef}
        className="w-full sm:w-2/3 flex flex-col justify-center items-center sm:items-start gap-6"
    >
        <h1 className="text-5xl sm:text-8xl font-bold w-full max-w-none leading-tight text-center sm:text-left flex flex-wrap justify-center sm:justify-start gap-3">
        {words.map((word, index) => (
            <span
            key={`${word}-${index}`}
            ref={(el) => {
                wordRefs.current[index] = el;
            }}
            className="inline-block"
            >
            {word}
            </span>
        ))}
        </h1>

        <p
        className="text-xl sm:text-2xl font-semibold relative pb-2 max-w-[400px] sm:max-w-[500px] text-center sm:text-left"
        style={{
            borderBottom: "4px dashed",
            borderImage:
            "linear-gradient(to right, green 0%, green 20%, #8B0000 20%, #8B0000 40%, green 40%, green 60%, #8B0000 60%, #8B0000 80%, green 80%, green 100%) 1",
        }}
        >
        Each product has a story to tell.
        </p>

    {/* Buttons - Flex Container for Side-by-Side Layout */}
    <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
        {/* Sign Up Button */}
        <button 
        className="bg-red-800 text-white py-3 px-6 rounded-3xl text-lg sm:text-xl hover:bg-red-600 active:bg-red-950"
        onClick={() => setModalState('opening')}
        >
            Sign Up for Updates
        </button>

        {/* Share Button */}
        <button
            onClick={handleShare}
            className="bg-green-800 text-white py-3 px-6 rounded-3xl text-lg sm:text-xl hover:bg-blue-500 active:bg-blue-800 flex items-center gap-2"
        >
            <Image 
                src="/sharev2.png"
                alt="Share"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
            />
            Spread the Word
        </button>
    </div>

    </div>

    {/* Right Side - Clickable Image CTA */}
    <button
        type="button"
        onClick={() => setModalState('opening')}
        ref={imageRef}
        className="w-full sm:w-[45%] lg:w-1/2 flex justify-center mt-8 sm:mt-0"
        onMouseMove={(e) => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
            left: e.clientX,
            top: e.clientY,
            duration: 0.6,
            ease: "power3.out",
            });
        }
        }}
        onMouseEnter={() => {
        if (cursorRef.current) cursorRef.current.style.display = "flex";
        }}
        onMouseLeave={() => {
        if (cursorRef.current) cursorRef.current.style.display = "none";
        }}
        onMouseDown={() => {
        if (cursorRef.current)
            cursorRef.current.classList.replace("bg-red-800", "bg-red-600");
        }}
        onMouseUp={() => {
        if (cursorRef.current)
            cursorRef.current.classList.replace("bg-red-600", "bg-red-800");
        }}
    >
        <Image
        src="/AfricanStyle.png"
        alt="Authentic African Goods"
        width={1400}
        height={1400}
        className="rounded-lg w-full sm:w-auto sm:max-w-lg lg:max-w-3xl h-auto object-contain mb-[-48px]"
        />
    </button>
    <SubscribeModal
        modalState={modalState}
        setModalState={setModalState}
    />
    </section>
);
}

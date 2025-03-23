"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
const videoRef = useRef(null);
const cursorRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    // Video animation (fade-in + scale-up)
    gsap.from(videoRef.current, {
    scrollTrigger: {
        trigger: videoRef.current,
        start: "top 85%",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power2.out"
    });
}, []);

return (
    <section className="py-12 sm:py-32 px-6 text-center bg-white border-b-4 border-black border-opacity-10">
    <h2 className="text-6xl sm:text-9xl font-bold mb-7 text-black">African Designed</h2>
    <div className="flex justify-center items-center">
        {/* Custom Cursor Button */}
        <div
        ref={cursorRef}
        className="pointer-events-none fixed flex items-center justify-center bg-green-800 text-white font-bold text-sm sm:text-lg px-4 py-2 rounded-lg shadow-lg z-[9999]"
        style={{ transform: "translate(-50%, -50%)", display: "none" }}
        >
        Support African Artisans Now
        </div>

        {/* Video wrapped in a link (fully centered) */}
        <a
        href="#"
        className="flex justify-center items-center"
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
            cursorRef.current.classList.replace('bg-green-800', 'bg-green-600');
        }}
        onMouseUp={() => {
            if (cursorRef.current)
            cursorRef.current.classList.replace('bg-green-600', 'bg-green-800');
        }}
        >
        <video
            ref={videoRef}
            className="w-full max-w-[90%] sm:max-w-8xl aspect-video rounded-lg video-element"
            src="/AfricanVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
        </a>
    </div>
    </section>
);
}

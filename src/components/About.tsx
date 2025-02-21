"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
const headingRef = useRef<(HTMLHeadingElement | null)[]>([]);
const imageRef = useRef(null);
const textRef = useRef<(HTMLParagraphElement | null)[]>([]);

useEffect(() => {
    // Heading animation (slide-in from left + fade-in)
    gsap.from(headingRef.current, {
    scrollTrigger: {
        trigger: headingRef.current[0],
        start: "top 90%",
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
    });

    // Image animation (fade-in + scale-up)
    gsap.from(imageRef.current, {
    scrollTrigger: {
        trigger: imageRef.current,
        start: "top 85%",
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power2.out"
    });

    // Text paragraphs animation (fade-in + slide-up)
    gsap.from(textRef.current, {
    scrollTrigger: {
        trigger: textRef.current[0],
        start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
    });
}, []);

return (
    <section id="about" className="py-20 px-6 bg-white text-left text-black">
    {/* Heading Section */}
    <div className="text-center sm:text-left">
        <h2
        className="text-7xl sm:text-9xl font-bold sm:ml-14 ml-[-50px] about-heading"
        ref={(el) => { headingRef.current[0] = el; }}
        >
        What
        </h2>
        <h2
        className="text-7xl ml-24 sm:text-9xl sm:ml-40 font-bold mb-4 mt-[-10px] sm:mt-[-40px] about-heading"
        ref={(el) => { headingRef.current[1] = el; }}
        >
        we do
        </h2>
    </div>

    {/* Image & Text Container */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mt-10 sm:mt-28">
        {/* Left Side - Image */}
        <div className="w-full sm:w-1/3 flex justify-center">
        <Image
            src="/Whatwedo.jpg"
            alt="Authentic African Craftsmanship"
            width={450}
            height={400}
            className="mt-10 sm:mt-28 w-3/4 sm:w-auto rounded-xl sm:rounded-none about-image"
            ref={imageRef}
        />
        </div>

        {/* Right Side - Text */}
        <div className="w-full sm:w-2/3 text-left sm:text-left">
        <p
            className="text-xl sm:text-4xl sm:mt-64 sm:ml-32 font-semibold max-w-4xl mb-10 about-text"
            ref={(el) => { textRef.current[0] = el; }}
        >
            Welcome to CAM—the first-of-its-kind marketplace bringing the soul of Africa to the world. Discover a curated collection where every piece, from stylish wearables and contemporary fashion to artisanal tools and unique home accents, is a testament to Africa’s rich heritage and masterful craftsmanship.
        </p>
        <p
            className="text-xl sm:text-4xl font-semibold sm:ml-32 max-w-4xl text-green-800 about-text"
            ref={(el) => { textRef.current[1] = el; }}
        >
            With each purchase, you’re not only enjoying high-quality craftsmanship but also supporting fair trade practices that empower local communities. Explore our curated selection and experience the authentic creativity and passion that goes into every piece.
        </p>
        </div>
    </div>
    </section>
);
}

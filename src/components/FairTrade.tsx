"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FairTrade() {
const headingRef = useRef<(HTMLHeadingElement | null)[]>([]);
const textRef = useRef<(HTMLParagraphElement | null)[]>([]);
const imageRef = useRef(null);

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
    stagger: 0.2,
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
    stagger: 0.2,
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
    ease: "power2.out",
    });
}, []);

return (
    <section
    id="fairtrade"
    className="py-20 px-6 bg-white text-left text-black border-b-4 border-black border-opacity-10"
    >
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        {/* Left Side - Text Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h2
            className="text-7xl sm:text-9xl font-bold sm:ml-14 fairtrade-heading"
            ref={(el) => {
            headingRef.current[0] = el;
            }}
        >
            FAIR
        </h2>
        <h2
            className="text-7xl sm:text-9xl font-bold mb-10 sm:ml-40 sm:mb-20 fairtrade-heading"
            ref={(el) => {
            headingRef.current[1] = el;
            }}
        >
            TRADE
        </h2>

        <p
            className="font-semibold sm:ml-14 text-left text-xl sm:text-3xl max-w-2xl mx-auto sm:mx-0 mb-8 fairtrade-text"
            ref={(el) => {
            textRef.current[0] = el;
            }}
        >
            How is Sanka Marketplace fair trade? Well, at Sanka Marketplace we work directly with African artisans, ensuring they&apos;re paid fairly and work in safe, supportive environments.
        </p>
        <p
            className="font-semibold sm:ml-14 text-left text-xl sm:text-3xl max-w-3xl mx-auto sm:mx-0 text-red-700 fairtrade-text"
            ref={(el) => {
            textRef.current[1] = el;
            }}
        >
            When you choose Sanka Marketplace, you&apos;re supporting African artisans and strengthening their communities.
        </p>
        <button className="bg-green-800 sm:ml-14 text-white py-3 sm:py-4 sm:px-7 sm:rounded-full px-6 rounded-3xl text-lg sm:text-xl hover:bg-green-600 active:bg-green-950 mt-8 sm:mt-16">
            Get the latest updates now
        </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-10 sm:mt-8">
        <Image
            src="/FairTrade.jpg"
            alt="Fair Trade Artisans"
            width={600}
            height={600}
            className="w-3/4 sm:w-auto max-w-xs sm:max-w-xl sm:mr-20 rounded-xl sm:rounded-none fairtrade-image"
            ref={imageRef}
        />
        </div>
    </div>
    </section>
);
}

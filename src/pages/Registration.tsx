import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { GallerySection } from "../components/GallerySection";
import { BriefingSection } from "../components/BriefingSection";
import { HalftoneBg } from "../components/HalftoneBg";
import { FilloutStandardEmbed } from "@fillout/react";

gsap.registerPlugin(ScrollTrigger);

export const Registration = () => {

    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = mainRef.current;
        if (!container) return;

        // Create the GSAP tween
        const ctx = gsap.context(() => {

        });

        return () => ctx.revert(); // Clean up on unmount to prevent memory leaks
    }, []);
    return (

        <div className="w-full min-h-screen bg-myblack"
            ref={mainRef}>
            <div
                className="w-full relative transition-colors duration-300 ease-in-out min-h-dvh items-center"
            >

                <HalftoneBg />
                <span className="text-white text-8xl font-eternalo text-center w-full">
                    REGISTRATION
                </span>
                <div
                    style={{
                        width: "80%",
                    }}
                >
                    <FilloutStandardEmbed filloutId="397tsy8vJjus" />
                </div>
            </div>
        </div>
    );
};

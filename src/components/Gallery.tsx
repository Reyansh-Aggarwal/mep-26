import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalftoneBg } from "./HalftoneBg";
import mepLogo from "../assets/logos/mep_logo.png";
import Underline from "../assets/images/text_underline.png"
import { cn } from "../utils";
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export const Gallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerSectionRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const container = containerRef.current;
        const triggerSection = triggerSectionRef.current;
        const nav = navRef.current;
        if (!container || !triggerSection) return;

        // Create the GSAP tween
        const ctx = gsap.context(() => {
            gsap.to(container, {
                backgroundColor: "#efefef", // Tailwind's indigo-950
                scrollTrigger: {
                    trigger: triggerSection,
                    start: "top 40%",
                    end: "top 20%",
                    scrub: 0.8,
                    markers: false,
                },
            });

            gsap.to(nav, {
                opacity: 1, // GSAP uses 0 to 1 for opacity values
                scrollTrigger: {
                    trigger: triggerSection,
                    start: "top 60%",
                    end: "top 20%",
                    scrub: 0.8,
                },
            });
        });

        return () => ctx.revert(); // Clean up on unmount to prevent memory leaks
    }, []);

    return (
        // We use standard inline style or hex colors for GSAP to interpolate smoothly
        <div ref={containerRef} className="bg-[#070707] text-white transition-colors duration-300 h-dvh overflow-hidden">
            <HalftoneBg />
            <div ref={navRef}
                className="absolute top-6 w-full opacity-0 flex justify-center items-center">
                {/* White layer */}


                {/* Main layer */}
                <div
                    className={cn(
                        "flex justify-center items-center w-fit",
                        "px-8 bg-myblack z-10",
                        " outline-4 outline-black",
                    )}
                >
                    <img
                        src={mepLogo}
                        className="h-24 lg:h-[10rem]"
                        alt="MEP Logo"
                    />
                </div>
            </div>
            <section
                ref={triggerSectionRef}
                className="h-screen flex flex-col items-center justify-center border-t border-slate-700"
            >
                <div id="title"
                    className="w-full font-eternalo text-myblack text-8xl md:text-8xl text-center">
                    the gallery
                    <img src={Underline}
                        className="absolute left-1/2 -translate-x-1/5 w-[12rem] translate-y-2" />
                </div>

                <div className="bg-transparent rounded-2xl border-2 border-myblack md:h-[32rem] w-11/12 max-w-6xl mt-16" id="galleryContainer">
                </div>
            </section>

        </div >
    );
}
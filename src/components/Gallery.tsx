import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalftoneBg } from "./HalftoneBg";
import Underline from "../assets/images/text_underline.png"

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
                backgroundColor: "#ffffff",
                opacity: 1,
                scrollTrigger: {
                    trigger: triggerSection,
                    start: "top 40%",
                    end: "top 20%",
                    scrub: 0.8,
                    markers: false,
                },
            });
            gsap.to(triggerSection, {
                opacity: 1,
                scrollTrigger: {
                    trigger: triggerSection,
                    start: "top 30%",
                    end: "top 20%",
                    scrub: 0.8,
                    markers: false,
                },
            });
            gsap.to(nav, {
                opacity: 1, // GSAP uses 0 to 1 for opacity values
                scrollTrigger: {
                    trigger: triggerSection,
                    start: "top 40%",
                    end: "top 20%",
                    scrub: 0.8,
                },
            });
        });

        return () => ctx.revert(); // Clean up on unmount to prevent memory leaks
    }, []);

    return (
        // We use standard inline style or hex colors for GSAP to interpolate smoothly
        <div ref={containerRef} className="bg-[#070707] text-white transition-colors duration-300 h-dvh overflow-hidden ">
            <HalftoneBg />
            <section
                ref={triggerSectionRef}
                className="h-screen flex flex-col items-center justify-center opacity-0"
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
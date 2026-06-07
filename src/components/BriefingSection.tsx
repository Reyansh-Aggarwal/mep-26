import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalftoneBg } from "./HalftoneBg";
import mepLogo from "../assets/logos/mep_logo.png";
import { cn } from "../utils";
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export const BriefingSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerSectionRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const container = containerRef.current;
        const triggerSection = triggerSectionRef.current;
        if (!container || !triggerSection) return;

        // Create the GSAP tween
        const ctx = gsap.context(() => {
            gsap.to(triggerSection, {
                opacity: 1,
                scrollTrigger: {
                    trigger: triggerSection,
                    start: "top 20%",
                    end: "top 0%",
                    scrub: 0.8,
                    markers: false,
                },
            });

        });

        return () => ctx.revert(); // Clean up on unmount to prevent memory leaks
    }, []);

    return (
        // We use standard inline style or hex colors for GSAP to interpolate smoothly
        <div ref={containerRef} className="bg-white text-white transition-colors duration-300 h-dvh overflow-hidden">
            <HalftoneBg />
            <section
                ref={triggerSectionRef}
                className="h-screen flex flex-col items-center justify-around opacity-0"
            >
                <div id="mep"
                    className="items-center justify-center flex w-fit p-2">
                    <div
                        className={cn(
                            "flex justify-center items-center w-fit",
                            "px-8 md:px-24 bg-white z-10",
                            "outline-solid outline-4 outline-black",
                            "absolute mr-8 mt-8"
                        )}
                    >
                        <img
                            src={mepLogo}
                            className="h-56 lg:h-[22rem]"
                            alt="MEP Logo"
                        />
                    </div>
                    {/* Main Layer */}
                    <div
                        className={cn(
                            "flex justify-center items-center w-fit",
                            "px-8 md:px-24 bg-myblack z-10",
                            "outline-solid outline-4 outline-black",
                        )}
                    >
                        <img
                            src={mepLogo}
                            className="h-56 lg:h-[22rem]"
                            alt="MEP Logo"
                        />
                    </div>
                </div>

                <div id="title"
                    className="w-full font-eternalo text-myblack text-5xl md:text-8xl text-center">
                    what are we waiting for?

                </div>
                <div id="buttons"
                    className={cn(
                        "flex flex-col md:flex-row gap-12 ",
                        "md:justify-around w-full",
                        "text-3xl font-anime md:text-4xl")}>
                    <button id="register"
                        className="w-full">
                        <div
                            className="items-center justify-center flex w-full md:w-fit p-2">
                            <div
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8 md:p-12 bg-white z-10",
                                    "outline-solid outline-4 outline-black",
                                    "absolute mr-7 mt-7",

                                )}
                            >
                                REGISTER <br /> NOW!
                            </div>
                            {/* Main Layer */}
                            <div
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8  md:p-12 bg-myblack z-10",
                                    "outline-solid outline-4 outline-black",
                                    "md:text-left"
                                )}
                            >
                                REGISTER <br /> NOW!
                            </div>
                        </div>
                    </button>
                    <button id="brochure"
                        className="w-full">
                        <div
                            className="items-center justify-center flex w-full md:w-fit p-2">
                            <div
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8 md:p-12 bg-white z-10",
                                    "outline-solid outline-4 outline-black",
                                    "absolute mr-7 mt-7",

                                )}
                            >
                                VIEW <br /> BROCHURE
                            </div>
                            {/* Main Layer */}
                            <div
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8  md:p-12 bg-myblack z-10",
                                    "outline-solid outline-4 outline-black",
                                    "md:text-left"
                                )}
                            >
                                VIEW <br /> BROCHURE
                            </div>
                        </div>
                    </button>
                </div>

            </section>

        </div >
    );
}
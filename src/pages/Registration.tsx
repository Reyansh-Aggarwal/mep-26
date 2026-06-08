import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalftoneBg } from "../components/HalftoneBg";
import { FilloutStandardEmbed } from "@fillout/react";
import { cn } from "../utils";

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
                className={cn(
                    "w-full relative transition-colors duration-300 ease-in-out",
                    "min-h-dvh flex flex-col items-center gap-8")}
            >

                <HalftoneBg />
                <span className="text-white text-8xl font-eternalo text-center w-full ">
                    REGISTRATION
                </span>
                <div
                    className="w-4/5 h-dvh pb-12 z-50">
                    <FilloutStandardEmbed filloutId="397tsy8vJjus" />
                </div>
            </div>
        </div>
    );
};

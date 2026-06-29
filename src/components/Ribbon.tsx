import { useRef } from "react";
import { cn } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Ribbon = ({ content }: { content: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const ribbonRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ribbonRef.current || !containerRef.current) return;

        gsap.to(ribbonRef.current, {
            // Animate horizontally. Adjust the value based on how fast/far you want it to move.
            // Using a negative value moves it right-to-left, positive moves it left-to-right.
            x: "-30%",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom", // Starts animating as soon as the ribbon enters the bottom of the viewport
                end: "bottom top",   // Ends animating when the ribbon completely leaves the top
                scrub: 0.5,          // Links animation progress smoothly to scroll velocity
                refreshPriority: 1,
            }
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="w-full h-fit relative overflow-hidden pb-10 bg-black"
        >
            <div
                ref={ribbonRef}
                className={cn(
                    "border b px-4 py-4 text-transparent",
                    "text-6xl md:text-6xl lg:text-8xl",
                    "whitespace-nowrap will-change-transform inline-block w-max font-bold",
                    "text-white/10 [-webkit-text-stroke:2px_#ffffff10]"
                )}
            >
                {/* Duplicating text strings ensures it has enough length to overflow cleanly */}
                {content} — {content} — {content} — {content} — {content} — {content} —
            </div>
        </div>
    );
};
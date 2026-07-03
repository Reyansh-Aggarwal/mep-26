import { useRef } from "react";
import { cn } from "../utils.tsx";
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

        gsap.set(ribbonRef.current, {
            color: "#ffffff10",
        })

        gsap.to(ribbonRef.current, {
            color: "white",
            x: "-30%",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
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
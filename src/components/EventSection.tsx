import { useState, useRef, useEffect } from "react";
import { cn } from "../utils";
import matrixLogo from "../assets/logos/matrix_logo.png";
import ecommLogo from "../assets/logos/ecomm_logo.png";
import psynapseLogo from "../assets/logos/psynapse_logo.png";

import matrixShard1 from "../assets/images/matrix-shard1.png";
import matrixShard2 from "../assets/images/matrix-shard2.png";
import matrixShard3 from "../assets/images/matrix-shard3.png";
import matrixShard4 from "../assets/images/matrix-shard4.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Event {
    id: number,
    name: string,
    tagline: string,
    description: string
}
const matrixEvents: Event[] = [
    {
        id: 1,
        name: "A/V Sync",
        tagline: "May the frames be with you",
        description: ""
    },
    {
        id: 2,
        name: "Enigma",
        tagline: "The obvious is your greatest enemy.",
        description: ""
    },
    {
        id: 3,
        name: "Matrix Gauntlet",
        tagline: "Reflex. Strategy. Glory.",
        description: ""
    },
    {
        id: 4,
        name: "The Silverbot Circuit",
        tagline: "Build. Drive. Conquer.",
        description: ""
    }
];
const ecommEvents: Event[] = [
    {
        id: 1,
        name: "Bidding Bankers",
        tagline: "With Great Capital comes Great Responsibility.",
        description: ""
    },
    {
        id: 2,
        name: "Pivot",
        tagline: "Market the Unexpected.",
        description: ""
    },
    {
        id: 3,
        name: "AdSnap",
        tagline: "Frame the Product. Capture the Market.",
        description: ""
    },
    {
        id: 4,
        name: "Pitch Perfect",
        tagline: "Think Big. Pitch Bold. Create Impact.",
        description: ""
    }
];
const psynapseEvents: Event[] = [
    {
        id: 1,
        name: "Psycon",
        tagline: "Walk a Mile in a Psychologist's Mind.",
        description: ""
    },
    {
        id: 2,
        name: "Psyposium",
        tagline: "The Mind in Conflict.",
        description: ""
    },
    {
        id: 3,
        name: "Psynapse",
        tagline: "When Voices Become Change.",
        description: ""
    },
    {
        id: 4,
        name: "Chroma Psychis",
        tagline: "If Words Could Paint the Color of the Soul.",
        description: ""
    }
];

const clubConfig = {
    matrix: {
        color: "var(--color-matrix)",
        textClass: "text-matrix",
        bgClass: "bg-matrix",
        shadowColor: "#1e2b4d",
        glowShadow: "0 0 12px #0000ff60",
        borderHover: "hover:border-matrix/50",
        numColor: "text-matrix/10",
        gradientFrom: "from-matrix/10",
    },
    ecomm: {
        color: "var(--color-ecomm)",
        textClass: "text-ecomm",
        bgClass: "bg-ecomm",
        shadowColor: "#0a3c18",
        glowShadow: "0 0 12px #00ff0060",
        borderHover: "hover:border-ecomm/50",
        numColor: "text-ecomm/10",
        gradientFrom: "from-ecomm/10",
    },
    psynapse: {
        color: "var(--color-psynapse)",
        textClass: "text-psynapse",
        bgClass: "bg-psynapse",
        shadowColor: "#4a0b30",
        glowShadow: "0 0 12px #ff000060",
        borderHover: "hover:border-psynapse/50",
        numColor: "text-psynapse/10",
        gradientFrom: "from-psynapse/10",
    },
} as const;

export const EventSection = () => {
    const [club, setClub] = useState<"matrix" | "ecomm" | "psynapse">("matrix");
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const events = club == "matrix" ? matrixEvents :
        club == "ecomm" ? ecommEvents :
            psynapseEvents;

    const config = clubConfig[club];

    // GSAP scroll-reveal for event cards (desktop only)
    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.95,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                        delay: i * 0.08,
                    }
                );
            });
        });

        return () => mm.revert();
    }, [club]);

    return (
        <div
            id="eventSection"
            ref={sectionRef}
            className={cn(
                "min-h-dvh w-full overflow-hidden relative",
                "text-center items-center justify-start",
                "flex flex-col bg-black py-24 gap-12 select-none"
            )}
        >
            {/* Ambient backdrop glow layers */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none top-1/4 left-0 transition-colors duration-700"
                style={{ backgroundColor: `color-mix(in srgb, ${config.color} 8%, transparent)` }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none bottom-1/4 right-0 transition-colors duration-700"
                style={{ backgroundColor: `color-mix(in srgb, ${config.color} 6%, transparent)` }}
            />

            {/* Section Header */}
            <div className="text-center relative z-10 px-4 select-none">
                <h2 className="font-primary text-7xl md:text-9xl text-offwhite tracking-wider uppercase text-shadow-[0_0_8px_#ffffff50]">
                    EVENTS
                </h2>
                <p className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mt-3">
                    THE WINNERS TAKE IT ALL
                </p>
            </div>

            {/* Logo Carousel Header */}
            <div id="header"
                className={cn(
                    "font-primary text-9xl lg:text-[11rem] text-offwhite",
                    "transform-3d w-full ",
                    "h-64 md:h-96 flex flex-row justify-center gap-12 items-center relative")}>
                <img src={matrixLogo}
                    className={cn(
                        "transition-all duration-300 ease-out absolute  opacity-30 h-16",
                        club == "matrix" ? "h-32 lg:h-48 opacity-100" : club == "ecomm" ? "-translate-x-[23dvw] -translate-z-8" : "-translate-x-[46dvw] opacity-0"
                    )} />
                <img src={ecommLogo}
                    className={cn(
                        "transition-all duration-300 ease-out absolute opacity-30 h-16",
                        club == "matrix" ? "translate-x-[23dvw] -translate-z-8" : club == "psynapse" ? "-translate-x-[23dvw] -translate-z-8 " : "h-32 lg:h-48 opacity-100"
                    )} />
                <img src={psynapseLogo}
                    className={cn("transition-all duration-300 ease-out absolute opacity-30 h-16",
                        club == "matrix" ? "translate-x-[46dvw] -translate-z-8 opacity-0" : club == "ecomm" ? "translate-x-[23dvw] -translate-z-8 " : "h-32 lg:h-48 opacity-100")} />

                <div className="">
                    <img src={matrixShard1}
                        className="h-16 lg:h-24 absolute top-[-4px] lg:top-[-26px] right-1/2 translate-x-[200%] animate-shard-float" />
                    <img src={matrixShard2}
                        className="h-16 lg:h-24 absolute bottom-0 right-1/2 lg:bottom-[-35px] translate-x-[-100%] animate-shard-float-1" />

                    <img src={matrixShard3}
                        className="h-16 lg:h-24 absolute bottom-0 left-1/2 lg:bottom-[-30px] translate-x-[90%] animate-shard-float-2" />

                    <img src={matrixShard4}
                        className="h-16 lg:h-24 absolute top-2 lg:top-[-40px] right-1/2 translate-x-[-100%] animate-shard-float-3" />

                </div>
            </div>

            {/* Club Selector Buttons */}
            <div id="buttons"
                className="flex flex-row w-full justify-center items-center gap-4 relative z-10">
                {(["matrix", "ecomm", "psynapse"] as const).map((c) => (
                    <button key={c}
                        onClick={() => setClub(c)}
                        className={cn(
                            "px-6 md:px-10 py-2.5 text-center",
                            `bg-${c} text-black`,
                            "transition-all duration-100 ease-in",
                            "font-secondary font-bold tracking-wider uppercase",
                            club === c
                                ? "translate-y-[4px] shadow-none"
                                : `shadow-[0_4px_0_${clubConfig[c].shadowColor}]`
                        )}>
                        {c === "psynapse" ? "PSYNAPSE" : c.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Events Grid */}
            <div id="content"
                className="w-full px-4 md:px-12 lg:px-20 relative z-10">

                <div id="events"
                    className="flex flex-col gap-6 w-full max-w-6xl mx-auto">

                    {/* Event Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                        {events.map((event, index) => (
                            <div key={`${club}-${event.id}`}
                                ref={(el) => { cardsRef.current[index] = el; }}
                                className={cn(
                                    "group relative overflow-hidden rounded-2xl",
                                    "border border-white/10 bg-white/[0.03]",
                                    "backdrop-blur-sm",
                                    "transition-all duration-300",
                                    "hover:border-white/20 hover:bg-white/[0.06]",
                                    "hover:scale-[1.02]",
                                    "p-6 md:p-8",
                                    "flex flex-col justify-between",
                                    "min-h-[180px] md:min-h-[220px]",
                                    "cursor-pointer"
                                )}
                                onClick={() => setSelectedEvent(event)}>

                                {/* Large faded number behind */}
                                <span className={cn(
                                    "absolute -top-4 -right-2 font-primary text-[8rem] md:text-[10rem] leading-none select-none pointer-events-none transition-colors duration-500",
                                    config.numColor
                                )}>
                                    {String(event.id).padStart(2, "0")}
                                </span>

                                {/* Glow line at the top */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(90deg, transparent, ${config.color}, transparent)` }}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col gap-2">
                                    <span
                                        className={cn(
                                            "font-primary text-5xl md:text-6xl lg:text-7xl tracking-wide transition-all duration-300",
                                            config.textClass
                                        )}
                                        style={{ textShadow: config.glowShadow }}>
                                        {event.name}
                                    </span>
                                    <span
                                        className="font-secondary text-sm md:text-base text-offwhite/70 tracking-widest uppercase">
                                        {event.tagline}
                                    </span>
                                </div>

                                {/* Subtle arrow indicator */}
                                <div className="relative z-10 flex justify-end mt-4">
                                    <span className="text-offwhite/20 group-hover:text-offwhite/60 transition-all duration-300 group-hover:translate-x-1 text-2xl font-secondary">
                                        →
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quiz Section */}
                    <div className="mt-4">
                        <div
                            className={cn(
                                "relative overflow-hidden rounded-2xl",
                                "border border-white/10 bg-white/[0.03]",
                                "backdrop-blur-sm",
                                "transition-all duration-300",
                                "hover:border-quiz/30"
                            )}>

                            {/* Quiz glow line at top */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-quiz to-transparent opacity-60" />

                            <div className="flex flex-col md:flex-row">
                                {/* Left: Quiz Info */}
                                <div className="flex flex-col text-left p-6 md:p-8 md:basis-1/2">
                                    <span className="font-primary text-6xl md:text-7xl text-quiz leading-none"
                                        style={{ textShadow: "0 0 16px #990bff50" }}>
                                        QUIZ
                                    </span>
                                    <span className="font-secondary text-sm text-offwhite/70 tracking-widest uppercase mt-2">
                                        Think Fast. Answer Faster.
                                    </span>
                                </div>

                                {/* Right: Details */}
                                <div className="flex flex-row justify-around items-center md:basis-1/2 p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/10">
                                    <p className="font-secondary text-offwhite/80 leading-relaxed text-sm md:text-base text-center md:text-left">
                                        Test your knowledge, think on your feet, and outsmart the competition in this high-stakes trivia challenge across various domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-white/[0.03] border border-white/20 rounded-3xl p-8 md:p-12 overflow-y-auto max-h-[85vh] shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-2xl outline-none"
                            onClick={() => setSelectedEvent(null)}
                        >
                            ✕
                        </button>

                        <div className="flex flex-col gap-4 mt-4">
                            <span
                                className={cn(
                                    "font-primary text-5xl md:text-7xl tracking-wide",
                                    config.textClass
                                )}
                                style={{ textShadow: config.glowShadow }}
                            >
                                {selectedEvent.name}
                            </span>
                            <span className="font-secondary text-lg md:text-xl text-yellow tracking-widest uppercase">
                                {selectedEvent.tagline}
                            </span>
                            <div className="h-[1px] w-full bg-white/10 my-4" />
                            <p className="font-secondary text-offwhite/80 leading-relaxed text-lg md:text-xl">
                                {selectedEvent.description || "Description coming soon."}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
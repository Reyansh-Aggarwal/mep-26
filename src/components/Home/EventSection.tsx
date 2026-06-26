import { useState, useRef, useEffect } from "react";
import { cn, useInView } from "../../utils";
import matrixLogo from "../../assets/logos/matrix_logo.png";
import ecommLogo from "../../assets/logos/ecomm_logo.png";
import psynapseLogo from "../../assets/logos/psynapse_logo.png";
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
        description: "An offline filmmaking competition for teams of five to produce a minimum three-minute video based on a randomly assigned aesthetic, incorporating a mandatory mid-event surprise element."
    },
    {
        id: 2,
        name: "Enigma",
        tagline: "The obvious is your greatest enemy.",
        description: "An offline multi-format puzzle hunt featuring cryptic riddles, cyphers, and physical on-ground clues where teams of three compete to solve the maximum number of tasks within the time limit."
    },
    {
        id: 3,
        name: "Matrix Gauntlet",
        tagline: "Reflex. Strategy. Glory.",
        description: "A hybrid gaming competition where teams of two demonstrate versatility and strategy across multiple genres, including Minecraft Bingo and Clash Royale, culminating in a surprise console game finale."
    },
    {
        id: 4,
        name: "The Silverbot Circuit",
        tagline: "Build. Drive. Conquer.",
        description: "A robotics competition challenging teams to design and build a fully autonomous line-following robot to navigate a complex track with obstacles and turns for the fastest time"
    }
];
const ecommEvents: Event[] = [
    {
        id: 1,
        name: "Bidding Bankers",
        tagline: "With Great Capital comes Great Responsibility.",
        description: "An offline financial strategy event where teams of two compete in property bidding, trading, and investing rounds while managing market news, banker loans, and portfolio-maximizing objectives."
    },
    {
        id: 2,
        name: "Pivot",
        tagline: "Market the Unexpected.",
        description: "A two-round marketing challenge where teams of three build creative campaigns for contrasting target audiences, followed by an individual crisis-management round to tackle sudden PR or budget disasters."
    },
    {
        id: 3,
        name: "AdSnap",
        tagline: "Frame the Product. Capture the Market.",
        description: "An offline advertising event where teams create a stop-motion video and an accompanying promotional poster using a provided prop, utilizing DSLR/mirrorless cameras to capture the marketing vision."
    },
    {
        id: 4,
        name: "Pitch Perfect",
        tagline: "Think Big. Pitch Bold. Create Impact.",
        description: "An entrepreneurial challenge where teams present a three-minute innovative business pitch complete with a mandatory visual deck, followed by a mysterious and highly competitive surprise second round."
    }
];
const psynapseEvents: Event[] = [
    {
        id: 1,
        name: "Psycon",
        tagline: "Walk a Mile in a Psychologist's Mind.",
        description: "An individual, Comic-Con style monologue challenge where participants dress as famous psychologists and solve a live case study strictly from their assigned figure's theoretical perspective and background."
    },
    {
        id: 2,
        name: "Psyposium",
        tagline: "The Mind in Conflict.",
        description: "A psychology-themed debate event where three-member teams portray the internal conflict of Freud's personality theory—Id, Ego, and Superego—to argue complex, morally grey dilemmas and scenarios."
    },
    {
        id: 3,
        name: "Psynapse",
        tagline: "When Voices Become Change.",
        description: "A bilingual street play competition where teams of 7–10 members perform dramatic pieces addressing critical mental health issues, social stereotypes, and contemporary psychological challenges within seven minutes."
    },
    {
        id: 4,
        name: "Chroma Psychis",
        tagline: "If Words Could Paint the Color of the Soul.",
        description: "A conceptual art and presentation competition where teams of two create an original artwork depicting a specific phobia while strictly adhering to rigorous, randomized design criteria."
    }
];

const clubConfig = {
    matrix: {
        color: "var(--color-matrix)",
        textClass: "text-matrix",
        bgClass: "bg-matrix/30",
        hoverClass: "hover:bg-matrix",
        shadowClass: "shadow-[0_4px_0_#1e2b4d]",
        glowShadow: "0 0 12px #0000ff60",
        borderHover: "hover:border-matrix/50",
        numColor: "text-matrix/10",
        gradientFrom: "from-matrix/10",
        royalBgClass: "bg-royal-blue"
    },
    ecomm: {
        color: "var(--color-ecomm)",
        textClass: "text-ecomm",
        bgClass: "bg-ecomm/30",
        hoverClass: "hover:bg-ecomm",
        shadowClass: "shadow-[0_4px_0_#0a3c18]",
        glowShadow: "0 0 12px #00ff0060",
        borderHover: "hover:border-ecomm/50",
        numColor: "text-ecomm/10",
        gradientFrom: "from-ecomm/10",
        royalBgClass: "bg-royal-green"
    },
    psynapse: {
        color: "var(--color-psynapse)",
        textClass: "text-psynapse",
        bgClass: "bg-psynapse/30",
        hoverClass: "hover:bg-psynapse",
        shadowClass: "shadow-[0_4px_0_#4a0b30]",
        glowShadow: "0 0 12px #ff000060",
        borderHover: "hover:border-psynapse/50",
        numColor: "text-psynapse/10",
        gradientFrom: "from-psynapse/10",
        royalBgClass: "bg-royal-pink"
    },
} as const;

export const EventSection = () => {
    const [club, setClub] = useState<"matrix" | "ecomm" | "psynapse">("matrix");
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const { ref, isVisible } = useInView({ threshold: 0.01 });
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const events = club == "matrix" ? matrixEvents :
        club == "ecomm" ? ecommEvents :
            psynapseEvents;

    const config = clubConfig[club];

    useEffect(() => {
        if (isVisible) {
            gsap.fromTo("#header", {
                opacity: 0,
                y: 200
            }, {
                opacity: 1,
                y: 0,
                duration: 3,
                ease: "power3.out"
            });

        }
    }, [isVisible]);

    return (
        <div
            id="eventSection"
            ref={ref}
            className={cn(
                "min-h-dvh w-full overflow-hidden relative",
                "text-center items-center justify-start",
                "flex flex-col py-24 gap-12 select-none",
            )}
        >

            <div
                className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none top-1/4 left-0 transition-colors duration-700"
                style={{ backgroundColor: `color-mix(in srgb, ${config.color} 8%, transparent)` }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none bottom-1/4 right-0 transition-colors duration-700"
                style={{ backgroundColor: `color-mix(in srgb, ${config.color} 6%, transparent)` }}
            />

            {/* Logo Carousel Header */}
            <div id="header"
                className={cn(
                    "font-primary text-9xl lg:text-[11rem] text-offwhite",
                    "transform-3d w-full",
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

            </div>

            {/* Club Selector Buttons */}
            <div id="buttons"
                className={cn(
                    "flex flex-row w-full justify-center items-center gap-4 relative z-10",)}>
                {(["matrix", "ecomm", "psynapse"] as const).map((c) => (
                    <div key={c} id="button"
                        onClick={() => setClub(c)}
                        className={cn(
                            "px-6 md:px-10 py-2.5 text-center",
                            ` text-white/40  bg-blue-100/20 backdrop-blur-md`,
                            ` border border-white/20 rounded-full`,
                            "font-secondary font-bold tracking-wider uppercase",
                            `hover:${config.bgClass}`,
                            club === c
                                ? `translate-y-[4px] shadow-none bg-${c} text-offwhite`
                                : `shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]`,
                        )}>
                        {c}
                    </div>
                ))}
            </div>

            {/* Events Grid */}
            <div id="content"
                className="w-full px-4 md:px-12 lg:px-20 relative z-10">

                <div id="events"
                    className="flex flex-col gap-6 w-full max-w-6xl mx-auto">

                    {/* Event Cards (Mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 ">
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
                                            "font-primary text-4xl md:text-5xl lg:text-4xl w-full transition-all duration-300",
                                            config.textClass
                                        )}
                                        style={{ textShadow: config.glowShadow }}>
                                        {event.name}
                                    </span>
                                    <span
                                        className="font-secondary text-sm md:text-base text-offwhite/70 tracking-widest uppercase">
                                        {event.tagline}
                                    </span>
                                    <span
                                        className="font-secondary text-sm md:text-base text-offwhite/70 tracking-widest hidden">
                                        {event.description}
                                    </span>
                                </div>

                                {/* Subtle arrow indicator */}
                                <div className="relative z-10 justify-end mt-4 flex">
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
                                        A comprehensive, multi-round trivia competition starting with a pen-and-paper preliminary round, leading to an intense final round covering diverse topics from pop culture to science and current affairs.
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
                    className="fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-white/[0.03] border border-white/20 rounded-3xl p-8 md:p-12 overflow-y-auto max-h-[85vh] shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <div
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-2xl outline-none"
                            onClick={() => setSelectedEvent(null)}
                        >
                            ✕
                        </div>

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
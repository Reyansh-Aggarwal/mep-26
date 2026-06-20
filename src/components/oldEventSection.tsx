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
export const oldEventSection = () => {
    const [club, setClub] = useState("matrix");
    const mepContainerRef = useRef<HTMLDivElement>(null);

    const events = club == "matrix" ? matrixEvents :
        club == "ecomm" ? ecommEvents :
            psynapseEvents;


    return (
        <div
            className={cn(
                "min-h-dvh w-full overflow-hidden",
                "text-center items-center justify-around",
                "flex flex-col bg-black pt-12 gap-8"
            )}
        >
            <div id="header"
                className={cn(
                    "font-primary text-9xl lg:text-[11rem] text-offwhite",
                    "transform-3d w-full ",
                    "h-64 md:h-96 flex flex-row justify-center gap-12 items-center")}>
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
            <div id="buttons"
                className="flex flex-row w-full justify-center items-center md:items-left gap-4 ">
                <button id="matrix"
                    onClick={() => setClub("matrix")}
                    className={cn(
                        "px-4 md:px-8 py-2 text-center",
                        "bg-matrix text-black",
                        "transition-color duration-50 ease-in",
                        "font-secondary font-bold",
                        club == "matrix" ? "translate-y-[4px]" : "shadow-[0_4px_0_#1e2b4d]"
                    )}>
                    MATRIX
                </button>
                <button id="ecomm"
                    onClick={() => setClub("ecomm")}
                    className={cn(
                        "px-4 md:px-8 py-2 text-center",
                        "bg-ecomm text-black",
                        "transition-color duration-50 ease-in",
                        "font-secondary font-bold",
                        club == "ecomm" ? "translate-y-[4px]" : "shadow-[0_4px_0_#0a3c18]"
                    )}>
                    ECOMM
                </button>
                <button id="psynapse"
                    onClick={() => setClub("psynapse")}
                    className={cn(
                        "px-4 md:px-8 py-2 text-center",
                        "bg-psynapse text-black",
                        "transition-color duration-50 ease-in",
                        "font-secondary font-bold",
                        club == "psynapse" ? "translate-y-[4px]" : "shadow-[0_4px_0_#4a0b30]"
                    )}>
                    PSYNAPSE
                </button>
            </div>
            <div id="content"
                className="w-full h-full px-4 md:px-12 flex flex-col">

                <div id="events"
                    className="flex flex-col gap-4 w-full justify-between h-full">
                    <div id="mepContainer"
                        ref={mepContainerRef}
                        className="flex flex-col gap-6 md:gap-4">
                        {events.map((event) => (
                            <div key={event.id}
                                className={cn(
                                    "flex-col flex w-full items-center",
                                    event.id % 2 == 0 ? "md:items-end" : "md:items-start"
                                )}>
                                <span
                                    className={cn(
                                        "font-primary text-7xl text-left tracking-wide",
                                        club == "matrix" ? "text-matrix text-shadow-[0_0_12px_#0000ff60]" :
                                            club == "ecomm" ? "text-shadow-[0_0_12px_#00ff0060] text-ecomm" :
                                                "text-psynapse text-shadow-[0_0_12px_#ff000060]"
                                    )}>
                                    {event.name}
                                </span>
                                <span
                                    className="font-secondary text-sm text-offwhite tracking-wide text-left uppercase">
                                    {event.tagline}
                                </span>
                                <span>
                                    {event.description}
                                </span>
                            </div>

                        ))}
                    </div>
                    <div id="quizContainer"
                        className="w-full h-full lg:basis-1/3">
                        <div
                            className={cn(
                                "flex flex-col w-full h-1/2 ",
                                "outline outline-quiz bg-quiz"
                            )}>

                            <div id="heading"
                                className={cn(
                                    "flex flex-col text-left bg-black px-2 py-1 md:py-2",
                                    "text-quiz")}>
                                <span className="font-primary text-5xl -mb-2">
                                    QUIZ
                                </span>
                                <span className="text-sm">
                                    Think Fast. Answer Faster.
                                </span>
                            </div>
                            <div id="details"
                                className="flex flex-row px-2 md:py-1 justify-around md:justify-center items-center align-center h-full">
                                <div className={cn(
                                    "flex flex-row items-center justify-center gap-2",
                                    "basis-1/2 border-r border-black")}>
                                    <span className="font-secondary">
                                        classes
                                    </span>
                                    <span className="font-primary text-5xl">
                                        9-12
                                    </span>
                                </div>

                                <div className="flex flex-row items-center justify-center gap-2 basis-1/2">
                                    <span className="font-primary text-5xl">
                                        3
                                    </span>
                                    <span className="font-secondary">
                                        participants
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
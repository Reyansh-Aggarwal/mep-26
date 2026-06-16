import { useState, useRef } from "react";
import { cn } from "../utils";
interface Event {
    id: number,
    name: string,
    tagline: string,
    participants: string,
    classes: string
}
const matrixEvents: Event[] = [
    {
        id: 1,
        name: "A/V Sync",
        tagline: "May the frames be with you",
        participants: "5",
        classes: "9-12"
    },
    {
        id: 2,
        name: "Enigma",
        tagline: "The obvious is your greatest enemy.",
        participants: "3",
        classes: "9-12"
    },
    {
        id: 3,
        name: "Matrix Gauntlet",
        tagline: "Reflex. Strategy. Glory.",
        participants: "2",
        classes: "9-12"
    },
    {
        id: 4,
        name: "The Silverbot Circuit",
        tagline: "Build. Drive. Conquer.",
        participants: "2-4",
        classes: "9-12"
    }
];
const ecommEvents: Event[] = [
    {
        id: 1,
        name: "Bidding Bankers",
        tagline: "With Great Capital comes Great Responsibility.",
        participants: "2",
        classes: "9-12"
    },
    {
        id: 2,
        name: "Pivot",
        tagline: "Market the Unexpected.",
        participants: "3",
        classes: "11-12"
    },
    {
        id: 3,
        name: "AdSnap",
        tagline: "Frame the Product. Capture the Market.",
        participants: "2-3",
        classes: "9-12"
    },
    {
        id: 4,
        name: "Pitch Perfect",
        tagline: "Think Big. Pitch Bold. Create Impact.",
        participants: "2",
        classes: "9-12"
    }
];
const psynapseEvents: Event[] = [
    {
        id: 1,
        name: "Psycon",
        tagline: "Walk a Mile in a Psychologist's Mind.",
        participants: "1",
        classes: "11-12"
    },
    {
        id: 2,
        name: "Psyposium",
        tagline: "The Mind in Conflict.",
        participants: "3",
        classes: "11-12"
    },
    {
        id: 3,
        name: "Psynapse",
        tagline: "When Voices Become Change.",
        participants: "7-10",
        classes: "9-12"
    },
    {
        id: 4,
        name: "Chroma Psychis",
        tagline: "If Words Could Paint the Color of the Soul.",
        participants: "2",
        classes: "11-12"
    }
];
export const EventSection = () => {
    const [club, setClub] = useState("matrix");
    const mepContainerRef = useRef<HTMLDivElement>(null);

    const events = club == "matrix" ? matrixEvents :
        club == "ecomm" ? ecommEvents :
            psynapseEvents;


    return (
        <div
            className={cn(
                "h-fit w-full overflow-hidden",
                "text-center items-center justify-between",
                "flex flex-col my-12"
            )}
        >
            <div id="header"
                className="font-primary text-9xl lg:text-[11rem] text-offwhite">
                <span className={cn(
                    "transition-color duration-100 ease-in",
                    club == "matrix" ? "text-matrix" : "")}>M</span>
                <span className={cn(
                    "transition-color duration-100 ease-in",
                    club == "ecomm" ? "text-ecomm" : "")}>E</span>
                <span className={cn(
                    "transition-color duration-100 ease-in",
                    club == "psynapse" ? "text-psynapse" : "")}>P</span>
                '26
            </div>

            <div id="content"
                className="w-full h-full px-4 md:px-12 flex flex-col gap-4">
                <div id="buttons"
                    className="flex flex-row w-full items-center md:items-left gap-4">
                    <button id="matrix"
                        onClick={() => setClub("matrix")}
                        className={cn(
                            "px-8 py-2 text-center",
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
                            "px-8 py-2 text-center",
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
                            "px-8 py-2 text-center",
                            "bg-psynapse text-black",
                            "transition-color duration-50 ease-in",
                            "font-secondary font-bold",
                            club == "psynapse" ? "translate-y-[4px]" : "shadow-[0_4px_0_#4a0b30]"
                        )}>
                        PSYNAPSE
                    </button>
                </div>
                <div id="events"
                    className="flex flex-col lg:flex-row gap-4 w-full justify-between h-full">
                    <div id="mepContainer"
                        ref={mepContainerRef}
                        className="flex flex-col md:grid md:grid-cols-2 gap-2 lg:basis-2/3">
                        {events.map((event) => (
                            <div key={event.id}
                                className={cn(
                                    "flex flex-col w-full",
                                    "outline",
                                    "transition-all duration-50 ease-in",
                                    club == "matrix" ? "bg-matrix outline-matrix" :
                                        club == "ecomm" ? "bg-ecomm outline-ecomm" :
                                            club == "psynapse" ? "bg-psynapse outline-psynapse" : ""
                                )}>

                                <div id="heading"
                                    className={cn(
                                        "flex flex-col text-left bg-black px-2 py-1 md:py-2",
                                        "transition-all duration-50 ease-in",
                                        club == "matrix" ? "text-matrix" :
                                            club == "ecomm" ? "text-ecomm" :
                                                club == "psynapse" ? "text-psynapse" : "")}>
                                    <span className={cn(
                                        "font-primary text-5xl -mb-2",
                                        "transition-all duration-50 ease-in")}>
                                        {event.name}
                                    </span>
                                    <span className="text-sm">
                                        {event.tagline}
                                    </span>
                                </div>
                                <div id="details"
                                    className="flex flex-row px-2 md:py-1 justify-around md:justify-center items-center align-center h-full">
                                    <div className={cn(
                                        "flex flex-row items-center gap-2",
                                        "border-r border-black basis-1/2",
                                        "justify-center"
                                    )}>
                                        <span className="font-secondary">
                                            classes
                                        </span>
                                        <span className="font-primary text-5xl">
                                            {event.classes}
                                        </span>
                                    </div>

                                    <div className="flex flex-row items-center justify-center gap-2 basis-1/2">
                                        <span className="font-primary text-5xl">
                                            {event.participants}
                                        </span>
                                        <span className="font-secondary">
                                            participants
                                        </span>
                                    </div>
                                </div>

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
                                    xx
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
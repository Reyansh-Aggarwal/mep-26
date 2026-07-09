import { useRef, useEffect, type CSSProperties } from "react";
import { cn, useInView } from "../../utils.tsx";
import { matrixLogo, ecommLogo, psynapseLogo } from "../../data/clubs.ts";
import matrixShard from "../../assets/images/matrix-shard.png";
import ecommShard from "../../assets/images/ecomm-shard.png";
import psynapseShard from "../../assets/images/psynapse-shard.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Button } from "../Button.tsx";
import { navTo } from "../Navbar.tsx";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface Event {
    id: number,
    name: string,
    tagline: string,
    description: string,
    page: number
}
const matrixEvents: Event[] = [
    {
        id: 1,
        name: "A/V Sync",
        tagline: "May the Frames Be With You.",
        description: "An offline filmmaking competition for teams of five to produce a minimum three-minute video based on a randomly assigned aesthetic, incorporating a mandatory mid-event surprise element.",
        page: 7
    },
    {
        id: 2,
        name: "Enigma",
        tagline: "The obvious is your greatest enemy.",
        description: "An offline multi-format puzzle hunt featuring cryptic riddles, cyphers, and physical on-ground clues where teams compete to solve the maximum number of tasks within the time limit.",
        page: 11
    },
    {
        id: 3,
        name: "Matrix Gauntlet",
        tagline: "paused my game to be here",
        description: "A hybrid gaming competition where teams of two demonstrate versatility, strategy, and quick reflexes across multiple genres, ranging from FPS shooters to highly competitive mobile games.",
        page: 9
    },
    {
        id: 4,
        name: "Goaltech",
        tagline: "Engineer your own goal",
        description: "A 1v1 Robo Soccer competition for classes 9–12. Teams of two design and pilot wired or Bluetooth-controlled robots to dribble and score goals in a thrilling 5-minute match.",
        page: 13
    }
];
const ecommEvents: Event[] = [
    {
        id: 1,
        name: "Bidding Bankers",
        tagline: "With Great Capital comes Great Responsibility.",
        description: "An offline mock stock event where teams of 2 compete in bidding, trading, and investing while managing market news, a banker system, networking all to maximise their portfolio.",
        page: 15
    },
    {
        id: 2,
        name: "Pivot",
        tagline: "Market the Unexpected.",
        description: "A two-round marketing challenge where teams of three build creative campaigns for contrasting target audiences, followed by an impromptu crisis-management round.",
        page: 17

    },
    {
        id: 3,
        name: "AdSnap",
        tagline: "Frame the Product. Capture the Market.",
        description: "An offline advertising event where teams create a stop-motion video and an accompanying promotional poster using a provided prop, utilizing DSLR/mirrorless cameras to capture the marketing vision.",
        page: 19
    },
    {
        id: 4,
        name: "Money Talks",
        tagline: "Roundtable: Economics Beyond Numbers.",
        description: "Master the art of high-stakes economic strategy. Analyze complex global industry challenges on the spot, deliver powerful impromptu solutions, and outwit rival stakeholders in an intense, fast-paced roundtable discussion.",
        page: 21
    }
];
const psynapseEvents: Event[] = [
    {
        id: 1,
        name: "Psycon",
        tagline: "Walk a Mile in a Psychologist's Mind.",
        description: "An individual, Comic-Con style monologue challenge where participants dress as famous psychologists and solve a live case study strictly from their assigned figure's theoretical perspective and background.",
        page: 25
    },
    {
        id: 2,
        name: "Psyposium",
        tagline: "The Mind in Conflict.",
        description: "A psychology-themed debate event where three-member teams portray the internal conflict of Freud's personality theory—Id, Ego, and Superego—to argue complex, morally grey dilemmas and scenarios.",
        page: 29
    },
    {
        id: 3,
        name: "Psynapse",
        tagline: "When Voices Become Change.",
        description: "A bilingual street play competition where teams of 7–10 members perform dramatic pieces addressing critical mental health issues, social stereotypes, and contemporary psychological challenges within seven minutes.",
        page: 23
    },
    {
        id: 4,
        name: "Chroma Psychis",
        tagline: "If Words Could Paint the Color of the Soul.",
        description: "A conceptual art and presentation competition where teams of two create an original artwork depicting a specific phobia while strictly adhering to rigorous, randomized design criteria.",
        page: 27
    }
];

const quizEvent: Event[] = [
    {
        id: 1,
        name: "Quizzardry",
        tagline: "the thinker",
        description: "An exhilarating inter-school quiz for classes 9-12 testing knowledge across general topics. Teams of three battle through pen-and-paper preliminaries to reach high-stakes, action-packed buzzer finals.",
        page: 31
    }
];

const clubConfig = {
    matrix: {
        color: "var(--color-matrix)",
        textClass: "text-matrix",
        stageTint: "rgb(21, 28, 46)",
        blobColor: "rgba(81, 126, 255, 0.08)",
        glowShadow: "0 0 12px #0000ff60",
        numColor: "text-matrix/10",
    },
    ecomm: {
        color: "var(--color-ecomm)",
        textClass: "text-ecomm",
        stageTint: "rgb(11, 37, 21)",
        blobColor: "rgba(0, 197, 42, 0.08)",
        glowShadow: "0 0 12px #00ff0060",
        numColor: "text-ecomm/10",
    },
    psynapse: {
        color: "var(--color-psynapse)",
        textClass: "text-psynapse",
        stageTint: "rgb(42, 13, 33)",
        blobColor: "rgba(255, 0, 140, 0.08)",
        glowShadow: "0 0 12px #ff000060",
        numColor: "text-psynapse/10",
    },
    quiz: {
        color: "var(--color-quiz)",
        textClass: "text-quiz",
        stageTint: "rgb(21, 28, 46)",
        blobColor: "rgba(81, 126, 255, 0.08)",
        glowShadow: "0 0 12px #0000ff60",
        numColor: "text-matrix/10",
    }
} as const;

const matrixShards = [matrixShard];
const ecommShards = [ecommShard];
const psynapseShards = [psynapseShard];

const acts = [
    { key: "matrix", config: clubConfig.matrix, logo: matrixLogo, events: matrixEvents, shards: matrixShards },
    { key: "ecomm", config: clubConfig.ecomm, logo: ecommLogo, events: ecommEvents, shards: ecommShards },
    { key: "psynapse", config: clubConfig.psynapse, logo: psynapseLogo, events: psynapseEvents, shards: psynapseShards },
    { key: "quiz", config: clubConfig.quiz, logo: undefined, events: quizEvent, shards: psynapseShards },
] as const;

// Flatten into a single ordered list of event "beats" across all three acts.
const flatEvents = acts.flatMap((act, ai) =>
    act.events.map((event, ei) => ({ event, config: act.config, ai, ei, shard: act.shards[ei] }))
);

// Club-tinted glow for the traveler — only the active club's img is visible,
// so the tint transition rides the opacity cross-fade at each act boundary.
const shardGlowStyle: Record<(typeof acts)[number]["key"], CSSProperties> = {
    matrix: { filter: "drop-shadow(0 0 14px rgba(81,126,255,.55)) drop-shadow(0 0 30px rgba(81,126,255,.3))" },
    ecomm: { filter: "drop-shadow(0 0 14px rgba(0,197,42,.55)) drop-shadow(0 0 30px rgba(0,197,42,.3))" },
    psynapse: { filter: "drop-shadow(0 0 14px rgba(255,0,140,.55)) drop-shadow(0 0 30px rgba(255,0,140,.3))" },
    quiz: { filter: "drop-shadow(0 0 14px rgba(81,126,255,.55)) drop-shadow(0 0 30px rgba(81,126,255,.3))" },
};

// Traveler slot per beat: shard hugs the half opposite the text (isLeft = text left).
// 75%/25% = center of the empty half (the half opposite the text, which spans 50%-100% or 0%-50%).
const slotLeft = (i: number) => (i % 2 === 0 ? "75%" : "25%");
const slotTop = (i: number) => (i % 2 === 0 ? "42%" : "58%");
// 2D spin, decoupled from the left/right turns: a triangular ramp keyed by waypoint
// index only, so it never reacts to a direction change. Peaks at the middle waypoint,
// unwinds back to 0 by the last one.
const SPIN_PER_BEAT = 30;
const spinAt = (i: number, lastIndex: number) => {
    const half = lastIndex / 2;
    return SPIN_PER_BEAT * (half - Math.abs(i - half));
};

export const EventSection = () => {
    const { ref, isVisible } = useInView({ threshold: 0.01 });
    const containerRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<(HTMLDivElement | null)[]>([]);
    const logoRefs = useRef<(HTMLImageElement | null)[]>([]);
    const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
    const travelerRef = useRef<HTMLDivElement>(null);
    const travelerImgRefs = useRef<(HTMLImageElement | null)[]>([]);

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

    useGSAP(() => {
        const events = eventsRef.current.filter((el): el is HTMLDivElement => el !== null);
        const logos = logoRefs.current.filter((el): el is HTMLImageElement => el !== null);
        const blobs = blobRefs.current.filter((el): el is HTMLDivElement => el !== null);
        if (!containerRef.current || events.length === 0 || logos.length === 0) return;

        ScrollTrigger.getById("eventStage")?.kill(true);
        gsap.set(events, { clearProps: "all" });

        // --- Initial state ---------------------------------------------------
        events.forEach((el, i) => {
            gsap.set(el, i === 0
                ? { opacity: 1, scale: 1, yPercent: 0, zIndex: 10 }
                : { opacity: 0, scale: 1, yPercent: 120, zIndex: 1 });
        });
        logos.forEach((el, ai) => {
            gsap.set(el, ai === 0
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.6 });
        });
        gsap.set(blobs, { backgroundColor: acts[0].config.blobColor });

        // Traveler shard: start on beat 0's slot, showing only the matrix shard.
        gsap.set(travelerRef.current, { left: slotLeft(0), top: slotTop(0), xPercent: -50, yPercent: -50, rotation: 0 });
        const travelerImgs = travelerImgRefs.current.filter((el): el is HTMLImageElement => el !== null);
        gsap.set(travelerImgs, { opacity: 0 });
        gsap.set(travelerImgs[0], { opacity: 1 });

        const tl = gsap.timeline({
            scrollTrigger: {
                id: "eventStage",
                trigger: containerRef.current,
                start: "top top",
                end: `+=${flatEvents.length * 90}%`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                refreshPriority: 2,
            }
        });

        // --- Beats: conveyor through every event, act-synced logo/bg swaps ----
        for (let i = 0; i < events.length - 1; i++) {
            const cur = events[i];
            const next = events[i + 1];
            const curAct = flatEvents[i].ai;
            const nextAct = flatEvents[i + 1].ai;

            tl.to(cur, { yPercent: -120, opacity: 0, scale: 0.85, zIndex: 1, duration: 1, ease: "power2.inOut" })
                .to(next, { yPercent: 0, opacity: 1, scale: 1, zIndex: 10, duration: 1, ease: "power2.inOut" }, "<");

            // Straight slot-to-slot diagonal — left/top lerp linearly, no bow.
            // Light ease rounds the turn at each slot instead of cornering hard.
            tl.to(travelerRef.current, {
                left: slotLeft(i + 1),
                top: slotTop(i + 1),
                rotation: spinAt(i + 1, events.length - 1),
                duration: 1, ease: "power1.inOut",
            }, "<");

            if (nextAct !== curAct) {
                tl.to(logos[curAct], { opacity: 0, scale: 0.6, duration: 1, ease: "power2.inOut" }, "<")
                    .to(logos[nextAct], { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" }, "<")
                    .to(blobs, { backgroundColor: acts[nextAct].config.blobColor, duration: 1, ease: "power2.inOut" }, "<")
                    .to(travelerImgRefs.current[curAct], { opacity: 0, duration: 0.5, ease: "power2.in" }, "<")
                    // Incoming shard fades in during second half, so it "arrives" already in place
                    .to(travelerImgRefs.current[nextAct], { opacity: 1, duration: 0.5, ease: "power2.out" }, "<+=0.5");
            }
        }

        let rafId1: number, rafId2: number;
        rafId1 = requestAnimationFrame(() => {
            rafId2 = requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });
        });

        return () => {
            cancelAnimationFrame(rafId1);
            cancelAnimationFrame(rafId2);
        };
    }, { scope: containerRef, dependencies: [] });

    return (
        <div
            id="eventSection"
            ref={ref}
            className={cn(
                "w-full relative bg-black text-center select-none",
            )}
        >
            <div
                ref={containerRef}
                className="hidden md:flex h-screen w-full relative overflow-hidden flex-col items-center justify-center"
            >
                <div
                    ref={(el) => { blobRefs.current[0] = el; }}
                    className="absolute w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none top-1/4 left-0"
                />
                <div
                    ref={(el) => { blobRefs.current[1] = el; }}
                    className="absolute w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none bottom-1/4 right-0"
                />

                {/* Logo header — one per club, cross-faded per act */}
                <div id="header" className="absolute top-[10%] w-full h-40 flex items-center justify-center pointer-events-none z-30">
                    {acts.map((act, ai) => (
                        <img
                            key={act.key}
                            ref={(el) => { logoRefs.current[ai] = el; }}
                            src={act.logo}
                            alt={act.key}
                            className={cn(
                                "absolute h-28 lg:h-40 w-auto",
                                !act.logo && "hidden")}
                        />
                    ))}
                </div>

                {/* Event beats */}
                <div className="relative w-full max-w-6xl h-[420px] px-12 lg:px-16">
                    {/* Traveling glass shard — one per club, rides the stage as you scroll */}
                    <div
                        ref={travelerRef}
                        className="absolute z-20 pointer-events-none w-[240px] lg:w-[300px] aspect-square"
                    >
                        {acts.map((act, ai) => (
                            <img
                                key={act.key}
                                ref={(el) => { travelerImgRefs.current[ai] = el; }}
                                src={act.shards[0]}
                                alt=""
                                style={shardGlowStyle[act.key]}
                                className="absolute inset-0 w-full h-auto animate-shard-float"
                            />
                        ))}
                    </div>

                    {flatEvents.map((fe, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={`${fe.ai}-${fe.event.id}`}
                                ref={(el) => { eventsRef.current[i] = el; }}
                                className={cn(
                                    "absolute inset-0 flex items-center gap-8 lg:gap-16 will-change-transform px-8 lg:px-0",
                                    isLeft ? "flex-row" : "flex-row-reverse"
                                )}
                            >
                                <div className={cn(
                                    "flex flex-col gap-4 w-2/3",
                                    isLeft ? "text-left items-start" : "text-right items-end"
                                )}>
                                    <p
                                        className={cn("font-primary text-5xl lg:text-6xl", fe.config.textClass)}
                                        style={{ textShadow: fe.config.glowShadow }}
                                    >
                                        {fe.event.name}
                                    </p>
                                    <p className="font-secondary text-sm lg:text-base text-offwhite/40 tracking-widest uppercase">
                                        {fe.event.tagline}
                                    </p>
                                    <p className="font-secondary text-offwhite/80 leading-relaxed text-lg">
                                        {fe.event.description}
                                    </p>
                                    <Button text={"View Rules"} onclick={() => navTo("/brochure", fe.event.page)} />
                                </div>
                                {/* Empty half — the traveling shard occupies this slot */}
                                <div className="w-1/2" aria-hidden />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="md:hidden flex flex-col gap-20 py-24 px-5">
                {acts.map((act) => (
                    <MobileAct key={act.key} act={act} />
                ))}
            </div>
        </div>
    );
};

const MobileAct = ({ act }: { act: (typeof acts)[number] }) => {
    const { ref, isVisible } = useInView({ threshold: 0.15 });
    return (
        <div ref={ref} className="flex flex-col gap-8 items-center">
            <img
                src={act.logo}
                alt={act.key}
                className={cn(
                    "h-20 w-auto transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    !act.logo && "hidden"
                )}
            />
            <div className="flex flex-col gap-6 w-full">
                {act.events.map((event, ei) => (
                    <div
                        key={event.id}
                        className={cn(
                            "relative overflow-hidden rounded-2xl border border-white/5 bg-white/1 backdrop-blur-sm p-6 flex flex-col gap-2 transition-all duration-700",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                        style={{ transitionDelay: isVisible ? `${ei * 100}ms` : "0ms" }}
                    >
                        <span className={cn(
                            "absolute -top-4 -right-2 font-primary text-[7rem] leading-none select-none pointer-events-none tracking-tighter",
                            act.config.numColor
                        )}>
                            {String(event.id).padStart(2, "0")}
                        </span>
                        <div className="relative z-10 flex flex-col gap-2 items-center">
                            <span
                                className={cn("font-primary text-4xl", act.config.textClass)}
                                style={{ textShadow: act.config.glowShadow }}
                            >
                                {event.name}
                            </span>
                            <span className="font-secondary text-sm text-offwhite/60 tracking-widest uppercase">
                                {event.tagline}
                            </span>
                            <p className="font-secondary text-offwhite/80 leading-relaxed text-base my-2 w-2/3 text-center">
                                {event.description}
                            </p>
                            <div className="flex justify-center">
                                <Button text="View Rules" onclick={() => navTo("/brochure", event.page)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

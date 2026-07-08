import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Cursor } from "../components/Cursor";
import { resultsData } from "../data/results";
import { cn } from "../utils.tsx";
import type { Award, ResultEvent, YearResult } from "../data/results";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────── Medal marker for an award rank ─────────────── */
const MEDAL: Record<Award["rank"], { ring: string; glow: string }> = {
    1: { ring: "var(--color-yellow)", glow: "rgba(255,210,63,0.35)" },
    2: { ring: "#b8c0cc", glow: "rgba(184,192,204,0.28)" },
    0: { ring: "var(--color-psynapse)", glow: "rgba(255,255,255,0)" },
};

function AwardRow({ award }: { award: Award }) {
    const medal = MEDAL[award.rank];
    return (
        <div className="award-row group flex items-baseline gap-4 py-2.5 opacity-0">
            {/* rank pip */}
            <span
                className="mt-1 shrink-0 h-2.5 w-2.5 rounded-full ring-1 transition-all duration-300 group-hover:scale-125"
                style={{
                    background: award.rank === 0 ? "transparent" : medal.ring,
                    boxShadow: `0 0 12px ${medal.glow}`,
                    // ring color
                    // @ts-expect-error css var passthrough
                    "--tw-ring-color": medal.ring,
                }}
            />
            <div className="flex flex-1 flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <p
                    className="font-secondary text-[0.7rem] uppercase tracking-[0.28em] shrink-0"
                    style={{ color: medal.ring }}
                >
                    {award.title}
                </p>
                <p className="font-primary text-base md:text-lg uppercase tracking-wide text-offwhite/85 transition-colors duration-300 group-hover:text-offwhite md:text-right">
                    {award.recipient}
                </p>
            </div>
        </div>
    );
}

/* ─────────────── One event = a node on the vertical spine ─────────────── */
function EventBlock({ event, index }: { event: ResultEvent; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                el.querySelector(".event-head"),
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 88%" },
                }
            );
            const rows = el.querySelectorAll(".award-row");
            gsap.fromTo(
                rows,
                { opacity: 0, y: 14 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    stagger: 0.06,
                    scrollTrigger: { trigger: el, start: "top 82%" },
                }
            );
            gsap.fromTo(
                el.querySelector(".event-node"),
                { scale: 0 },
                {
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(2)",
                    scrollTrigger: { trigger: el, start: "top 88%" },
                }
            );
        });
        return () => ctx.revert();
    }, [index]);

    return (
        <div ref={ref} className="relative pl-14 md:pl-20 pb-14">
            {/* node on the spine */}
            <div className="event-node absolute left-0 top-1 flex h-11 w-11 md:h-12 md:w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0d0d0d]">
                <span className="font-primary text-sm md:text-base text-yellow tracking-wide">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            {/* event title */}
            <div className="event-head mb-3 opacity-0">
                <h3 className="font-primary text-2xl md:text-4xl uppercase tracking-wide text-offwhite">
                    {event.name}
                </h3>
                <div className="mt-3 h-px w-full bg-gradient-to-r from-white/12 to-transparent" />
            </div>

            {/* awards */}
            <div>
                {event.awards.map((a, i) => (
                    <AwardRow key={i} award={a} />
                ))}
            </div>
        </div>
    );
}

function YearPip({
    year,
    isActive,
    onClick,
}: {
    year: number;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "relative shrink-0 font-primary uppercase tracking-widest transition-all duration-400 ease-out",
                "px-4 py-2 focus:outline-none",
                isActive
                    ? "text-yellow text-2xl md:text-3xl"
                    : "text-offwhite/25 text-lg md:text-xl hover:text-offwhite/60"
            )}
        >
            {year}
            {isActive && (
                <span className="absolute left-1/2 -bottom-1 h-px w-8 -translate-x-1/2 bg-yellow" />
            )}
        </button>
    );
}

/* ─────────────── Year block: spine + events ─────────────── */
function YearResults({ data }: { data: YearResult }) {
    const spineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".results-spine",
                { scaleY: 0, transformOrigin: "top" },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: spineRef.current,
                        start: "top 70%",
                        end: "bottom 80%",
                        scrub: 0.6,
                    },
                }
            );
        }, spineRef);
        return () => ctx.revert();
    }, [data]);

    return (
        <div ref={spineRef} className="relative mx-auto max-w-4xl px-6 md:px-12 pt-14">
            {/* vertical spine */}
            <div className="absolute left-6 md:left-12 top-14 bottom-0 w-px bg-white/[0.06]">
                <div className="results-spine h-full w-full bg-gradient-to-b from-yellow/60 via-[var(--color-ecomm)]/40 to-transparent" />
            </div>

            {data.events.map((ev, i) => (
                <EventBlock key={`${data.year}-${ev.name}`} event={ev} index={i} />
            ))}
        </div>
    );
}

/* ─────────────── MAIN Results Page ─────────────── */
export const Results = () => {
    const [selectedYear, setSelectedYear] = useState(resultsData[0]?.year ?? 2024);
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const selectedData = resultsData.find((d) => d.year === selectedYear);
    const totalAwards =
        selectedData?.events.reduce((n, e) => n + e.awards.length, 0) ?? 0;

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline()
                .fromTo(
                    ".results-hero-title",
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                )
                .fromTo(
                    ".results-hero-meta",
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                    "-=0.4"
                );
        }, heroRef);

        const railTween = gsap.fromTo(
            ".results-year-rail",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.7 }
        );

        return () => {
            ctx.revert();
            railTween.kill();
        };
    }, []);

    useEffect(() => {
        if (!contentRef.current) return;
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
        const timer = setTimeout(() => ScrollTrigger.refresh(), 150);
        return () => clearTimeout(timer);
    }, [selectedYear]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-offwhite relative overflow-x-hidden md:cursor-none">

            <Navbar />
            <Cursor />

            {/* Hero */}
            <div ref={heroRef} className="text-center pt-28 pb-8 select-none px-4">
                <h2
                    className="results-hero-title font-primary text-[clamp(52px,10vw,140px)] text-offwhite tracking-wider uppercase leading-none opacity-0"
                    style={{ textShadow: "0 0 80px rgba(255,255,255,0.08)" }}
                >
                    RESULTS
                </h2>
                <div className="results-hero-meta opacity-0 mt-6 flex items-center justify-center gap-4 font-secondary text-[0.7rem] md:text-xs uppercase tracking-[0.35em] text-offwhite/40">
                    <span>{selectedData?.events.length ?? 0} Events</span>
                    <span className="h-1 w-1 rounded-full bg-yellow" />
                    <span>{totalAwards} Awards</span>
                </div>
            </div>

            {/* Year rail */}
            <div className="results-year-rail opacity-0 sticky top-0 z-10 bg-[#0a0a0a]/80 backdrop-blur-md border-y border-white/[0.05]">
                <div className="w-full mx-auto flex gap-1 justify-center overflow-x-auto py-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {resultsData.map((yearData) => (
                        <YearPip
                            key={yearData.year}
                            year={yearData.year}
                            isActive={selectedYear === yearData.year}
                            onClick={() => setSelectedYear(yearData.year)}
                        />
                    ))}
                </div>
            </div>

            {/* Year label */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12">
                <p className="font-secondary text-xs uppercase tracking-[0.4em] text-offwhite/30">
                    Compiled Result · {selectedYear}
                </p>
            </div>

            {/* Content */}
            <div ref={contentRef}>
                {selectedData && <YearResults data={selectedData} />}
            </div>

            <div className="h-24" />
            <Footer />
        </div>
    );
};

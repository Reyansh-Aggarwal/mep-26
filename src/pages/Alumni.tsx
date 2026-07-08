import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Cursor } from "../components/Cursor";
import { alumniData } from "../data/clubs";
import { cn } from "../utils.tsx";
import type { AlumniMember, AlumniClub } from "../data/clubs";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────── Core roster entry (name + role, no image) ─────────────── */
function CoreEntry({
    member,
    accent,
    colorClass,
    index,
}: {
    member: AlumniMember;
    accent: string;
    colorClass: string;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: index * 0.06,
                    scrollTrigger: { trigger: el, start: "top 92%" },
                }
            );
        });
        return () => ctx.revert();
    }, [index]);

    return (
        <div
            ref={ref}
            className="group relative flex flex-col gap-1 py-4 pl-5 opacity-0"
        >
            {/* Accent tick */}
            <span
                className="absolute left-0 top-5 h-8 w-px transition-all duration-500 group-hover:h-10"
                style={{ background: accent }}
            />
            <p
                className={cn(
                    "font-secondary text-[0.65rem] tracking-[0.3em] uppercase",
                    colorClass
                )}
            >
                {member.role}
            </p>
            <p className="font-primary text-lg md:text-xl uppercase tracking-wide text-offwhite transition-colors duration-300 group-hover:text-yellow">
                {member.name}
            </p>
        </div>
    );
}

/* ─────────────── Alumni Club Section ─────────────── */
function AlumniClubSection({ club, isLast }: { club: AlumniClub; isLast: boolean }) {
    const nameRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const execWrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                nameRef.current,
                { clipPath: "inset(0 100% 0 0)", opacity: 0 },
                {
                    clipPath: "inset(0 0% 0 0)",
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: { trigger: nameRef.current, start: "top 88%" },
                }
            );

            gsap.fromTo(
                lineRef.current,
                { scaleX: 0, transformOrigin: "left" },
                {
                    scaleX: 1,
                    duration: 1.1,
                    ease: "power4.inOut",
                    scrollTrigger: { trigger: lineRef.current, start: "top 88%" },
                }
            );

            const execs = execWrapRef.current?.querySelectorAll(".exec-name");
            if (execs && execs.length) {
                gsap.fromTo(
                    execs,
                    { opacity: 0, y: 14 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.02,
                        scrollTrigger: { trigger: execWrapRef.current, start: "top 90%" },
                    }
                );
            }
        });
        return () => ctx.revert();
    }, [club]);

    return (
        <section className="relative w-full max-w-6xl mx-auto px-5 md:px-12 pt-16 pb-4 select-none">
            {/* Club heading + rule */}
            <div className="flex items-baseline gap-6 mb-10 relative z-10">
                <h3
                    ref={nameRef}
                    className={`font-primary text-3xl md:text-5xl uppercase opacity-0 ${club.colorClass}`}
                    style={{ clipPath: "inset(0 100% 0 0)", letterSpacing: "0.06em" }}
                >
                    {club.name}
                </h3>
                <div
                    ref={lineRef}
                    className="flex-1 hidden md:block h-px"
                    style={{
                        background: `linear-gradient(to right, color-mix(in srgb, ${club.accentVar} 35%, transparent), transparent)`,
                        transformOrigin: "left",
                    }}
                />
            </div>

            {/* Core team — name + role grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 relative z-10">
                {club.coreMembers.filter((m) => m.name).map((m, i) => (
                    <CoreEntry
                        key={i}
                        member={m}
                        accent={club.accentVar}
                        colorClass={club.colorClass}
                        index={i}
                    />
                ))}
            </div>

            {/* Executives — flowing name list */}
            {club.executives.length > 0 && (
                <div ref={execWrapRef} className="relative z-10 mt-10">
                    <p className="font-secondary text-[0.65rem] uppercase tracking-[0.3em] text-offwhite/40 mb-5">
                        Executive Members
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {club.executives.map((m, i) => (
                            <span
                                key={i}
                                className="exec-name font-secondary text-sm md:text-base text-offwhite/60 hover:text-offwhite transition-colors duration-300 opacity-0"
                            >
                                {m.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Section separator */}
            {!isLast && (
                <div className="mt-14 relative z-10 flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/5" />
                    <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: `${club.accentVar}` }}
                    />
                    <div className="flex-1 h-px bg-white/5" />
                </div>
            )}
        </section>
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

/* ─────────────── MAIN Alumni Page ─────────────── */
export const Alumni = () => {
    const [selectedYear, setSelectedYear] = useState(alumniData[0]?.year ?? 2025);
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const selectedData = alumniData.find((d) => d.year === selectedYear);

    // Hero entrance
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline()
                .fromTo(
                    ".alumni-hero-title",
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
                )
                .fromTo(
                    ".alumni-hero-subtitle",
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                    "-=0.4"
                );
        }, heroRef);

        // Year rail lives outside heroRef, so animate it unscoped.
        const railTween = gsap.fromTo(
            ".alumni-year-rail",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.7 }
        );

        return () => {
            ctx.revert();
            railTween.kill();
        };
    }, []);

    // Fade the content block when switching years. Club sections are keyed by
    // year, so they remount and rebuild their own reveal triggers (cleaned up via
    // ctx.revert on unmount) — no manual ScrollTrigger killing needed here.
    useEffect(() => {
        if (!contentRef.current) return;

        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        // Let the remounted sections lay out, then recompute trigger positions.
        const timer = setTimeout(() => ScrollTrigger.refresh(), 150);
        return () => clearTimeout(timer);
    }, [selectedYear]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-offwhite relative overflow-x-hidden md:cursor-none">
            {/* Ambient glows */}
            <div className="fixed w-[600px] h-[600px] bg-[var(--color-matrix)]/[0.04] rounded-full blur-[160px] pointer-events-none top-0 left-0 -translate-x-1/3 -translate-y-1/3" />
            <div className="fixed w-[500px] h-[500px] bg-[var(--color-ecomm)]/[0.04] rounded-full blur-[140px] pointer-events-none top-1/2 right-0 translate-x-1/3" />
            <div className="fixed w-[600px] h-[600px] bg-[var(--color-psynapse)]/[0.04] rounded-full blur-[160px] pointer-events-none bottom-0 left-1/4 translate-y-1/3" />

            <Navbar />
            <Cursor />

            {/* Hero */}
            <div ref={heroRef} className="text-center pt-28 pb-8 select-none px-4">
                <h2
                    className="alumni-hero-title font-primary text-[clamp(64px,11vw,150px)] text-offwhite tracking-wider uppercase leading-none opacity-0"
                    style={{ textShadow: "0 0 80px rgba(255,255,255,0.08)" }}
                >
                    ALUMNI
                </h2>
            </div>

            {/* Year rail — sticky horizontal timeline */}
            <div className="alumni-year-rail opacity-0 sticky top-0 z-10 bg-[#0a0a0a]/80 backdrop-blur-md border-y border-white/[0.05]">
                <div className="w-full mx-auto flex gap-1 justify-center overflow-x-auto py-3 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {alumniData.map((yearData) => (
                        <YearPip
                            key={yearData.year}
                            year={yearData.year}
                            isActive={selectedYear === yearData.year}
                            onClick={() => setSelectedYear(yearData.year)}
                        />
                    ))}
                </div>
            </div>

            {/* Batch label */}
            <div className="max-w-6xl mx-auto px-5 md:px-12 pt-12">
                <p className="font-secondary text-xs uppercase tracking-[0.4em] text-offwhite/30">
                    Batch of {selectedYear}
                </p>
            </div>

            {/* Club sections */}
            <div ref={contentRef} className="flex flex-col items-center pt-2">
                {selectedData?.clubs.map((club, idx) => (
                    <AlumniClubSection
                        key={`${selectedYear}-${club.name}`}
                        club={club}
                        isLast={idx === (selectedData?.clubs.length ?? 0) - 1}
                    />
                ))}
            </div>

            <div className="h-24" />
            <Footer />
        </div>
    );
};

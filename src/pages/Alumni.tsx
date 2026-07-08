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

/* ─────────────── Alumni Member Card (text-only) ─────────────── */
function AlumniCard({
    member,
    accent,
    colorClass,
    index,
    isCore,
}: {
    member: AlumniMember;
    accent: string;
    colorClass: string;
    index: number;
    isCore: boolean;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    delay: index * 0.08,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [index]);

    const initials = member.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div
            ref={cardRef}
            className={cn(
                "group flex flex-col items-center gap-3 opacity-0",
                isCore ? "px-4 py-5 md:px-6 md:py-6" : "px-3 py-3"
            )}
        >
            {/* Initials avatar */}
            <div
                className={cn(
                    "relative rounded-2xl flex items-center justify-center font-primary uppercase tracking-wider",
                    "border border-white/[0.06] transition-all duration-500",
                    "group-hover:border-white/[0.15]",
                    isCore
                        ? "w-20 h-20 md:w-24 md:h-24 text-xl md:text-2xl"
                        : "w-14 h-14 md:w-16 md:h-16 text-sm md:text-base"
                )}
                style={{
                    background: `radial-gradient(ellipse at center, ${accent}12 0%, transparent 70%)`,
                    color: accent,
                }}
            >
                {/* Hover glow */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                    style={{
                        background: `radial-gradient(ellipse, ${accent}30 0%, transparent 70%)`,
                        transform: "scale(1.4)",
                    }}
                />
                {initials}
            </div>

            {/* Name */}
            <p
                className={cn(
                    "font-secondary tracking-wide uppercase text-center transition-colors duration-300",
                    "group-hover:text-yellow",
                    isCore
                        ? "font-bold text-sm md:text-base text-offwhite"
                        : "text-xs md:text-sm text-offwhite/70"
                )}
            >
                {member.name}
            </p>

            {/* Role */}
            {isCore && (
                <p
                    className={cn(
                        "font-secondary text-xs md:text-sm tracking-widest uppercase -mt-1 text-center",
                        colorClass
                    )}
                >
                    {member.role}
                </p>
            )}
        </div>
    );
}

/* ─────────────── Alumni Club Section ─────────────── */
function AlumniClubSection({
    club,
    isLast,
}: {
    club: AlumniClub;
    isLast: boolean;
}) {
    const nameRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const coreHeaderRef = useRef<HTMLParagraphElement>(null);
    const execHeaderRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Club name clip-path reveal
            gsap.fromTo(
                nameRef.current,
                { clipPath: "inset(0 100% 0 0)", opacity: 0 },
                {
                    clipPath: "inset(0 0% 0 0)",
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: nameRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Line expand
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0, transformOrigin: "left" },
                {
                    scaleX: 1,
                    duration: 1.1,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Section headers
            [coreHeaderRef.current, execHeaderRef.current].forEach((el) => {
                if (!el) return;
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 12 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, [club]);

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-8 select-none">
            {/* Ghost watermark */}
            <div
                className={cn(
                    "absolute -top-6 left-4 md:left-12 font-primary uppercase",
                    "select-none leading-none text-white/2",
                    "[-webkit-text-stroke:2px_#ffffff06]"
                )}
                style={{ fontSize: "clamp(80px, 18vw, 220px)" }}
            >
                {club.name}
            </div>

            {/* Club heading + rule */}
            <div className="flex items-center gap-6 mb-12 relative z-10">
                <h3
                    ref={nameRef}
                    className={`font-primary text-4xl md:text-6xl uppercase opacity-0 ${club.colorClass}`}
                    style={{
                        clipPath: "inset(0 100% 0 0)",
                        letterSpacing: "0.06em",
                    }}
                >
                    {club.name}
                </h3>
                <div
                    ref={lineRef}
                    className="flex-1 hidden md:block h-px"
                    style={{
                        background: `linear-gradient(to right, color-mix(in srgb, ${club.accentVar} 30%, transparent), transparent)`,
                        transformOrigin: "left",
                    }}
                />
            </div>

            {/* Core Team */}
            <div className="relative z-10 mb-12">
                <p
                    ref={coreHeaderRef}
                    className="font-secondary text-xs uppercase tracking-[0.3em] text-offwhite/40 mb-6 opacity-0"
                >
                    Core Team
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
                    {club.coreMembers.map((m, i) => (
                        <AlumniCard
                            key={i}
                            member={m}
                            accent={club.accentVar}
                            colorClass={club.colorClass}
                            index={i}
                            isCore={true}
                        />
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div
                className="w-full h-px mb-8 relative z-10"
                style={{
                    background:
                        "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
                }}
            />

            {/* Executives */}
            <div className="relative z-10">
                <p
                    ref={execHeaderRef}
                    className="font-secondary text-xs uppercase tracking-[0.3em] text-offwhite/40 mb-6 opacity-0"
                >
                    Executive Members
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-3">
                    {club.executives.map((m, i) => (
                        <AlumniCard
                            key={i}
                            member={m}
                            accent={club.accentVar}
                            colorClass={club.colorClass}
                            index={i}
                            isCore={false}
                        />
                    ))}
                </div>
            </div>

            {/* Section separator */}
            {!isLast && (
                <div className="mt-20 relative z-10 flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/5" />
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="flex-1 h-px bg-white/5" />
                </div>
            )}
        </section>
    );
}

/* ─────────────── Year Tab Button ─────────────── */
function YearTab({
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
                "relative font-primary text-2xl md:text-4xl uppercase tracking-widest px-6 py-3 md:px-8 md:py-4",
                "transition-all duration-500 ease-out rounded-xl border",
                "focus:outline-none",
                isActive
                    ? "text-yellow border-yellow/30 bg-yellow/[0.06] shadow-[0_0_30px_rgba(255,210,63,0.08)]"
                    : "text-offwhite/30 border-white/[0.04] bg-white/[0.02] hover:text-offwhite/60 hover:border-white/10"
            )}
        >
            {/* Active glow behind */}
            {isActive && (
                <div className="absolute inset-0 rounded-xl bg-yellow/5 blur-xl -z-10" />
            )}
            '{String(year).slice(-2)}
        </button>
    );
}

/* ─────────────── MAIN Alumni Page ─────────────── */
export const Alumni = () => {
    const [selectedYear, setSelectedYear] = useState(alumniData[0]?.year ?? 2025);
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const selectedData = alumniData.find((d) => d.year === selectedYear);

    // Hero entrance animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                ".alumni-hero-title",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
            )
                .fromTo(
                    ".alumni-hero-subtitle",
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                    "-=0.4"
                )
                .fromTo(
                    ".alumni-year-tab",
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.12,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Content fade when switching years
    useEffect(() => {
        if (!contentRef.current) return;

        // Kill old ScrollTriggers within the content area before animating new ones
        ScrollTrigger.getAll().forEach((t) => {
            if (
                contentRef.current &&
                contentRef.current.contains(t.trigger as Element)
            ) {
                t.kill();
            }
        });

        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        // After the content fades in, refresh ScrollTrigger so new animations register
        const timer = setTimeout(() => ScrollTrigger.refresh(), 100);
        return () => clearTimeout(timer);
    }, [selectedYear]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-offwhite relative overflow-x-hidden md:cursor-none">
            {/* Ambient glows — same as MembersPage */}
            <div className="fixed w-[600px] h-[600px] bg-[var(--color-matrix)]/[0.04] rounded-full blur-[160px] pointer-events-none top-0 left-0 -translate-x-1/3 -translate-y-1/3" />
            <div className="fixed w-[500px] h-[500px] bg-[var(--color-ecomm)]/[0.04] rounded-full blur-[140px] pointer-events-none top-1/2 right-0 translate-x-1/3" />
            <div className="fixed w-[600px] h-[600px] bg-[var(--color-psynapse)]/[0.04] rounded-full blur-[160px] pointer-events-none bottom-0 left-1/4 translate-y-1/3" />

            <Navbar />
            <Cursor />

            {/* Hero */}
            <div ref={heroRef} className="text-center pt-28 pb-12 select-none px-4">
                <h2
                    className="alumni-hero-title font-primary text-[clamp(64px,11vw,150px)] text-offwhite tracking-wider uppercase leading-none opacity-0"
                    style={{ textShadow: "0 0 80px rgba(255,255,255,0.08)" }}
                >
                    ALUMNI
                </h2>
                <p className="alumni-hero-subtitle font-secondary text-sm md:text-base text-offwhite/40 tracking-[0.3em] uppercase mt-6 opacity-0">
                    The people who built our legacy
                </p>

                {/* Year selector */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10">
                    {alumniData.map((yearData) => (
                        <div key={yearData.year} className="alumni-year-tab opacity-0">
                            <YearTab
                                year={yearData.year}
                                isActive={selectedYear === yearData.year}
                                onClick={() => setSelectedYear(yearData.year)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Ribbon-style divider */}
            <div className="w-full overflow-hidden py-4">
                <div
                    className={cn(
                        "border-y border-white/[0.04] px-4 py-3",
                        "text-5xl md:text-6xl lg:text-7xl",
                        "whitespace-nowrap will-change-transform inline-block w-max font-bold",
                        "text-white/[0.03] [-webkit-text-stroke:1px_#ffffff06] font-primary"
                    )}
                >
                    ALUMNI — CLASS OF {selectedYear} — ALUMNI — CLASS OF{" "}
                    {selectedYear} — ALUMNI — CLASS OF {selectedYear} —
                </div>
            </div>

            {/* Club sections */}
            <div ref={contentRef} className="flex flex-col items-center">
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

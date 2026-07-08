import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../utils.tsx";
import { CoreMemberCard, ExecMemberCard } from "./MemberCards";
import type { Club } from "../../utils.tsx";
gsap.registerPlugin(ScrollTrigger);

export function ClubSection({ club, isLast, showExec = true }: { club: Club, isLast: boolean, showExec?: boolean }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const coreHeaderRef = useRef<HTMLParagraphElement>(null);
    const execHeaderRef = useRef<HTMLParagraphElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Club name reveal
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
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-8 select-none"
        >

            {/* Club heading + rule */}
            <div className="flex items-center gap-6 mb-14 relative z-10">
                <h3
                    ref={nameRef}
                    className={`font-primary text-5xl md:text-7xl uppercase opacity-0 ${club.colorClass}`}
                    style={{ clipPath: "inset(0 100% 0 0)", letterSpacing: "0.06em" }}
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

            {/* Core members */}
            <div className="relative z-10 mb-16">
                <p
                    ref={coreHeaderRef}
                    className={cn(
                        "font-secondary text-xs uppercase tracking-[0.3em] text-offwhite/40",
                        "mb-8 opacity-0",
                        !showExec ? "hidden" : "block")}
                >
                    Core Team
                </p>
                <div className="flex flex-wrap gap-0">
                    {club.members.map((m, i) => (
                        <CoreMemberCard
                            key={i}
                            member={m}
                            accent={club.accentVar}
                            colorClass={club.colorClass}
                            index={i}
                        />
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div
                className={cn(
                    "w-full h-px mb-10 relative z-10",
                    !showExec ? "hidden" : "block")}
                style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
            />

            {/* Exec members */}
            <div className={cn(
                "relative z-10",
                !showExec ? "hidden" : "block")}>
                <div
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                        setTimeout(() => {
                            ScrollTrigger.refresh();
                        }, 500);
                    }}
                    className="group/exec flex items-center gap-6 mb-8 select-none w-fit"
                >
                    <p
                        ref={execHeaderRef}
                        className="font-secondary text-xs uppercase tracking-[0.3em] text-offwhite/40 group-hover/exec:text-offwhite transition-colors duration-300 opacity-0 flex items-center gap-3"
                    >
                        Executive Members
                        <svg
                            className={cn(
                                "w-3 h-3 text-yellow transition-transform duration-500 ease-out",
                                isExpanded ? "rotate-90" : "rotate-0"
                            )}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </p>
                    <div
                        className="w-20 md:w-32 h-px bg-gradient-to-r from-white/10 to-transparent group-hover/exec:from-white/30 transition-colors duration-300"
                    />
                </div>
                <div className={cn(
                    "transition-all duration-500 ease-in-out pb-6",
                    isExpanded
                        ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-20"
                        : "grid grid-cols-4 sm:grid-cols-8 gap-4 md:gap-6"
                )}>
                    {club.executives.map((m, i) => (
                        <ExecMemberCard
                            key={i}
                            member={m}
                            accent={club.accentVar}
                            index={i}
                            isExpanded={isExpanded}
                        />
                    ))}
                </div>
            </div>

            {/* Section separator */}
            {
                !isLast && (
                    <div className="mt-24 relative z-10 flex items-center gap-4">
                        <div className="flex-1 h-px bg-white/5" />
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <div className="flex-1 h-px bg-white/5" />
                    </div>
                )
            }
        </section >
    );
}
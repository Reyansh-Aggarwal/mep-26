import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { cn, type Member } from "../../utils.tsx";

gsap.registerPlugin(ScrollTrigger);

function Avatar({ image, name, size = "md", accent }: { image: string, name: string, size: string, accent: string }) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div
            className={cn(
                `rounded-2xl overflow-hidden relative flex-shrink-0`,
                size === "sm" ? "w-20 h-20" : size === "md" ? "w-36 h-36 md:w-44 md:h-44" : "w-44 h-44 md:w-56 md:h-56")}
        >
            {image ? (
                <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover" />
            ) : (
                <div
                    className="w-full h-full flex items-center justify-center text-2xl font-bold tracking-wider"
                    style={{

                        color: accent,
                    }}
                >
                    {initials}
                </div>
            )}
        </div>
    );
}

export function CoreMemberCard({ member, accent, colorClass, index }: { member: Member, accent: string, colorClass: string, index: number }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, [index]);

    return (
        <div
            ref={cardRef}
            className={cn(
                "group flex flex-col items-center gap-4 opacity-0 mb-8",
                member.role === "President" ? "basis-full md:basis-1/2" : member.role === "Vice-President" ? "basis-1/2 md:basis-1/2" : "basis-1/2 md:basis-1/3")}
        >
            <div className="relative">
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                    style={{ background: `radial-gradient(ellipse, ${accent}33 0%, transparent 70%)`, transform: "scale(1.2)" }}
                />
                <Avatar image={member.image} name={member.name} size="lg" accent={accent} />

            </div>
            <p
                className="font-secondary font-bold text-xl text-offwhite tracking-wide uppercase text-center group-hover:text-yellow transition-colors duration-300"
            >
                {member.name}
            </p>
            <p className={cn("font-secondary text-sm md:text-base tracking-widest uppercase mt-1 text-center", colorClass)}>
                {member.role}
            </p>
        </div>
    );
}

export function ExecMemberCard({ member, accent, index, isExpanded }: { member: Member, accent: string, index: number, isExpanded: boolean }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        gsap.fromTo(
            el,
            { opacity: 0, x: 20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
                delay: index * 0.07,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, [index]);

    return (
        <div
            ref={cardRef}
            className="group flex flex-col items-center gap-3 transition-all duration-500 ease-out opacity-0"
        >
            <div className="relative">
                {isExpanded && (
                    <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                        style={{ background: `radial-gradient(ellipse, ${accent}33 0%, transparent 70%)`, transform: "scale(1.2)" }}
                    />
                )}
                <Avatar image={member.image} name={member.name} size={isExpanded ? "md" : "sm"} accent={accent} />
            </div>
            <p className={cn(
                "font-secondary tracking-widest uppercase text-center transition-all duration-500 ease-out group-hover:text-yellow",
                isExpanded ? "text-base font-bold text-offwhite" : "text-xs text-offwhite/70"
            )}>
                {member.name}
            </p>
        </div>
    );
}
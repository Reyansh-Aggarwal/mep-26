import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { cn, type Member } from "../../utils";
import { Avatar } from "./MemberCards";

interface MemberModalProps {
    members: Member[];
    selectedIndex: number;
    accent: string;
    colorClass: string;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export function MemberModal({ members, selectedIndex, accent, colorClass, onClose, onNavigate }: MemberModalProps) {
    const member = members[selectedIndex];
    const backdropRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const isAnimating = useRef(false);
    const prevIndex = useRef(selectedIndex);

    // open animation
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
            .fromTo(contentRef.current, { opacity: 0, scale: 0.85, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.5 }, "-=0.2")
            .fromTo(glowRef.current, { opacity: 0, scale: 0.5 }, { opacity: 0.4, scale: 1, duration: 0.6 }, "-=0.4")
            .fromTo(avatarRef.current, { opacity: 0, scale: 0.7, rotateY: -15 }, { opacity: 1, scale: 1, rotateY: 0, duration: 0.5 }, "-=0.4")
            .fromTo(infoRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25");

        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; };
    }, []);

    // switch animation
    useEffect(() => {
        if (prevIndex.current === selectedIndex) return;
        const direction = selectedIndex > prevIndex.current ? 1 : -1;
        prevIndex.current = selectedIndex;

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.fromTo(avatarRef.current, { opacity: 0, x: direction * 60, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, duration: 0.4 })
            .fromTo(infoRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.3 }, "-=0.2")
            .fromTo(glowRef.current, { opacity: 0 }, { opacity: 0.4, duration: 0.4 }, "-=0.3");
    }, [selectedIndex]);

    const animateClose = useCallback(() => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const tl = gsap.timeline({
            defaults: { ease: "power2.in" },
            onComplete: () => { isAnimating.current = false; onClose(); }
        });
        tl.to(infoRef.current, { opacity: 0, y: 15, duration: 0.2 })
            .to(avatarRef.current, { opacity: 0, scale: 0.8, duration: 0.25 }, "-=0.1")
            .to(glowRef.current, { opacity: 0, duration: 0.2 }, "-=0.2")
            .to(contentRef.current, { opacity: 0, scale: 0.9, y: 30, duration: 0.3 }, "-=0.15")
            .to(backdropRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
    }, [onClose]);

    const animateNavigate = useCallback((idx: number) => {
        if (isAnimating.current) return;
        isAnimating.current = true;
        const direction = idx > selectedIndex ? 1 : -1;

        const tl = gsap.timeline({
            defaults: { ease: "power2.in" },
            onComplete: () => { isAnimating.current = false; onNavigate(idx); }
        });
        tl.to(avatarRef.current, { opacity: 0, x: direction * -60, scale: 0.9, duration: 0.25 })
            .to(infoRef.current, { opacity: 0, y: -10, duration: 0.2 }, "-=0.15")
            .to(glowRef.current, { opacity: 0, duration: 0.2 }, "-=0.15");
    }, [selectedIndex, onNavigate]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                animateClose();
            } else if (e.key === "ArrowLeft") {
                animateNavigate((selectedIndex - 1 + members.length) % members.length);
            } else if (e.key === "ArrowRight") {
                animateNavigate((selectedIndex + 1) % members.length);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, members.length, animateClose, animateNavigate]);

    if (!member) return null;

    return (
        <div
            ref={backdropRef}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md select-none cursor-none opacity-0"
            onClick={animateClose}
        >
            {/* Close */}
            <button
                onClick={(e) => { e.stopPropagation(); animateClose(); }}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors cursor-focus z-50"
                aria-label="Close modal"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Left arrow */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    animateNavigate((selectedIndex - 1 + members.length) % members.length);
                }}
                className="absolute left-4 md:left-12 p-4 text-white/50 hover:text-white transition-colors cursor-focus hidden sm:block z-50"
            >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Content */}
            <div
                ref={contentRef}
                className="relative flex flex-col items-center gap-6 max-w-lg w-full opacity-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    ref={glowRef}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl -z-10 opacity-0"
                    style={{ background: `radial-gradient(circle, ${accent}88 0%, transparent 70%)` }}
                />
                <div ref={avatarRef} className="opacity-0">
                    <Avatar image={member.image} name={member.name} size="2xl" accent={accent} />
                </div>

                <div ref={infoRef} className="flex flex-col items-center gap-2 text-center mt-4 opacity-0">
                    <h2 className="font-primary text-4xl md:text-5xl text-offwhite uppercase tracking-wider">
                        {member.name}
                    </h2>
                    <p className={cn("font-secondary text-lg tracking-[0.2em] uppercase", colorClass)}>
                        {member.role}
                    </p>
                </div>

                {/* Mobile arrows */}
                <div className="flex sm:hidden justify-between w-full mt-8 px-8">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            animateNavigate((selectedIndex - 1 + members.length) % members.length);
                        }}
                        className="p-4 text-white/50 hover:text-white transition-colors cursor-focus"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            animateNavigate((selectedIndex + 1) % members.length);
                        }}
                        className="p-4 text-white/50 hover:text-white transition-colors cursor-focus"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right arrow */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    animateNavigate((selectedIndex + 1) % members.length);
                }}
                className="absolute right-4 md:right-12 p-4 text-white/50 hover:text-white transition-colors cursor-focus hidden sm:block z-50"
            >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

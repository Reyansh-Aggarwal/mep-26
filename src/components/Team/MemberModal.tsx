import { useEffect } from "react";
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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowLeft") {
                onNavigate((selectedIndex - 1 + members.length) % members.length);
            } else if (e.key === "ArrowRight") {
                onNavigate((selectedIndex + 1) % members.length);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        // Prevent background scrolling
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [selectedIndex, members.length, onClose, onNavigate]);

    if (!member) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md select-none" onClick={onClose}>
            {/* Close button */}
            <button
                onClick={onClose}
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
                    onNavigate((selectedIndex - 1 + members.length) % members.length);
                }}
                className="absolute left-4 md:left-12 p-4 text-white/50 hover:text-white transition-colors cursor-focus hidden sm:block z-50"
            >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Modal Content */}
            <div
                className="relative flex flex-col items-center gap-6 max-w-lg w-full animate-in fade-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-40 blur-3xl -z-10"
                    style={{ background: `radial-gradient(circle, ${accent}88 0%, transparent 70%)` }}
                />

                <Avatar image={member.image} name={member.name} size="xl" accent={accent} />

                <div className="flex flex-col items-center gap-2 text-center mt-4">
                    <h2 className="font-primary text-4xl md:text-5xl text-offwhite uppercase tracking-wider">
                        {member.name}
                    </h2>
                    <p className={cn("font-secondary text-lg tracking-[0.2em] uppercase", colorClass)}>
                        {member.role}
                    </p>
                </div>

                {/* Mobile arrows (shown under content) */}
                <div className="flex sm:hidden justify-between w-full mt-8 px-8">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate((selectedIndex - 1 + members.length) % members.length);
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
                            onNavigate((selectedIndex + 1) % members.length);
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
                    onNavigate((selectedIndex + 1) % members.length);
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

import halftone_bg from "../assets/halftone.png";
import { cn } from "../utils";
import mepLogo from "../assets/logos/mep_logo.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const whatRef = useRef<HTMLSpanElement>(null);
    const questionRef = useRef<HTMLSpanElement>(null);
    const mepLabelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const title = titleRef.current;
            const whatEl = whatRef.current;
            const questionEl = questionRef.current;
            const contentEl = contentRef.current;

            if (!section || !title || !whatEl || !questionEl || !contentEl) return;

            // ─── Initial state ───────────────────────────────────────────────
            // "What is" and "?" start hidden, overlapping the mepLabel center
            gsap.set(whatEl, { opacity: 0, x: 500 });
            gsap.set(questionEl, { opacity: 0, x: -200 });
            gsap.set(contentEl, { opacity: 0, pointerEvents: "none" });
            gsap.set(title, { translateX: "-10rem" });
            // Title starts centered (no transform needed — flex layout handles it)
            gsap.set(title, {
                xPercent: 0,
                yPercent: 0,
                scale: 1,
            });

            // ─── Main scroll timeline ─────────────────────────────────────────
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    // 3× the section height pinned so we have room for three phases
                    end: "+=300%",
                    pin: true,
                    scrub: 0.8,
                    anticipatePin: 1,
                },
            });

            // Phase 0 → Phase 1  (0–25% of scroll):
            // mepLabel is already visible; "What is" and "?" stay hidden
            tl.to({}, { duration: 0.15 }); // small pause at entry

            // Phase 1 → Phase 2  (25–60% of scroll):
            // "What is" slides OUT from behind mepLabel to the LEFT
            // "?" slides OUT from behind mepLabel to the RIGHT
            tl.to(
                whatEl,
                {
                    opacity: 1,
                    x: 0,          // it's already at x:0 visually, but we animate from
                    duration: 0.4, // behind (z-index trick) — the motion is the real reveal
                    ease: "power2.out",
                },
                "reveal"
            ).to(
                questionEl,
                {
                    opacity: 1,
                    x: 0,          // it's already at x:0 visually, but we animate from
                    duration: 0.4, // behind (z-index trick) — the motion is the real reveal
                    ease: "power2.out",
                },
                "reveal"
            )
                .fromTo(
                    whatEl,
                    { clipPath: "inset(0 100% 0 0)" },
                    {
                        clipPath: "inset(0 0% 0 0)",
                        duration: 0.4,
                        ease: "power2.out",
                    },
                    "reveal"
                )
                .fromTo(
                    questionEl,
                    { opacity: 0, clipPath: "inset(0 0 0 100%)" },
                    {
                        opacity: 1,
                        clipPath: "inset(0 0 0 0%)",
                        duration: 0.4,
                        ease: "power2.out",
                    },
                    "reveal"
                );

            tl.to({}, { duration: 0.4 });
            // Phase 2 → Phase 3  (60–100% of scroll):
            // Title flies to top-left; content fades in
            tl.to(
                title,
                {
                    translateX: 0,
                    scale: 0.7,
                    xPercent: -50,
                    yPercent: -100,
                    transformOrigin: "left center",
                    duration: 0.6,
                    ease: "power1.out",
                },
                "expand"
            );
            tl.to({}, { duration: 0.05 });

            tl.to(
                contentEl,
                {
                    opacity: 1,
                    pointerEvents: "auto",
                    duration: 0.6,
                    ease: "power2.out",
                },
                "expand+=0.3"
            )
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="min-h-dvh w-full bg-[#070707] overflow-hidden flex text-center items-center justify-center relative"
        >
            <img
                src={halftone_bg}
                className="absolute w-full h-full object-cover z-0"
                alt="Halftone Background"
            />

            {/* ── Wrapper that holds title + content together ── */}
            <div className="relative w-full flex flex-col items-center justify-center px-2 md:px-8 select-none">

                {/* ── TITLE ── */}
                <div
                    ref={titleRef}
                    id="title"
                    className={cn(
                        "md:text-[10rem] font-eternalo",
                        " flex flex-row items-center gap-6 ",
                        "justify-center z-10 will-change-transform",
                        ""
                    )}
                >
                    {/* "What is" — clips from right→left, simulating slide-from-behind */}
                    <span
                        ref={whatRef}
                        className="text-white overflow-hidden whitespace-nowrap"
                        style={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                    >
                        What is
                    </span>

                    {/* mepLabel — always visible, acts as the reveal anchor */}
                    <div
                        ref={mepLabelRef}
                        id="mepLabel"
                        className="relative flex justify-center items-center"
                    >
                        {/* White layer */}


                        {/* Main layer */}
                        <div
                            className={cn(
                                "flex justify-center items-center w-fit",
                                "px-8 bg-myblack z-10",
                                "outline-solid outline-4 outline-black",
                            )}
                        >
                            <img
                                src={mepLogo}
                                className="h-[10rem]"
                                alt="MEP Logo"
                            />
                        </div>
                    </div>

                    {/* "?" — clips from left→right */}
                    <span
                        ref={questionRef}
                        className="text-white overflow-hidden whitespace-nowrap"
                        style={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
                    >
                        ?
                    </span>
                </div>

                {/* ── CONTENT — fades in during phase 3 ── */}
                <div
                    ref={contentRef}
                    id="content"
                    className={cn(
                        "mt-12 w-full flex flex-row",
                        " text-white text-xl md:text-2xl leading-relaxed ",
                        "z-10 absolute")}
                    style={{ opacity: 0 }}
                >
                    <p className={cn(
                        "animate-fade-in font-helvetical basis-1/2",
                        "px-16 text-left pt-16")}>
                        The wait is over. The 26th Bro. Aloysius Matrix Ecomm Psynapse Fest is back—bigger, bolder, and more thrilling than ever. This isn’t just an event; it’s the highlight of the year.
                        Celebrating sharp minds and standout skills across Computer Science, Economics, and Psychology. Participants will take on intense challenges in tech, business, and behavioral science—designed to discover the best young talent out there.
                        What sets this fest apart? No hand-holding. It’s all you—your skill, your grit, your game. Only the exceptional will rise, making this a true test of mastery.
                        This year promises to be unforgettable—a space to learn, connect, and shine.
                        This isn’t just an event—it’s a journey of growth. Step in, rise up, and remember: every moment counts.
                    </p>
                    <div className="animate-fade-in flex justify-center items-center basis-1/2">
                        whatever graphic
                    </div>
                </div>
            </div>
        </div>
    );
};
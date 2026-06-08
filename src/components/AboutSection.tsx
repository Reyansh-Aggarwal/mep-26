import { cn } from "../utils";
import mepLogo from "../assets/logos/mep_logo.png";
import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = forwardRef<HTMLDivElement>((_, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const whatRef = useRef<HTMLSpanElement>(null);
    const questionRef = useRef<HTMLSpanElement>(null);
    const mepLabelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const section = containerRef.current;
            const title = titleRef.current;
            const whatEl = whatRef.current;
            const questionEl = questionRef.current;
            const contentEl = contentRef.current;

            if (!section || !title || !whatEl || !questionEl || !contentEl) return;

            // ─── Initial state ───────────────────────────────────────────────
            gsap.set(whatEl, { opacity: 0, x: 500, clipPath: "inset(0 100% 0 0)" });
            gsap.set(questionEl, { opacity: 0, x: -200, clipPath: "inset(0 0 0 100%)" });
            gsap.set(contentEl, { opacity: 0, pointerEvents: "none" });

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
                    end: "+=300%",
                    pin: true,
                    scrub: 0.8,
                    anticipatePin: 1,
                },
            });

            // Phase 0 → Phase 1 
            tl.to({}, { duration: 0.15 });

            // Phase 1 → Phase 2 
            tl.to(whatEl, {
                opacity: 1,
                x: 0,
                duration: 0.4,
                ease: "power2.out",
            }, "reveal")
                .to(questionEl, {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    ease: "power2.out",
                }, "reveal")
                .to(whatEl,
                    {
                        clipPath: "inset(0 0% 0 0)",
                        duration: 0.4,
                        ease: "power2.out",
                    },
                    "reveal"
                )
                .to(questionEl,
                    {
                        clipPath: "inset(0 0 0 0%)",
                        duration: 0.4,
                        ease: "power2.out",
                    },
                    "reveal"
                );

            tl.to({}, { duration: 0.4 });

            // Phase 2 → Phase 3
            tl.to(title, {
                scale: 0.8,
                transformOrigin: "center center",
                xPercent: 20,
                yPercent: -200,
                duration: 0.6,
                ease: "power1.out",
            }, "expand");

            tl.to(contentEl, {
                opacity: 1,
                pointerEvents: "auto",
                duration: 0.6,
                ease: "power2.out",
            }, "expand+=0.3");
        });

        return () => mm.revert();
    }, []);

    return (
        <div
            ref={(node) => {
                containerRef.current = node;
                if (typeof ref === 'function') ref(node);
                else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            className="min-h-dvh w-full overflow-hidden flex text-center items-center justify-center relative py-12"
        >

            {/* ── Wrapper that holds title + content together ── */}
            <div className="relative w-full flex flex-col items-center justify-center md:px-8 select-text">

                {/* ── TITLE ── */}
                <div
                    ref={titleRef}
                    id="title"
                    className={cn(
                        "relative md:absolute ",
                        "flex flex-row flex-wrap items-center justify-center z-10 ",
                        "pt-20 md:pt-0 gap-3 md:gap-0",
                        "text-5xl md:text-8xl lg:text-[9rem] font-eternalo"
                    )}
                >
                    {/* "What is" */}
                    <span
                        ref={whatRef}
                        className="relative md:absolute md:right-full md:mr-6 text-white overflow-hidden whitespace-nowrap"
                    >
                        What is
                    </span>

                    {/* mepLabel */}
                    <div id="mepLabel"
                        ref={mepLabelRef}
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
                                className="h-32 lg:h-[9rem]"
                                alt="MEP Logo"
                            />
                        </div>
                    </div>

                    {/* "?" */}
                    <span
                        ref={questionRef}
                        className="relative md:absolute md:left-full md:ml-6 text-white overflow-hidden whitespace-nowrap"
                    >
                        ?
                    </span>
                </div>

                {/* ── CONTENT — fades in during phase 3 ── */}
                <div id="content"
                    ref={contentRef}
                    className={cn(
                        "mt-12 w-full flex flex-col md:flex-row",
                        " text-white text-2xl md:text-2xl leading-relaxed ",
                        "z-10 ")}
                >
                    <p className={cn(
                        "animate-fade-in font-helvetical ",
                        "px-16 text-left pt-16 h-1/3")}>
                        The wait is over. The 26th Bro. Aloysius Matrix Ecomm Psynapse Fest is back—bigger, bolder, and more thrilling than ever. This isn’t just an event; it’s the highlight of the year.
                        Celebrating sharp minds and standout skills across Computer Science, Economics, and Psychology. Participants will take on intense challenges in tech, business, and behavioral science—designed to discover the best young talent out there.
                        What sets this fest apart? No hand-holding. It’s all you—your skill, your grit, your game. Only the exceptional will rise, making this a true test of mastery.

                    </p>

                </div>
            </div>
        </div >
    );
});
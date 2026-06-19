import { cn } from "../utils";
import { forwardRef, useRef, useEffect } from "react";
import gsap from "gsap";

export const HeroSection = forwardRef<HTMLDivElement>((_) => {
    const matrixRef = useRef<HTMLDivElement>(null);
    const ecommRef = useRef<HTMLDivElement>(null);
    const psynapseRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        let handleInteraction: () => void;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                paused: !isMobile,
                onComplete: () => {
                    window.dispatchEvent(new CustomEvent("heroAnimationComplete"));
                }
            });

            const matrixLetters = gsap.utils.toArray(".matrix-letter");
            const ecommLetters = gsap.utils.toArray(".ecomm-letter");
            const psynapseLetters = gsap.utils.toArray(".psynapse-letter");

            // Phase 1: Set initial states before animation: 0,

            gsap.set(matrixRef.current,
                {
                    yPercent: 120,
                    opacity: 0,
                    backgroundColor: "#517eff"
                }
            )
            gsap.set(ecommRef.current,
                {
                    yPercent: 120,
                    opacity: 0,
                    backgroundColor: "#00C52A"
                }
            )
            gsap.set(psynapseRef.current,
                {
                    yPercent: 120,
                    opacity: 0,
                    backgroundColor: "rgba(255, 0, 140, 1)"
                }
            )

            // Set random rotation on each letter
            gsap.set(matrixLetters, {
                rotation: () => gsap.utils.random(-180, 180),
                transformOrigin: "center center",
                color: '#0D0F12'
            });
            gsap.set(ecommLetters, {
                rotation: () => gsap.utils.random(-180, 180),
                transformOrigin: "center center",
                color: '#0D0F12'
            });
            gsap.set(psynapseLetters, {
                rotation: () => gsap.utils.random(-180, 180),
                transformOrigin: "center center",
                color: '#0D0F12'
            });

            // Phase 2: Slide in all three title blocks sequentially
            tl.to(
                matrixRef.current,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                }
            )
                .to(
                    matrixLetters,
                    {
                        rotation: 0,
                        duration: 1,
                        ease: "back.out(1.2)",
                        stagger: 0.05,
                    },
                    0 // runs simultaneously with the matrixRef sliding up
                )
                .to(
                    ecommRef.current,
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 1.2,
                    },
                    "+=0.4"
                )
                .to(
                    ecommLetters,
                    {
                        rotation: 0,
                        duration: 1,
                        ease: "back.out(1.2)",
                        stagger: 0.05,
                    },
                    "<" // runs simultaneously with the ecommRef sliding up
                )
                .to(
                    psynapseRef.current,
                    {
                        yPercent: 0,
                        opacity: 1,
                        duration: 0.8,
                    }
                )
                .to(
                    psynapseLetters,
                    {
                        rotation: 0,
                        duration: 1,
                        ease: "back.out(1.2)",
                        stagger: 0.05,
                    },
                    "<" // runs simultaneously with the psynapseRef sliding up
                )
                .to([], { duration: 0.4 })
                .to(
                    [matrixRef.current, ecommRef.current, psynapseRef.current],
                    {
                        backgroundColor: "",
                        duration: 0.5,
                    }
                )
                .to(
                    [matrixLetters, ecommLetters, psynapseLetters],
                    {
                        color: "#fffdf5",
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "<"
                ).to([], { duration: 0.3 })
                .to(
                    containerRef.current,
                    {
                        scale: 0.8,
                        duration: 1.2,
                        ease: "power3.out"
                    },
                );

            if (!isMobile) {
                handleInteraction = () => {
                    tl.play();
                    window.removeEventListener("click", handleInteraction);
                };
                window.addEventListener("click", handleInteraction);
            }
        });

        return () => {
            ctx.revert();
            if (handleInteraction) {
                window.removeEventListener("click", handleInteraction);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "min-h-dvh w-full overflow-hidden z-10",
                "text-center items-center justify-center",
                "flex flex-col pointer-events-none",
                "fixed left-0 top-0 bg-none"
            )}
        >
            <div
                ref={matrixRef}
                className={cn(
                    "font-primary text-black text-9xl",
                    "w-full h-full absolute pt-24 lg:pt-24 left-0 "
                )}
            >
                <span id="MATRIX"
                    className="text-[12rem]">
                    {"MATRIX".split("").map((char, i) => (
                        <span key={i} className="inline-block matrix-letter">
                            {char}
                        </span>
                    ))}
                </span>
                <div
                    ref={ecommRef}
                    className="w-full h-full text-center"
                >
                    <span id="ECOMM"
                        className="text-[12rem]">
                        {"ECOMM".split("").map((char, i) => (
                            <span key={i} className="inline-block ecomm-letter">
                                {char}
                            </span>
                        ))}
                    </span>
                    <div
                        ref={psynapseRef}
                        className="w-full h-full text-center">
                        <span id="PSYNAPSE"
                            className="text-[8.5rem]">
                            {"PSYNAPSE".split("").map((char, i) => (
                                <span key={i} className="inline-block psynapse-letter">
                                    {char}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
});
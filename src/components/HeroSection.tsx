import { cn } from "../utils";
import { forwardRef, useRef, useEffect } from "react";
import gsap from "gsap";
import matrixShard from "../assets/images/matrix-shard-landing.png";
import ecommShard from "../assets/images/ecomm-shard-landing.png";
import psynapseShard from "../assets/images/psynapse-shard-landing.png";

export const HeroSection = forwardRef<HTMLDivElement>((_) => {
    const matrixRef = useRef<HTMLDivElement>(null);
    const ecommRef = useRef<HTMLDivElement>(null);
    const psynapseRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const shardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
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

            // Set initial state for shards wrapper
            gsap.set(shardsRef.current, { opacity: 0, visibility: "hidden", scale: 0.3 });

            // Set random rotation on each letter and remove text shadow initially
            gsap.set(matrixLetters, {
                rotation: () => gsap.utils.random(-180, 180),
                transformOrigin: "center center",
                color: '#0D0F12',
                textShadow: "0px 0px 0px rgba(255, 255, 255, 0)"
            });
            gsap.set(ecommLetters, {
                rotation: () => gsap.utils.random(-180, 180),
                transformOrigin: "center center",
                color: '#0D0F12',
                textShadow: "0px 0px 0px rgba(255, 255, 255, 0)"
            });
            gsap.set(psynapseLetters, {
                rotation: () => gsap.utils.random(-180, 180),
                transformOrigin: "center center",
                color: '#0D0F12',
                textShadow: "0px 0px 0px rgba(255, 255, 255, 0)"
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
                        stagger: 0,
                    },
                    "<" // runs simultaneously with the psynapseRef sliding up
                )
                .to([], { duration: 0.1 })
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
                        textShadow: "0px 0px 8px rgba(255, 255, 255, 0.56)",
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "<"
                )
                .to(
                    containerRef.current,
                    {
                        scale: 0.8,
                        duration: 1.2,
                        ease: "power3.out"
                    },
                )
                .to(
                    shardsRef.current,
                    {
                        opacity: 1,
                        visibility: "visible",
                        duration: 1.0,
                        ease: "power2.out",
                        scale: 1
                    },
                    "-=0.8"
                );
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div
            id="heroSection"
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
                    "w-full h-full absolute pt-24 left-0 "
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
            <div ref={shardsRef} className="w-full self-stretch z-20">
                <img src={matrixShard}
                    className="absolute top-[-50dvh] left-[-10dvh] lg:top-[-45dvh] lg:left-1/6 w-[200px] lg:w-[250px] h-auto animate-shard-float" />
                <img src={ecommShard}
                    className="absolute top-0 -translate-y-[20%] md:-translate-y-[50%] lg:-translate-y-24 lg:right-42 right-[-40px] md:right-[-20px] w-[200px] lg:w-[250px] h-auto animate-shard-float-1" />
                <img src={psynapseShard}
                    className="absolute top-[20dvh] left-[-5dvh] lg:bottom-16 lg:left-1/5 w-[200px] lg:w-[250px] h-auto animate-shard-float-2" />
            </div>
        </div>
    );
});
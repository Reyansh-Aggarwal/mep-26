import { cn } from "../../utils";
import { useRef } from "react";
import gsap from "gsap";
import matrixShard from "../../assets/images/matrix-shard-landing.png";
import ecommShard from "../../assets/images/ecomm-shard-landing.png";
import psynapseShard from "../../assets/images/psynapse-shard-landing.png";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export const HeroSection = (() => {
    const matrixRef = useRef<HTMLDivElement>(null);
    const ecommRef = useRef<HTMLDivElement>(null);
    const psynapseRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const shardsRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {
        //SCROLL TIMELINE
        const scrollTl = gsap.timeline({ paused: true });
        scrollTl.to([shardsRef.current], {
            yPercent: -40,
            duration: 2,


        }).to([matrixRef.current], {
            yPercent: -20,
            opacity: 0,
            duration: 2,
        }, "<")

        const tl = gsap.timeline({
            paused: true,
            defaults: { ease: "power3.out" },
            onComplete: () => {
                window.dispatchEvent(new CustomEvent("heroAnimationComplete"));

                ScrollTrigger.create({
                    animation: scrollTl,
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom 20%",
                    scrub: 1,
                    refreshPriority: 3,
                });
                ScrollTrigger.refresh();
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
        gsap.set(shardsRef.current, { visibility: "hidden", opacity: 0, yPercent: -100 });

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
                duration: 0.6,
            }
        )
            .to(
                matrixLetters,
                {
                    rotation: 0,
                    duration: 0.7,
                    ease: "back.out(0.7)",
                    stagger: 0.05,
                },
                0 // runs simultaneously with the matrixRef sliding up
            )
            .to(
                ecommRef.current,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.6,
                },

            )
            .to(
                ecommLetters,
                {
                    rotation: 0,
                    duration: 0.7,
                    ease: "back.out(0.7)",
                    stagger: 0.05,
                },
                "<" // runs simultaneously with the ecommRef sliding up
            )
            .to(
                psynapseRef.current,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.6,
                }
            )
            .to(
                psynapseLetters,
                {
                    rotation: 0,
                    duration: 0.7,
                    ease: "back.out(0.7)",
                    stagger: 0,
                },
                "<"
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
                matrixRef.current,
                {
                    scale: 0.8,
                    y: "15dvh",
                    duration: 1.2,
                    ease: "power3.out"
                },
            )
            .to(
                shardsRef.current,
                {
                    opacity: 1,
                    visibility: "visible",
                    duration: 2,
                    ease: "power3.out",
                    yPercent: 0,
                    stagger: 0.2,
                },
                "-=0.8"
            );

        const startAnimation = () => {
            tl.play();
        };

        if ((window as any).preloaderComplete) {
            startAnimation();
        } else {
            window.addEventListener("preloaderComplete", startAnimation);
        }

        return () => {
            window.removeEventListener("preloaderComplete", startAnimation);
        };
    }, []);

    return (
        <div
            id="heroSection"
            ref={containerRef}
            className={cn(
                "h-dvh w-full z-10",
                "text-center items-center justify-center",
                "flex flex-col pointer-events-none",
                "bg-none relative overflow-hidden"
            )}
        >
            <div
                ref={matrixRef}
                className={cn(
                    "font-primary text-black text-9xl",
                    "w-full absolute top-0 right-0 h-full"
                )}
            >
                <span id="MATRIX"
                    className="md:text-[12rem] text-[24dvw]">
                    {"MATRIX".split("").map((char, i) => (
                        <span key={i} className="inline-block matrix-letter">
                            {char}
                        </span>
                    ))}
                </span>
                <div
                    ref={ecommRef}
                    className="w-full h-full text-center flex flex-col justify-center"
                >
                    <span id="ECOMM"
                        className="text-[25dvw] md:text-[12.5rem]">
                        {"ECOMM".split("").map((char, i) => (
                            <span key={i} className="inline-block ecomm-letter">
                                {char}
                            </span>
                        ))}
                    </span>
                    <div
                        ref={psynapseRef}
                        className="w-full h-full text-center flex justify-center ">
                        <span id="PSYNAPSE"
                            className="text-[17.4dvw] md:text-[8.65rem]">
                            {"PSYNAPSE".split("").map((char, i) => (
                                <span key={i} className="inline-block psynapse-letter">
                                    {char}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
            <div ref={shardsRef} className="w-full h-full z-20">
                <img src={matrixShard}
                    className={cn(
                        "absolute top-[10dvh] left-[0] w-[175px] ",
                        "md:w-[225px] md:top-[20dvh] md:left-0",
                        "lg:top-[12dvh] lg:left-[16dvw]  lg:w-[275px]",
                        "h-auto animate-shard-float")} />
                <img src={ecommShard}
                    className={cn(
                        "absolute top-[40dvh] -translate-y-[20%] right-[-40px] w-[175px] ",
                        "md:right-[-5dvw] md:w-[225px] md:top-[50dvh] ",
                        "lg:top-1/2 lg:right-[10dvw] lg:w-[275px]",
                        "h-auto animate-shard-float-1")} />
                <img src={psynapseShard}
                    className={cn(
                        "absolute bottom-[25dvh] left-[0dvh] w-[175px] ",
                        "md:bottom-[0] md:left-0 md:w-[225px] ",
                        "lg:bottom-[0dvh] lg:left-[10dvw] lg:w-[275px]",
                        "h-auto animate-shard-float-2")} />
            </div>
        </div>
    );
});
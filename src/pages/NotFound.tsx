import { Navbar, navTo } from "../components/Navbar";
import { Cursor } from "../components/Cursor";
import { Footer } from "../components/Footer";
import InteractiveDotBackground from "../components/InteractiveDotBackground";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const NotFound = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dispatch heroRevealNav so the navbar slides in on this page
        window.dispatchEvent(new Event("heroRevealNav"));

        // Entry animation for the whole container
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );
        }

        // Glitch loop on the 404 heading
        if (headingRef.current) {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 4 });
            tl.to(headingRef.current, {
                skewX: 8,
                x: -6,
                duration: 0.08,
                ease: "power4.inOut",
            })
                .to(headingRef.current, {
                    skewX: -4,
                    x: 4,
                    duration: 0.06,
                    ease: "power4.inOut",
                })
                .to(headingRef.current, {
                    skewX: 2,
                    x: -2,
                    duration: 0.06,
                    ease: "power4.inOut",
                })
                .to(headingRef.current, {
                    skewX: 0,
                    x: 0,
                    duration: 0.1,
                    ease: "power4.out",
                });

            return () => {
                tl.kill();
            };
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-offwhite relative overflow-x-hidden md:cursor-none">
            <InteractiveDotBackground />

            <Navbar />
            <Cursor />

            {/* 404 Content */}
            <div className="relative flex items-center justify-center min-h-screen px-4">
                <div
                    ref={containerRef}
                    className="relative flex flex-col items-center gap-6 text-center opacity-0"
                >
                    {/* Glowing ring behind the 404 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-white/[0.04] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[360px] md:h-[360px] rounded-full border border-white/[0.06] pointer-events-none" />

                    {/* 404 Heading */}
                    <h1
                        ref={headingRef}
                        className="font-primary text-[8rem] md:text-[14rem] leading-none tracking-tighter bg-gradient-to-b from-offwhite via-offwhite/80 to-offwhite/20 bg-clip-text text-transparent select-none"
                        style={{
                            textShadow: "0 0 80px rgba(81,126,255,0.15), 0 0 160px rgba(255,0,140,0.08)",
                        }}
                    >
                        404
                    </h1>

                    {/* Subtitle */}
                    <p className="font-secondary text-lg md:text-xl text-offwhite/50 tracking-[0.25em] uppercase -mt-4">
                        Page not found
                    </p>

                    <p className="font-secondary text-sm md:text-base text-offwhite/30 max-w-md leading-relaxed">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>

                    {/* Go Home Button */}
                    <button
                        onClick={() => navTo("home")}
                        className={[
                            "mt-6 px-10 py-3 rounded-full cursor-focus cursor-none",
                            "font-secondary font-bold tracking-wider uppercase text-sm",
                            "text-white/60 bg-white/[0.06] backdrop-blur-md",
                            "border border-white/15",
                            "shadow-[0_4px_0_#524f5f]",
                            "transition-all duration-200",
                            "hover:text-white hover:border-white/40 hover:shadow-[0_4px_0_#726d84] hover:bg-white/[0.1]",
                            "active:translate-y-1 active:shadow-none active:bg-black active:text-white",
                        ].join(" ")}
                    >
                        ← Go Home
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};
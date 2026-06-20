import { cn } from "../utils";
import mepLogo from "../assets/logos/mep_logo.png";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLButtonElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);

    // 1. Maintain a single persistent reference slot for your Lenis instance
    const lenisRef = useRef<Lenis | null>(null);

    // 2. Initialize Lenis exactly ONCE when the component mounts
    useEffect(() => {
        const lenisInstance = new Lenis({
            anchors: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) - 0.001
        });

        lenisRef.current = lenisInstance;

        // Optional but highly recommended: Keep Lenis animation frame active 
        // if you aren't already running a global RAF loop elsewhere
        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        const rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenisInstance.destroy();
        };
    }, []);

    const scrollSection = (sectionId: string) => {
        setMenu(false);

        if (lenisRef.current) {
            if (sectionId === "heroSection") {
                // Scroll directly to the top pixel coordinate of the viewport
                lenisRef.current.scrollTo(0, { duration: 1 });
            } else {
                // Standard selector routing for layout elements below
                lenisRef.current.scrollTo(`#${sectionId}`, { duration: 1 });
            }
        }
    };

    useEffect(() => {
        if (!navbarRef.current) return;
        gsap.set(navbarRef.current, { yPercent: -200, opacity: 0 });
    }, []);

    useEffect(() => {
        if (!menuRef.current) return;

        let cx = window.innerWidth / 2; // Default fallbacks 
        let cy = 40;

        if (logoRef.current) {
            const rect = logoRef.current.getBoundingClientRect();
            cx = rect.left + rect.width / 2;
            cy = rect.top + rect.height / 2;
        }

        if (menu) {
            gsap.fromTo(menuRef.current,
                { clipPath: `circle(0% at ${cx}px ${cy}px)` },
                {
                    clipPath: `circle(150% at ${cx}px ${cy}px)`,
                    duration: 0.8,
                    ease: "power4.out"
                }
            );
        } else {
            gsap.to(menuRef.current, {
                clipPath: `circle(0% at ${cx}px ${cy}px)`,
                duration: 0.9,
                ease: "power4.inOut"
            });
        }
    }, [menu]);

    return (
        <div id="navbar"
            ref={navbarRef}
            className={cn("fixed top-0 left-0 w-full h-fit px-4 py-4 z-20")}
        >
            {/* Desktop Navigation Engine */}
            <div id="desktopBar"
                className={cn(
                    "flex-row w-full h-fit",
                    "hidden md:flex",
                    "border border-white/10 bg-white/[0.03]",
                    "backdrop-blur-sm",
                    "transition-all duration-300",
                    "rounded-full text-offwhite"
                )}
            >
                <button id="logo"
                    onClick={() => scrollSection("heroSection")}
                    className="px-8 py-2 w-fit text-white flex justify-center rounded-l-full active:bg-white/40 group"
                >
                    <img src={mepLogo} alt="MEP" className="h-8 w-18 group-active:invert" />
                </button>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="flex flex-row w-full items-center justify-center">
                    <button onClick={() => scrollSection("eventSection")}
                        className="active:bg-white/40 active:text-black px-2 py-2 basis-1/2 h-full"
                    >
                        EVENTS
                    </button>
                    <button onClick={() => scrollSection("membersSection")}
                        className="active:bg-white/40 active:text-black px-2 py-2 basis-1/2 h-full"
                    >
                        OUR TEAM
                    </button>
                </div>

                <div className="w-[1px] h-12 bg-white/10" />
                <button id="alumni"
                    className="block px-8 py-2 text-white rounded-r-full active:bg-white/40 active:text-black"
                >
                    ALUMNI
                </button>
            </div>

            {/* Mobile Navigation Engine */}
            <div id="mobileBar" className="flex md:hidden justify-center">
                <button id="logo"
                    ref={logoRef}
                    onClick={() => setMenu(!menu)}
                    className={cn(
                        "px-4 py-2 z-30 transition-all", // Boosted z-index so button stays clickable above overlay
                        "text-white rounded-2xl outline outline-offwhite",
                        menu ? "translate-y-[4px] shadow-none bg-black" : "shadow-[0_4px_0_#aaaacc] bg-offwhite"
                    )}
                >
                    <img src={mepLogo} alt="MEP" className="h-8 invert" />
                </button>

                <div ref={menuRef}
                    className={cn(
                        "fixed top-0 left-0 h-dvh w-dvw bg-black z-20",
                        "text-offwhite font-secondary font-bold text-6xl",
                        "flex flex-col justify-around py-40"
                    )}
                >
                    {/* Added the functional scrollSection handlers to mobile items */}
                    <button onClick={() => scrollSection("eventSection")} className="w-full px-10 text-right hover:underline">MEP'26</button>
                    <button onClick={() => scrollSection("membersSection")} className="w-full px-10 text-left hover:underline">OUR TEAM</button>
                    <button onClick={() => scrollSection("heroSection")} className="w-full px-10 text-right hover:underline">ALUMNI</button>
                </div>
            </div>
        </div>
    );
};
import { cn } from "../utils.tsx";
import mepLogo from "../assets/logos/mep_logo.png";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { useLocation, useNavigate } from "react-router";

// A reusable crack SVG overlay tailored to scale nicely across text bounding boxes
const GlassCrack = () => (
    <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
    >
        <path
            d="M 50,50 L 52,48 L 40,5 L 45,10 L 42,0 
               M 50,50 L 55,52 L 75,45 L 88,60 L 100,55 
               M 50,50 L 45,46 L 25,42 L 12,55 L 0,50
               M 50,50 L 54,55 L 68,78 L 80,92"
            stroke="#000000"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

let activeNavHandler: ((dest: string, skipTransition?: boolean) => void) | null = null;

export function navTo(dest: string) {
    console.log("navigated to", dest);
    if (activeNavHandler) {
        activeNavHandler(dest.startsWith("/") ? dest : "/" + dest);
    } else {
        console.warn("Navbar transition handler not initialized.");
    }
}

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const transitionOverlayRef = useRef<HTMLDivElement>(null); // Ref for the black screen transition
    const navigate = useNavigate();
    const currLocation = useLocation();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            anchors: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) - 0.001
        });

        lenisRef.current = lenisInstance;

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

    // Custom navigation handler that runs the GSAP transition before changing routes
    const handleTransitionNav = (dest: string, skipTransition = false) => {
        setMenu(false); // Close menu instantly or after

        if (skipTransition) {
            navigate(dest);
            return;
        }

        // Animate the hidden overlay to fill the screen
        gsap.fromTo(transitionOverlayRef.current,
            { scaleY: 0, transformOrigin: "bottom center" },
            {
                scaleY: 1,
                duration: 0.5,
                ease: "power3.inOut",
                onComplete: () => {
                    navigate(dest);
                    // Fade it back down out of view once page changes
                    gsap.to(transitionOverlayRef.current, {
                        scaleY: 0,
                        transformOrigin: "top center",
                        duration: 0.5,
                        ease: "power3.inOut",
                        delay: 0.1
                    });
                }
            }
        );
    };

    useEffect(() => {
        activeNavHandler = handleTransitionNav;
        return () => {
            activeNavHandler = null;
        };
    }, [handleTransitionNav]);

    useEffect(() => {
        const handleHeroComplete = () => {
            if (navbarRef.current) {
                gsap.to(navbarRef.current, {
                    translateY: 0,
                    duration: 1,
                    ease: "power4.out",
                });
            }
        };
        window.addEventListener("heroAnimationComplete", handleHeroComplete);

        return () => {
            window.removeEventListener("heroAnimationComplete", handleHeroComplete);
        };
    }, [currLocation.pathname === "/home"]);

    useEffect(() => {
        if (!menuRef.current) return;

        let cx = window.innerWidth / 2;
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
                duration: 0.7,
                ease: "power4.inOut"
            });
        }
    }, [menu]);

    return (
        <>
            <div
                ref={transitionOverlayRef}
                className="fixed inset-0 bg-black z-50 pointer-events-none scale-y-0"
            />

            <div id="navbar"
                ref={navbarRef}
                className={cn("fixed top-0 left-0 w-full h-fit px-4 py-4 z-20 bg-black/80 backdrop-blur-sm",
                    "select-none",
                    currLocation.pathname === "/home" && " -translate-y-full"
                )}
            >
                <div id="mobileBar" className="flex justify-around font-bold">
                    <div className="flex flex-row w-full items-center justify-around z-30 ">
                        <div id="brochure" className="relative w-fit rounded-full">
                            <div onClick={() => { handleTransitionNav("/brochure") }}
                                className={cn(
                                    "px-6 md:px-10 py-2.5 text-center md:flex hidden ",
                                    "text-white/40 bg-blue-100/20 backdrop-blur-md",
                                    "border border-white/20 rounded-full",
                                    "font-secondary font-bold tracking-wider uppercase",
                                    "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                                    "active:mt-1 active:shadow-none active:bg-black active:text-white"
                                )}
                            >
                                VIEW BROCHURE
                            </div>
                        </div>

                        <div id="logo"
                            ref={logoRef}
                            onClick={() => setMenu(!menu)}
                            className={cn(
                                "px-4 py-2 z-30 transition-all ",
                                "text-white rounded-2xl outline outline-offwhite",
                                menu ? "translate-y-[4px] shadow-none bg-black" : "shadow-[0_4px_0_#aaaacc] bg-offwhite"
                            )}
                        >
                            <img src={mepLogo} alt="MEP" className={cn(
                                "h-8",
                                !menu ? "invert" : ""
                            )} />
                        </div>

                        <div id="register" className="relative w-fit">
                            <div onClick={() => handleTransitionNav("/register")}
                                className={cn(
                                    "px-6 md:px-10 py-2.5 text-center md:flex hidden ",
                                    "text-white/40 bg-blue-100/20 backdrop-blur-md",
                                    "border border-white/20 rounded-full",
                                    "font-secondary font-bold tracking-wider uppercase",
                                    "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                                    "active:mt-1 active:shadow-none active:bg-black active:text-white"
                                )}
                            >
                                REGISTER NOW
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={menuRef}
                    className={cn(
                        "fixed top-0 left-0 h-dvh w-dvw bg-black z-20",
                        "text-offwhite font-secondary font-bold text-6xl",
                        "flex flex-col justify-around pt-26 md:px-32 text-center"
                    )}
                >
                    <div
                        onClick={() => handleTransitionNav("/home", true)}
                        className={cn(
                            "w-full px-10 md:text-right group ",
                            currLocation.pathname === "/home" && "text-white/50"
                        )}
                    >
                        <span className="inline-grid relative items-center justify-center">
                            <span className="grid-area-[1/1] transition-opacity group-hover:opacity-80">MEP'26</span>
                            {currLocation.pathname === "/home" && <GlassCrack />}
                        </span>
                    </div>

                    <div
                        onClick={() => handleTransitionNav("/members")}
                        className={cn(
                            "w-full px-10 md:text-left group ",
                            currLocation.pathname === "/members" && "text-white/50"
                        )}
                    >
                        <span className="inline-grid relative items-center justify-center">
                            <span className="grid-area-[1/1] transition-opacity group-hover:opacity-80 ">OUR TEAM</span>
                            {currLocation.pathname === "/members" && <GlassCrack />}
                        </span>
                    </div>

                    <div
                        onClick={() => handleTransitionNav("/alumni")}
                        className={cn(
                            "w-full px-10 md:text-right group ",
                            currLocation.pathname === "/alumni" && "text-white/50"
                        )}
                    >
                        <span className="inline-grid relative items-center justify-center">
                            <span className="grid-area-[1/1] transition-opacity group-hover:opacity-80">ALUMNI</span>
                            {currLocation.pathname === "/alumni" && <GlassCrack />}
                        </span>
                    </div>

                    <div className="flex flex-row justify-between w-full px-10 md:hidden text-lg">
                        <div id="brochure" className="relative w-fit rounded-full">
                            <div onClick={() => { handleTransitionNav("/brochure") }}
                                className={cn(
                                    "px-4 md:px-10 py-2.5 text-center w-fit ",
                                    "text-white/40 bg-blue-100/20 backdrop-blur-md",
                                    "border border-white/20 rounded-full",
                                    "font-secondary font-bold tracking-wider uppercase",
                                    "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                                    "active:translate-y-[4px] active:shadow-none active:bg-black active:text-white"
                                )}
                            >
                                VIEW BROCHURE
                            </div>
                        </div>
                        <div id="register" className="relative w-fit">
                            <div onClick={() => handleTransitionNav("/register")}
                                className={cn(
                                    "px-4 md:px-10 py-2.5 text-center ",
                                    "text-white/40 bg-blue-100/20 backdrop-blur-md",
                                    "border border-white/20 rounded-full",
                                    "font-secondary font-bold tracking-wider uppercase",
                                    "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                                    "active:translate-y-[4px] active:shadow-none active:bg-black active:text-white"
                                )}
                            >
                                REGISTER NOW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
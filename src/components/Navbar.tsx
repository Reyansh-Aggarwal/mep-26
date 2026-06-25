import { cn } from "../utils";
import mepLogo from "../assets/logos/mep_logo.png";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { useNavigate } from "react-router";

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
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

    function navTo(dest: string) {
        console.log("navigted to", dest);
        navigate("/" + dest);
    }
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
                duration: 0.7,
                ease: "power4.inOut"
            });
        }

    }, [menu]);

    return (
        <div id="navbar"
            ref={navbarRef}
            className={cn("fixed top-0 left-0 w-full h-fit px-4 py-4 z-20 bg-black/80 backdrop-blur-sm -translate-y-full")}
        >

            <div id="mobileBar" className="flex justify-around font-bold">
                <div className="flex flex-row w-full items-center justify-around z-30 ">
                    <div id="brochure"
                        className="relative w-fit rounded-full">
                        <div onClick={() => { navTo("brochure") }}
                            className={cn(
                                "px-6 md:px-10 py-2.5 text-center md:flex hidden",
                                ` text-white/40  bg-blue-100/20 backdrop-blur-md`,
                                ` border border-white/20 rounded-full`,
                                "font-secondary font-bold tracking-wider uppercase",
                                "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                                "active:mt-1 active:shadow-none active:bg-blue-100/40 active:text-blue-100")
                            }>
                            VIEW BROCHURE
                        </div>

                    </div>
                    <div id="logo"
                        ref={logoRef}
                        onClick={() => setMenu(!menu)}
                        className={cn(
                            "px-4 py-2 z-30 transition-all", // Boosted z-index so button stays clickable above overlay
                            "text-white rounded-2xl outline outline-offwhite",
                            menu ? "translate-y-[4px] shadow-none bg-black" : "shadow-[0_4px_0_#aaaacc] bg-offwhite"
                        )}
                    >
                        <img src={mepLogo} alt="MEP" className={cn(
                            "h-8",
                            !menu ? "invert" : ""
                        )} />
                    </div>

                    <div id="register"
                        className="relative w-fit">
                        <div onClick={() => navTo("register")}
                            className={cn(
                                "px-6 md:px-10 py-2.5 text-center md:flex hidden",
                                `text-white/40  bg-blue-100/20 backdrop-blur-md`,
                                `border border-white/20 rounded-full`,
                                "font-secondary font-bold tracking-wider uppercase",
                                "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                                "active:mt-1 active:shadow-none active:bg-blue-100/40 active:text-blue-100")
                            }>
                            REGISTER NOW
                        </div>

                    </div>
                </div>


            </div>
            <div ref={menuRef}
                className={cn(
                    "fixed top-0 left-0 h-dvh w-dvw bg-black z-20",
                    "text-offwhite font-secondary font-bold text-6xl",
                    "flex flex-col justify-around py-40 md:px-32"
                )}
            >
                {/* Added the functional scrollSection handlers to mobile items */}
                <div onClick={() => scrollSection("eventSection")}
                    className="w-full px-10 text-right hover:underline">
                    MEP'26
                </div>
                <div onClick={() => scrollSection("membersSection")}
                    className="w-full px-10 text-left hover:underline">
                    OUR TEAM
                </div>
                <div onClick={() => scrollSection("heroSection")}
                    className="w-full px-10 text-right hover:underline">
                    ALUMNI
                </div>
            </div>
        </div>
    );
};
import { cn } from "../utils";
import mepLogo from "../assets/logos/mep_logo.png";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLButtonElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);

    // Start hidden — Home.tsx drives the scroll-reveal animation
    useEffect(() => {
        if (!navbarRef.current) return;
        gsap.set(navbarRef.current, { yPercent: -200, opacity: 0 });
    }, []);

    useEffect(() => {
        if (!menuRef.current) return;

        // Calculate center of the mobile logo button relative to the viewport
        let cx = 40;
        let cy = 40;
        if (logoRef.current) {
            const rect = logoRef.current.getBoundingClientRect();
            cx = rect.left + rect.width / 2;
            cy = rect.top + rect.height / 2;
        }

        if (menu) {
            gsap.fromTo(menuRef.current,
                {
                    clipPath: `circle(0% at ${cx}px ${cy}px)`
                },
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
            className={cn(
                "fixed top-0 left-0 w-full h-fit px-4 py-4 z-20"
            )}>
            <div id="desktopBar"
                className={cn(
                    "flex-row justify-between w-full",
                    "hidden md:flex",
                    "shadow-[0_4px_0_#00000030] border border-white/10",
                    "rounded-full text-offwhite"
                )}>
                <button id="logo"
                    className={cn(
                        "px-4 py-2 w-40",
                        "text-white flex justify-center rounded-l-full bg-black",
                        ""
                    )}>
                    <img src={mepLogo} alt="MEP"
                        className="h-8 " />
                </button>
                <button id="gallery"
                    className={cn(
                        "text-white flex flex-col justify-center bg-black",
                        "active:scale-90 active:shadow-[4px_0_0_#ffffff30, -4px_0_0_#ffffff30]",
                        "bg-black w-full")}>
                    gallery
                </button>
                <button id="mep"
                    className={cn(
                        "active:shadow-[0_-2px_0_#333333]",
                        "active:translate-y-[4px]",
                        "px-2 rounded-lg basis-1/3")}>
                    mep'26
                </button>
                <button id="team"
                    className={cn(
                        "active:shadow-[0_-2px_0_#333333]",
                        "active:translate-y-[4px]",
                        "px-2 rounded-lg basis-1/3")}>
                    our team
                </button>
                <button id="alumni"
                    className={cn(
                        "block",
                        "px-4 py-2",
                        "text-white rounded-2xl",
                        "",
                        "active:translate-y-[4px]",
                    )}>
                    alumni

                </button>
            </div>
            <div id="mobileBar"
                className={cn(
                    "flex md:hidden justify-center"
                )}>
                <button id="logo"
                    ref={logoRef}
                    onClick={() => setMenu(!menu)}
                    className={cn(
                        "px-4 py-2 z-20",
                        "text-white rounded-2xl outline outline-offwhite",
                        "transition-all duration- bg-offwhite",
                        menu ? "translate-y-[4px] shadow-[0_0_0_0]" : "shadow-[0_4px_0_#aaaacc] bg-offwhite"
                    )}>
                    <img src={mepLogo} alt="MEP"
                        className={cn(
                            "h-8 ",
                            menu ? "invert" : "invert")} />
                </button>
                <div ref={menuRef}
                    style={{ clipPath: "circle(0% at 300px 300px)" }}
                    className={cn(
                        "fixed top-0 left-0 h-dvh w-dvw bg-black",
                        "text-offwhite font-secondary font-bold text-6xl",
                        "flex flex-col justify-around",
                        "py-40")}>
                    <button
                        className="w-full px-10 text-left hover:underline">
                        GALLERY
                    </button>
                    <button className="w-full px-10 text-right hover:underline">MEP'26</button>
                    <button className="w-full px-10 text-left hover:underline">OUR TEAM</button>
                    <button className="w-full px-10 text-right hover:underline">ALUMNI</button>
                </div>
            </div>
        </div >
    )
}
import { useEffect, useRef } from "react";
import { cn } from "../utils"
import gsap from "gsap";
export const ButtonBar = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    // Start hidden — Home.tsx drives the scroll-reveal animation
    useEffect(() => {
        if (!mainRef.current) return;
        gsap.set(mainRef.current, { yPercent: 120, opacity: 0 });
    }, []);

    return (
        <div ref={mainRef} id="buttonBar"
            className={cn(
                "bottom-0 h-[12dvh] w-full z-30 mt-[90dvh] ",
                "shadow-[0_-4px_0_#333333]",
                "rounded-t-3xl bg-black")}>
            <div id="buttonContainer"
                className={cn(
                    "flex flex-row px-4 md:px-12 ",
                    "font-bold text-xl md:text-2xl py-4",
                    "justify-around")}>
                <div id="brochure"
                    className="relative w-fit">
                    <div
                        className={cn(
                            "bg-yellow/20 text-yellow/5",
                            "py-2 px-4 md:px-8 hover:underline cursor-pointer",
                            "absolute top-1 pointer-events-none")
                        }>
                        VIEW BROCHURE
                    </div>
                    <button
                        className={cn(
                            "bg-yellow text-black z-10",
                            "py-2 px-4 md:px-8 hover:underline cursor-pointer",
                            "active:mt-1 active:underline ")
                        }>
                        VIEW BROCHURE
                    </button>

                </div>
                <div id="register"
                    className="relative w-fit">
                    <div
                        className={cn(
                            "bg-yellow/20 text-yellow/5",
                            "py-2 px-4 md:px-8 hover:underline cursor-pointer",
                            "absolute top-1 pointer-events-none")
                        }>
                        REGISTER NOW
                    </div>
                    <button
                        className={cn(
                            "bg-yellow text-black z-10",
                            "py-2 px-4 md:px-8 hover:underline cursor-pointer",
                            "active:mt-1 active:underline ")
                        }>
                        REGISTER NOW
                    </button>

                </div>
            </div>
        </div>
    )
}
import { useEffect, useRef } from "react";
import { cn } from "../utils"
import gsap from "gsap";
export const ButtonBar = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            const main = mainRef.current;
            // Phase 1: Set initial states before animation
            gsap.set(main, {
                yPercent: 120,
                opacity: 0,
            });
            // Phase 2: Slide in all three title blocks simultaneously
            tl.to({}, { duration: 1.2 })
            tl.to(
                main,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.7,
                }
            );

        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} id="buttonBar"
            className={cn(
                "fixed bottom-0 h-[12dvh] w-full z-30 ",
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
                            "py-2 px-8 hover:underline cursor-pointer",
                            "absolute top-1 pointer-events-none")
                        }>
                        VIEW BROCHURE
                    </div>
                    <button
                        className={cn(
                            "bg-yellow text-black z-10",
                            "py-2 px-8 hover:underline cursor-pointer",
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
                            "py-2 px-8 hover:underline cursor-pointer",
                            "absolute top-1 pointer-events-none")
                        }>
                        REGISTER NOW
                    </div>
                    <button
                        className={cn(
                            "bg-yellow text-black z-10",
                            "py-2 px-8 hover:underline cursor-pointer",
                            "active:mt-1 active:underline ")
                        }>
                        REGISTER NOW
                    </button>

                </div>
            </div>
        </div>
    )
}
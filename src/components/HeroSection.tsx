import { cn } from "../utils";
import { forwardRef, useRef, useEffect } from "react";
import gsap from "gsap";

export const HeroSection = forwardRef<HTMLDivElement>((_, ref) => {
    const matrixRef = useRef<HTMLDivElement>(null);
    const ecommRef = useRef<HTMLDivElement>(null);
    const psynapseRef = useRef<HTMLDivElement>(null);
    const addOnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Phase 1: Set initial states before animation
            gsap.set([matrixRef.current, psynapseRef.current], {
                xPercent: -120,
                opacity: 0,
            });
            gsap.set(ecommRef.current, {
                xPercent: 120,
                opacity: 0,
            });
            gsap.set(addOnRef.current, {
                yPercent: 100,
                opacity: 0,
                y: () =>
                    (matrixRef.current?.offsetHeight ?? 0) +
                    (addOnRef.current?.offsetHeight ?? 0),
            });

            // Phase 2: Slide in all three title blocks simultaneously
            tl.to(
                [matrixRef.current, psynapseRef.current],
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                },
                0
            ).to(
                ecommRef.current,
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                },
                0
            );

            tl.to(
                addOnRef.current,
                {
                    yPercent: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                },
                "-=0.15"
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={ref}
            className={cn(
                "min-h-dvh w-full overflow-hidden",
                "text-center items-center justify-center",
                "flex flex-col"
            )}
        >
            <div
                ref={addOnRef}
                className={cn(
                    "font-secondary text-white text-2xl w-full mb-4",
                    "drop-shadow-[0_0_4px_#fff] shadow-sm"
                )}
            >
                26th Bro. Aloysius
            </div>
            <div
                className={cn(
                    "font-primary text-black text-9xl lg:text-[11rem]",
                    "w-full"
                )}
            >
                <div ref={matrixRef} className="w-full bg-matrix text-left px-8">
                    MATRIX
                </div>
                <div ref={ecommRef} className="w-full bg-ecomm text-center px-8">
                    ECOMMBUZZ
                </div>
                <div ref={psynapseRef} className="w-full bg-psynapse text-right px-8">
                    PSYNAPSE
                </div>
            </div>
        </div>
    );
});
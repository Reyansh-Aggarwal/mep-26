import { useEffect, useRef, useState } from "react";
import mepLogo from "../assets/logos/mep_logo.png";
import { cn } from "../utils";

interface MEPLabelProps {
    className?: string;
    // Optional callback if you need to pass the boolean state back up to a parent component
    onStickyChange?: (isPast: boolean) => void;
}

export const MEPLabel = ({ className, onStickyChange }: MEPLabelProps) => {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [isScrolledPast, setIsScrolledPast] = useState(false);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        // The observer checks when our invisible anchor leaves the top threshold of the screen
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If boundingClientRect.top is less than 0, it means it has gone off-screen upward
                const isPast = !entry.isIntersecting && entry.boundingClientRect.top < 0;

                setIsScrolledPast(isPast);
                if (onStickyChange) onStickyChange(isPast);
            },
            {
                root: null, // viewport
                threshold: [1.0],
                rootMargin: "-24px 0px 0px 0px" // Matches the top-6 (24px) sticky offset
            }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [onStickyChange]);

    return (
        /* The main wrapper retains its layout slot so width never drops to 0 */
        <div className="relative flex justify-center items-center w-fit h-fit">


            <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-px pointer-events-none" />

            <div
                className={cn(
                    "sticky top-6 z-50",
                    "flex justify-center items-center w-fit px-8 ",
                    "outline-solid outline-4 outline-black transition-all duration-300 ease-out  ",

                    isScrolledPast ? "scale-90 shadow-2xl rounded-md bg-white" : "scale-100 shadow-none bg-myblack",
                    className
                )}
            >
                <img
                    src={mepLogo}
                    className="h-24 md:h-32 lg:h-[10rem] object-contain select-none"
                    alt="MEP Logo"
                />
            </div>
        </div>
    );
};
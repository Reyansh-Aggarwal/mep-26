import { useEffect, useRef } from "react";
import { cn } from "../utils.tsx";

export const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className={cn(
                "fixed pointer-events-none w-12 h-12 bg-white/10 rounded-full",
                "border border-white/20 shadow-lg backdrop-blur-[4px]",
                " z-[80] opacity-0 md:opacity-100")}
            style={{ transform: "translate(-50%, -50%)" }}
        />

    );
};
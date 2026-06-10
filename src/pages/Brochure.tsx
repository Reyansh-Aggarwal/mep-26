import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HalftoneBg } from "../components/HalftoneBg";
import { Footer } from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export const Brochure = () => {

    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = mainRef.current;
        if (!container) return;

        // Create the GSAP tween
        const ctx = gsap.context(() => {

        });

        return () => ctx.revert(); // Clean up on unmount to prevent memory leaks
    }, []);
    return (

        <div className="w-full min-h-screen bg-myblack"
            ref={mainRef}>
            <div
                className="w-full relative transition-colors duration-300 ease-in-out min-h-dvh"
            >

                <HalftoneBg />
                <span className="text-white text-8xl font-eternalo text-center w-full">
                    BROCHURE
                </span>


            </div>
            <Footer />
        </div>
    );
};

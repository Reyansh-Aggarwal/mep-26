import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Home = () => {
    const mainRef = useRef<HTMLDivElement>(null);



    return (
        <div ref={mainRef}>
            <div id="smooth-wrapper">
                <div
                    id="smooth-content"
                    className="min-h-dvh w-full overflow-hidden bg-slate-950 text-slate-100"
                >
                    <Navbar />
                    <HeroSection />
                    <AboutSection />
                </div>
            </div>
        </div>
    );
};
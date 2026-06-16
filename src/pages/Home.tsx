import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import { HeroSection } from "../components/HeroSection";
import dotBg from "../assets/images/dot-background.png";
import { Footer } from "../components/Footer";
import { ButtonBar } from "../components/ButtonBar";
import { Navbar } from "../components/Navbar";
import { EventSection } from "../components/EventSection";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            <div className="relative min-h-screen bg-black font-secondary ">
                <img src={dotBg} className="fixed top-0 left-0 w-full z-0" />

                {/* Main content floats above and scrolls off */}
                <div className="relative z-10">
                    <Navbar />
                    <HeroSection />
                    <hr className="h-[3px] mx-8 bg-offwhite/10 mx-4 rounded" />
                    <EventSection />
                    <ButtonBar />
                    <Footer />
                </div>
            </div>
        </ReactLenis>
    );
};

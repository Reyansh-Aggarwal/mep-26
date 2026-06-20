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
import { GallerySection } from "../components/GallerySection";
import { MembersSection } from "../components/MembersSection";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        // Lock scroll initially
        lenisRef.current?.lenis?.stop();

        let revealTl: gsap.core.Timeline | null = null;

        const handleHeroComplete = () => {
            const navbar = document.getElementById("navbar");
            const buttonBar = document.getElementById("buttonBar");
            if (!navbar || !buttonBar) return;

            // Build a timeline to play automatically with a 1.5s delay
            revealTl = gsap.timeline({
                delay: 1.5,
                onComplete: () => {
                    lenisRef.current?.lenis?.start();
                }
            });

            revealTl
                .to(navbar, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                }, 0)
                .to(buttonBar, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                }, 0);
        };

        window.addEventListener("heroAnimationComplete", handleHeroComplete);

        return () => {
            gsap.ticker.remove(update);
            window.removeEventListener("heroAnimationComplete", handleHeroComplete);
        };
    }, []);

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            <div className="relative min-h-screen bg-black font-secondary ">
                <img src={dotBg} className="fixed top-0 left-0 w-full z-0" />

                {/* Main content floats above and scrolls off */}
                <HeroSection />
                <div className="relative z-20">
                    <Navbar />

                    <ButtonBar />
                    <EventSection />
                    <GallerySection />
                    <MembersSection />
                    <Footer />
                </div>
            </div>
        </ReactLenis>
    );
};

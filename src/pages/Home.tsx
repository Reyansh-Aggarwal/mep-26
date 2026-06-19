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
        let progress = 0;
        let wheelHandler: ((e: WheelEvent) => void) | null = null;
        let touchHandler: ((e: TouchEvent) => void) | null = null;
        let lastTouchY = 0;

        const handleHeroComplete = () => {
            const navbar = document.getElementById("navbar");
            const buttonBar = document.getElementById("buttonBar");
            if (!navbar || !buttonBar) return;

            // Build a paused timeline to scrub through
            revealTl = gsap.timeline({ paused: true });
            revealTl
                .to(navbar, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "none",
                }, 0)
                .to(buttonBar, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "none",
                }, 0);

            wheelHandler = (e: WheelEvent) => {
                e.preventDefault();
                // Normalize delta: ~100px of scroll = full reveal
                progress = Math.min(1, Math.max(0, progress + e.deltaY / 300));
                revealTl!.progress(progress);

                if (progress >= 1) {
                    window.removeEventListener("wheel", wheelHandler!, true);
                    window.removeEventListener("touchstart", touchStartHandler as any);
                    window.removeEventListener("touchmove", touchHandler!, true);
                    lenisRef.current?.lenis?.start();
                }
            };

            const touchStartHandler = (e: TouchEvent) => {
                lastTouchY = e.touches[0].clientY;
            };

            touchHandler = (e: TouchEvent) => {
                e.preventDefault();
                const currentY = e.touches[0].clientY;
                const deltaY = lastTouchY - currentY; // positive = scroll down
                lastTouchY = currentY;

                progress = Math.min(1, Math.max(0, progress + deltaY / 200));
                revealTl!.progress(progress);

                if (progress >= 1) {
                    window.removeEventListener("wheel", wheelHandler!, true);
                    window.removeEventListener("touchstart", touchStartHandler as any);
                    window.removeEventListener("touchmove", touchHandler!, true);
                    lenisRef.current?.lenis?.start();
                }
            };

            window.addEventListener("wheel", wheelHandler, { capture: true, passive: false });
            window.addEventListener("touchstart", touchStartHandler, { passive: true });
            window.addEventListener("touchmove", touchHandler, { capture: true, passive: false });
        };

        window.addEventListener("heroAnimationComplete", handleHeroComplete);

        return () => {
            gsap.ticker.remove(update);
            window.removeEventListener("heroAnimationComplete", handleHeroComplete);
            if (wheelHandler) window.removeEventListener("wheel", wheelHandler, true);
            if (touchHandler) window.removeEventListener("touchmove", touchHandler, true);
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
                    <Footer />
                </div>
            </div>
        </ReactLenis>
    );
};

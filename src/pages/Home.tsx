import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import { HeroSection } from "../components/Home/HeroSection";
import dotBg from "../assets/images/dot-background.png";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { EventSection } from "../components/Home/EventSection";
import { GallerySection } from "../components/Home/GallerySection";
import { MembersSection } from "../components/Home/MembersSection";
import { Cursor } from "../components/Cursor";
import { Ribbon } from "../components/Ribbon";

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
        let revealed = false;

        // Reveal navbar + button bar. Idempotent — an early skip (heroRevealNav) or the
        // natural end (heroAnimationComplete), whichever fires first, wins; later calls
        // are no-ops. `unlock` starts Lenis when the reveal finishes.
        const revealChrome = (delay: number, unlock: boolean) => {
            if (revealed) return;
            const navbar = document.getElementById("navbar");
            const buttonBar = document.getElementById("buttonBar");
            if (!navbar || !buttonBar) return;
            revealed = true;

            revealTl = gsap.timeline({
                delay,
                onComplete: () => {
                    if (unlock) lenisRef.current?.lenis?.start();
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

        // Natural end: reveal (if a skip hasn't already) and, since the intro is truly
        // over, unlock the page now. On the skip path the navbar is already revealed, so
        // revealChrome no-ops and we just start Lenis here.
        const handleHeroComplete = () => {
            if (revealed) {
                // Skip path: navbar already up, intro just ended — unlock now.
                lenisRef.current?.lenis?.start();
            } else {
                // Natural path: unlock after the delayed reveal finishes (unchanged).
                revealChrome(1.5, true);
            }
        };
        // Early skip: reveal the navbar ahead of the end, but keep scroll locked.
        const handleHeroReveal = () => revealChrome(0, false);

        window.addEventListener("heroAnimationComplete", handleHeroComplete);
        window.addEventListener("heroRevealNav", handleHeroReveal);

        return () => {
            gsap.ticker.remove(update);
            window.removeEventListener("heroAnimationComplete", handleHeroComplete);
            window.removeEventListener("heroRevealNav", handleHeroReveal);
        };
    }, []);

    return (
        <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
            <div className="relative min-h-screen bg-black font-secondary w-full cursor-auto md:cursor-none overflow-x-clip">
                <div className="fixed inset-0 w-full h-full z-0 opacity-30 pointer-events-none">
                    <img
                        src={dotBg}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 w-full flex flex-col">
                    <Navbar />
                    <Cursor />
                    <HeroSection />
                    <Ribbon content={"EVENTS"} />
                    <EventSection />
                    <Ribbon content={"EVENTS"} />
                    <div className="sticky top-0 z-0">
                        <GallerySection />
                    </div>
                    <div className="relative z-10 bg-black">
                        <Ribbon content={"MEET OUR TEAM"} />
                        <MembersSection />
                        <Footer />
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
};

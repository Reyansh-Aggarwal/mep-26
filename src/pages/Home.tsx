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
        <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
            <div className="relative min-h-screen bg-black font-secondary w-full cursor-auto md:cursor-none overflow-x-hidden">
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
                    <GallerySection />
                    <Ribbon content={"MEET OUR TEAM"} />
                    <MembersSection />
                    <Footer />
                </div>
            </div>
        </ReactLenis>
    );
};

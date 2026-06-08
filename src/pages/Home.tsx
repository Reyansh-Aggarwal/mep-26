import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { GallerySection } from "../components/GallerySection";
import { BriefingSection } from "../components/BriefingSection";
import { HalftoneBg } from "../components/HalftoneBg";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const briefingRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const container = mainRef.current;
        const aboutSection = aboutRef.current;
        const heroSection = heroRef.current;
        const gallerySection = galleryRef.current;
        const briefingSection = briefingRef.current;
        if (!container || !aboutSection || !heroSection || !gallerySection || !briefingSection) return;

        // Create the GSAP tween
        const ctx = gsap.context(() => {
            gsap.to(container, {
                backgroundColor: "#161616", //myblack
                opacity: 1,
                scrollTrigger: {
                    trigger: heroSection,
                    start: "top 60%",
                    end: "top 20%",
                    scrub: 0.8,
                    markers: false,
                },
            });
            gsap.to(container, {
                backgroundColor: "#070707",
                opacity: 1,
                scrollTrigger: {
                    trigger: aboutSection,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 0.8,
                    markers: false,
                },
            });
            gsap.to(container, {
                backgroundColor: "#ffffff",
                opacity: 1,
                scrollTrigger: {
                    trigger: gallerySection,
                    start: "top 50%",
                    end: "top 20%",
                    scrub: 0.8,
                    markers: false,
                },
            });
        });

        return () => ctx.revert(); // Clean up on unmount to prevent memory leaks
    }, []);
    return (

        <div className="w-full min-h-screen bg-myblack"
            ref={mainRef}>
            <div
                className="w-full relative transition-colors duration-300 ease-in-out"
            >
                <HalftoneBg />
                <Navbar />
                <HeroSection ref={heroRef} />
                <AboutSection ref={aboutRef} />
                <GallerySection ref={galleryRef} />
                <BriefingSection ref={briefingRef} />
            </div>
        </div>
    );
};

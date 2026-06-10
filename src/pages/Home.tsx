import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { GallerySection } from "../components/GallerySection";
import { BriefingSection } from "../components/BriefingSection";
import { HalftoneBg } from "../components/HalftoneBg";
import { Footer } from "../components/Footer";

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
            gsap.fromTo(container,
                { backgroundColor: "#161616" },
                {
                    backgroundColor: "#161616",
                    opacity: 1,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: heroSection,
                        start: "top 60%",
                        end: "top 20%",
                        scrub: 0.8,
                        markers: false,
                    },
                }
            );
            gsap.fromTo(container,
                { backgroundColor: "#161616" },
                {
                    backgroundColor: "#070707",
                    opacity: 1,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: aboutSection,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 0.8,
                        markers: false,
                    },
                }
            );
            gsap.fromTo(container,
                { backgroundColor: "#070707" },
                {
                    backgroundColor: "#cfcfcf",
                    opacity: 1,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: gallerySection,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 0.8,
                        markers: false,
                    },
                }
            );
            gsap.fromTo(container,
                { backgroundColor: "#cfcfcf" },
                {
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: briefingSection,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 0.8,
                        markers: false,
                    },
                }
            );
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
            <Footer />
        </div>
    );
};

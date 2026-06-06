import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Gallery } from "../components/Gallery";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const Home = () => {

    return (

        <div className="w-full min-h-screen bg-slate-950 text-slate-100">
            <div
                id="main-layout-root"
                className="w-full relative"
            >
                <Navbar />
                <HeroSection />
                <AboutSection />
                <Gallery />
            </div>
        </div>
    );
};
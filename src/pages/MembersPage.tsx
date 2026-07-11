import { Navbar } from "../components/Navbar";
import { Cursor } from "../components/Cursor";
import { clubData } from "../data/clubs";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Footer } from "../components/Footer";
import { MembersHero } from "../components/Team/MembersHero";
import { ClubSection } from "../components/Team/ClubSection";
import InteractiveDotBackground from "../components/InteractiveDotBackground";

gsap.registerPlugin(ScrollTrigger);


export const MembersPage = () => {
    useEffect(() => {
        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-offwhite relative overflow-x-hidden md:cursor-none">
            <InteractiveDotBackground />
            {/* Ambient glows */}
            <div className="fixed w-[600px] h-[600px] bg-[var(--color-matrix)]/[0.04] rounded-full blur-[160px] pointer-events-none top-0 left-0 -translate-x-1/3 -translate-y-1/3" />
            <div className="fixed w-[500px] h-[500px] bg-[var(--color-ecomm)]/[0.04] rounded-full blur-[140px] pointer-events-none top-1/2 right-0 translate-x-1/3" />
            <div className="fixed w-[600px] h-[600px] bg-[var(--color-psynapse)]/[0.04] rounded-full blur-[160px] pointer-events-none bottom-0 left-1/4 translate-y-1/3" />

            <Navbar />
            <Cursor />

            <MembersHero />

            <div className="flex flex-col items-center">
                {clubData.map((club, idx) => (
                    <ClubSection key={idx} club={club} isLast={idx === clubData.length - 1} />
                ))}
            </div>

            {/* Footer breathing room */}
            <div className="h-24" />
            <Footer />
        </div>
    );
};


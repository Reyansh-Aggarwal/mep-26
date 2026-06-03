import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";

export const Home = () => {

    return (
        <div className="min-h-dvh w-full overflow-hidden scroll-smooth bg-slate-950 text-slate-100">

            <Navbar />

            {/*HERO SECTION*/}
            <HeroSection />

            {/* ABOUT US */}
            <AboutSection />
        </div>


    );
}
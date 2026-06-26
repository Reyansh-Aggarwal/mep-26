import { useGSAP } from "@gsap/react";
import gallery1 from "../../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../../assets/images/gallery/gallery-6.jpg";
import gallery7 from "../../assets/images/gallery/gallery-7.jpg";
import gallery8 from "../../assets/images/gallery/gallery-8.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = () => {
    const images = [
        gallery1, gallery2, gallery3, gallery4,
        gallery5, gallery6, gallery7, gallery8,
    ];

    const forwardRowRef = useRef<HTMLDivElement>(null);
    const backwardRowRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.set([forwardRowRef.current, backwardRowRef.current], {
            y: 0,
            opacity: 1,
        });

        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });

        // GSAP changes Y and opacity smoothly on the wrappers
        scrollTl.to(forwardRowRef.current, {
            x: -900,
            opacity: 0.8,
            ease: "none"
        });

        scrollTl.to(backwardRowRef.current, {
            x: 900,
            opacity: 0.8,
            ease: "none"
        }, "<");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden py-24">
            {/* Ambient backdrop glow layers */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-matrix)]/5 rounded-full blur-[140px] pointer-events-none top-1/4 left-1/4" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-psynapse)]/5 rounded-full blur-[120px] pointer-events-none bottom-1/4 right-1/4" />

            {/* FIRST STRIP */}
            <div className="w-full overflow-hidden relative z-10 py-4 select-none">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <div ref={forwardRowRef} className="w-full will-change-transform">
                    {/* The child handles the horizontal marquee CSS animation exclusively */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        <div className="flex gap-6 px-3">
                            {images.map((img, idx) => (
                                <div key={`1-${idx}`} className="relative group overflow-hidden rounded-2xl border border-white/10 w-[280px] md:w-[380px] h-[200px] md:h-[260px] transition-all duration-300 hover:border-yellow/50">
                                    <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={`Gallery Image ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-6 px-3">
                            {images.map((img, idx) => (
                                <div key={`2-${idx}`} className="relative group overflow-hidden rounded-2xl border border-white/10 w-[280px] md:w-[380px] h-[200px] md:h-[260px] transition-all duration-300 hover:border-yellow/50">
                                    <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={`Gallery Image ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SECOND STRIP */}
            <div className="w-full overflow-hidden relative z-10 py-4 select-none mt-4">
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <div ref={backwardRowRef} className="w-full will-change-transform">
                    <div className="flex w-max animate-reverse-marquee hover:[animation-play-state:paused]">
                        <div className="flex gap-6 px-3">
                            {images.map((img, idx) => (
                                <div key={`rev-1-${idx}`} className="relative group overflow-hidden rounded-2xl border border-white/10 w-[280px] md:w-[380px] h-[200px] md:h-[260px] transition-all duration-300 hover:border-yellow/50">
                                    <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={`Gallery Image ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-6 px-3">
                            {images.map((img, idx) => (
                                <div key={`rev-2-${idx}`} className="relative group overflow-hidden rounded-2xl border border-white/10 w-[280px] md:w-[380px] h-[200px] md:h-[260px] transition-all duration-300 hover:border-yellow/50">
                                    <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={`Gallery Image ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
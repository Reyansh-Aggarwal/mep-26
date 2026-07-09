import { useGSAP } from "@gsap/react";
import gallery1 from "../../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../../assets/images/gallery/gallery-6.jpg";
import gallery7 from "../../assets/images/gallery/gallery-7.jpg";
import gallery8 from "../../assets/images/gallery/gallery-8.jpg";
import gallery9 from "../../assets/images/gallery/gallery-9.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../utils.tsx";

gsap.registerPlugin(ScrollTrigger);

export const GallerySection = () => {
    const images = [
        gallery1, gallery2, gallery3, gallery4,
        gallery5, gallery6, gallery7, gallery8,
        gallery9
    ];

    const outerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const outer = outerRef.current;
        const sticky = stickyRef.current;
        const track = trackRef.current;
        if (!outer || !sticky || !track) return;

        const mm = gsap.matchMedia();

        // Desktop/tablet: sticky wrapper holds the viewport while vertical scroll

        mm.add("(min-width: 768px)", () => {
            const getShift = () => Math.max(0, track.scrollWidth - sticky.clientWidth);

            const panTween = gsap.to(track, {
                x: () => -getShift(),
                ease: "none",
                scrollTrigger: {
                    trigger: outer,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            if (progressRef.current) {
                gsap.fromTo(
                    progressRef.current,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: outer,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 1,
                        },
                    }
                );
            }

            return () => panTween.kill();
        });

        // Mobile: no horizontal travel — reveal frames as they enter the viewport.
        mm.add("(max-width: 767px)", () => {
            const frames = gsap.utils.toArray<HTMLElement>(".gallery-frame");
            frames.forEach((frame) => {
                gsap.fromTo(
                    frame,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power3.out",
                        scrollTrigger: { trigger: frame, start: "top 85%" },
                    }
                );
            });
        });

        return () => mm.revert();
    }, { scope: outerRef });

    return (
        <div
            ref={outerRef}
            className="relative w-full md:h-[280vh]"
        >
            {/* Sticky viewport (desktop) / normal flow (mobile) */}
            <div
                ref={stickyRef}
                className="md:sticky md:top-0 md:h-screen w-full overflow-hidden flex flex-col justify-center"
            >

                {/* Progress bar (desktop) */}
                <div className="hidden md:block absolute bottom-8 left-12 right-32 h-px bg-white/10 z-30">
                    <div
                        ref={progressRef}
                        className="h-full w-full origin-left bg-gradient-to-r from-yellow to-yellow/20 scale-x-0"
                    />
                </div>

                {/* Desktop: horizontal track. Mobile: vertical grid. */}
                <div
                    ref={trackRef}
                    className={cn(
                        "md:flex md:items-center md:w-max md:will-change-transform",
                        "grid grid-cols-1 gap-6 px-4 py-24 md:gap-8 md:px-[12vw] md:py-0"
                    )}
                >
                    {images.map((img, idx) => (
                        <figure
                            key={idx}
                            className={cn(
                                "gallery-frame group relative overflow-hidden border border-white/10",
                                "transition-colors duration-500 hover:border-yellow/40",
                                "w-full h-[56vw] md:h-[62vh] md:shrink-0",
                                idx % 2 === 1 ? "md:mt-20" : "md:mb-20",
                                idx === 8 ? "w-max" : "md:w-[44vh]"
                            )}
                        >
                            <img
                                src={img}
                                loading="lazy"
                                alt={`MEP moment ${idx + 1}`}
                                className={cn(
                                    "h-full object-cover transition-transform duration-500",
                                    idx === 8 ? "w-auto" : "w-full")}
                            />
                            <span className="absolute bottom-3 left-4 font-primary text-sm text-offwhite/70 tracking-widest">
                                {String(idx + 1).padStart(2, "0")}
                            </span>
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
};

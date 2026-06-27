import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MembersHero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" })
            .fromTo(subtitleRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
            .fromTo(
                dotsRef.current,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.4, stagger: 0.15, ease: "back.out(2)" },
                "-=0.3"
            );
    }, []);

    return (
        <div className="text-center pt-28 pb-20 select-none px-4">
            <h2
                ref={titleRef}
                className="font-primary text-[clamp(72px,12vw,160px)] text-offwhite tracking-wider uppercase leading-none opacity-0"
                style={{ textShadow: "0 0 80px rgba(255,255,255,0.08)" }}
            >
                OUR TEAM
            </h2>

        </div>
    );
}
import gallery1 from "../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../assets/images/gallery/gallery-6.jpg";
import gallery7 from "../assets/images/gallery/gallery-7.jpg";
import gallery8 from "../assets/images/gallery/gallery-8.jpg";

export const GallerySection = () => {
    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
    ];

    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden py-24">
            {/* Ambient backdrop glow layers */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-matrix)]/5 rounded-full blur-[140px] pointer-events-none top-1/4 left-1/4" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-psynapse)]/5 rounded-full blur-[120px] pointer-events-none bottom-1/4 right-1/4" />

            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-4 select-none">
                <h2 className="font-primary text-7xl md:text-9xl text-offwhite tracking-wider uppercase text-shadow-[0_0_8px_#ffffff50]">
                    GALLERY
                </h2>
                <p className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mt-3">

                </p>
            </div>

            {/* Infinitely Sliding Strip */}
            <div className="w-full overflow-hidden relative z-10 py-4 select-none">
                {/* Fade overlays on the sides for a premium look */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
                    {/* First set of images */}
                    <div className="flex gap-6 px-3">
                        {images.map((img, idx) => (
                            <div key={`1-${idx}`} className="relative group overflow-hidden rounded-2xl border border-white/10 w-[280px] md:w-[380px] h-[200px] md:h-[260px] transition-all duration-300 hover:border-yellow/50">
                                <img
                                    src={img}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    alt={`Gallery Image ${idx + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Second identical set of images for seamless scroll */}
                    <div className="flex gap-6 px-3">
                        {images.map((img, idx) => (
                            <div key={`2-${idx}`} className="relative group overflow-hidden rounded-2xl border border-white/10 w-[280px] md:w-[380px] h-[200px] md:h-[260px] transition-all duration-300 hover:border-yellow/50">
                                <img
                                    src={img}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    alt={`Gallery Image ${idx + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
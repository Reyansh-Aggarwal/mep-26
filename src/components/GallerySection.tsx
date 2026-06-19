import glassShard from "../assets/images/glass_small.png"

export const GallerySection = () => {
    return (
        <div className="h-dvh w-full bg-black flex items-center justify-center relative overflow-hidden">
            {/* Ambient backdrop glow layers */}
            <div className="absolute w-[450px] h-[450px] bg-[var(--color-matrix)]/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute w-[350px] h-[350px] bg-[var(--color-psynapse)]/5 rounded-full blur-[110px] pointer-events-none delay-1000" />

            <div className="relative group flex items-center justify-center">
                <img
                    src={glassShard}
                    alt="Glass Shard"
                    className="glass-shard-glow max-h-[60vh] max-w-[80vw] object-contain relative z-10"
                />
            </div>
        </div>
    )
}
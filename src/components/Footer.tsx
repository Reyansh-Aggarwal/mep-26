import { useNavigate } from "react-router"
import { cn } from "../utils.tsx"

export const Footer = () => {
    const navigate = useNavigate();

    const navTo = (path: string) => {
        navigate("/" + path);
    }

    return (
        <div
            className={cn(
                "relative w-full bg-black overflow-hidden",
                "flex flex-col items-center justify-center pt-24 pb-12 z-10"
            )}>



            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="w-full max-w-7xl px-8 flex flex-col md:flex-row gap-12 md:gap-8 justify-between relative z-10">

                {/* Left: Branding */}
                <div className="flex flex-col gap-4 basis-1/2">
                    <span className="font-primary text-6xl md:text-7xl lg:text-8xl text-offwhite uppercase tracking-wider text-shadow-[0_0_8px_#ffffff50]">
                        MEP'26
                    </span>

                </div>

                {/* Right: Links Sections */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 basis-1/2 md:justify-around">
                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
                        <span className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mb-2">
                            Where to?
                        </span>
                        <div className="flex flex-col gap-3 font-secondary text-offwhite/80 uppercase tracking-wider text-sm">
                            <span onClick={() => navTo("home")} className="hover:text-yellow transition-colors duration-300 cursor-pointer flex items-center group">
                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-yellow">→</span>
                                Home
                            </span>
                            <span onClick={() => navTo("brochure")} className="hover:text-yellow transition-colors duration-300 cursor-pointer flex items-center group">
                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-yellow">→</span>
                                Brochure
                            </span>
                            <span onClick={() => navTo("register")} className="hover:text-yellow transition-colors duration-300 cursor-pointer flex items-center group">
                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-yellow">→</span>
                                Register
                            </span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <span className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mb-2">
                            Need help?
                        </span>
                        <div className="flex flex-col gap-3 font-secondary text-offwhite/80 tracking-widest text-sm">
                            <a href="mailto:thematrixclan2026@gmail.com" className="hover:text-yellow transition-colors duration-300 cursor-pointer">
                                thematrixclan2026@gmail.com
                            </a>
                            <a href="https://instagram.com/thematrixclan.msm" className="hover:text-yellow transition-colors duration-300 cursor-pointer">
                                @thematrixclan.msm
                            </a>
                            <a href="tel:+919086222000" className="hover:text-yellow transition-colors duration-300 cursor-pointer">
                                +919086222000
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="w-full max-w-7xl px-8 mt-24 flex flex-col md:flex-row items-center justify-between font-secondary text-xs text-offwhite/30 uppercase tracking-widest relative z-10 border-t border-white/5 pt-8">
                <span>2026 Matrix Clan.</span>
            </div>
        </div>
    )
};
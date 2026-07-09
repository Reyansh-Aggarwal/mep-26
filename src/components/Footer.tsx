import { useNavigate } from "react-router"
import { Fragment } from "react"
import { cn } from "../utils.tsx"
import { socialData } from "../data/clubs.ts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faEnvelope);

export const Footer = () => {
    const navigate = useNavigate();
    const clubs = ["matrix", "ecomm", "psynapse"] as const;

    const navTo = (path: string) => {
        navigate("/" + path);
    }

    return (
        <div
            className={cn(
                "relative w-full bg-black overflow-hidden select-none",
                "flex flex-col items-center justify-center pt-24 pb-12 z-10"
            )}>

            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="w-full max-w-7xl px-8 flex flex-col md:flex-col gap-12 md:gap-8 justify-between relative z-10">

                {/* Left: Branding */}
                <div className="flex flex-col gap-4 basis-1/2">
                    <span className="font-primary text-6xl md:text-7xl lg:text-8xl text-offwhite uppercase tracking-wider text-shadow-[0_0_8px_#ffffff50]">
                        MEP'26
                    </span>

                </div>

                {/* Right: Links Sections */}
                <div className="flex flex-col md:flex-col gap-8 md:gap-16 basis-1/2 md:justify-around">
                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
                        <span className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mb-2">
                            Where to?
                        </span>
                        <div className="flex flex-col gap-3 font-secondary text-offwhite/80 uppercase tracking-wider text-sm">
                            <span onClick={() => navTo("home")} className="hover:text-yellow transition-colors duration-300 cursor-focus flex items-center group">
                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-yellow">→</span>
                                Home
                            </span>
                            <span onClick={() => navTo("brochure")} className="hover:text-yellow transition-colors duration-300 cursor-focus flex items-center group">
                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-yellow">→</span>
                                Brochure
                            </span>
                            <span onClick={() => navTo("register")} className="hover:text-yellow transition-colors duration-300 cursor-focus flex items-center group">
                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-yellow">→</span>
                                Register
                            </span>
                            <span onClick={() => navTo("members")} className="hover:text-yellow transition-colors duration-300 cursor-focus flex items-center group">
                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-yellow">→</span>
                                Our Team
                            </span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="w-full flex flex-col gap-4">
                        <span className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mb-2">
                            Need help?
                        </span>
                        <div className="flex gap-4 items-center text-offwhite/80 max-md:text-md text-lg font-medium">
                            <FontAwesomeIcon icon={faInstagram} className="h-16" />
                            <a
                                href={`https://instagram.com/mepfest`}
                                className={cn(
                                    "transition-all duration-300 cursor-focus cursor-none flex gap-2 items-center",
                                    "hover:bg-gradient-to-r hover:from-matrix hover:via-ecomm hover:to-psynapse hover:bg-clip-text hover:text-transparent"
                                )}
                            >
                                @mepfest
                            </a>
                            <div className="h-[1px] w-full bg-white/10 lg:h-24 lg:hidden " />
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between lg:items-center font-secondary text-offwhite/80 tracking-widest text-sm">
                            {clubs.map((club, index) => (
                                <Fragment key={club}>
                                    <div
                                        className="flex flex-row gap-2 lg:justify-center items-center">
                                        <img src={socialData[club].logo}
                                            className="w-auto h-24" />
                                        <div
                                            className="flex flex-col gap-3 justify-center">

                                            <a
                                                href={`mailto:${socialData[club].email}`}
                                                style={{ '--hover-color': `var(--color-${club})` } as React.CSSProperties}
                                                className="transition-colors duration-300 cursor-focus cursor-none flex gap-2 items-center group group-hover:text-yellow"
                                            >
                                                <FontAwesomeIcon icon={faEnvelope}
                                                    className="transition-colors duration-300 group-hover:text-[var(--hover-color)]" />
                                                <p
                                                    className="group-hover:text-yellow transition-colors duration-300">
                                                    {socialData[club].email}
                                                </p>
                                            </a>
                                            <a
                                                href={`tel:${socialData[club].phone}`}
                                                style={{ '--hover-color': `var(--color-${club})` } as React.CSSProperties}
                                                className="transition-colors duration-300 cursor-focus cursor-none flex gap-2 items-center group group-hover:text-[var(--hover-color)]"
                                            >
                                                <FontAwesomeIcon icon={faPhone}
                                                    className="transition-colors duration-300 group-hover:text-[var(--hover-color)]" />
                                                <p
                                                    className="group-hover:text-yellow transition-colors duration-300">
                                                    {socialData[club].phone}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    {index < clubs.length - 1 && (
                                        <div className="h-[1px] w-full bg-white/10 lg:h-24 lg:w-[1px]" />
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="w-full max-w-7xl px-8 mt-24 flex flex-col md:flex-row items-center justify-between font-secondary text-xs text-offwhite/30 uppercase tracking-widest relative z-10 border-t border-white/5 pt-8">
                <span>2026 Matrix Clan</span>
            </div>
        </div>
    )
};
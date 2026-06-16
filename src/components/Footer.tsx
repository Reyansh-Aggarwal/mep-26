import { useNavigate } from "react-router"
import { cn } from "../utils"

export const Footer = () => {
    const navigate = useNavigate();

    const navTo = (path: string) => {
        navigate("/" + path);
    }

    return (
        <div
            className={cn(
                "h-fit w-full bg-[#090909] overflow-hidden pb-[15dvh]")}>
            {/* SVG Filter for Text Inner Shadow */}
            <svg width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
                <defs>
                    <filter id="text-inner-shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feOffset dx="0" dy="3" />
                        <feComposite operator="out" in="SourceAlpha" result="inverse" />
                        <feFlood flood-color="black" flood-opacity="0.25" result="color" />
                        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                    </filter>
                </defs>
            </svg>

            <div className={cn(
                "flex flex-col md:flex-row text-2xl gap-4 md:gap-2",
                "w-full px-8 py-8",
                "font-clash text-[#8a8a8a]"
            )}>
                <span className="text-[#b6b6b6] text-6xl md:basis-1/2 text-inner-shadow">
                    Matrix'26
                </span>
                <hr className="md:hidden" />
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 justify-around w-full">
                    <div
                        className="flex flex-col">
                        <span className="text-[#b6b6b6] text-4xl text-inner-shadow text-wrap">
                            Where to?
                        </span>
                        <span
                            onClick={() => navTo("home")} className="text-inner-shadow hover:underline cursor-pointer">
                            Home
                        </span>
                        <span
                            onClick={() => navTo("brochure")} className="text-inner-shadow hover:underline cursor-pointer">
                            Brochure
                        </span>
                        <span
                            onClick={() => navTo("register")} className="text-inner-shadow hover:underline cursor-pointer">
                            Register
                        </span>
                    </div>
                    <div
                        className="flex flex-col">
                        <span className="text-[#b6b6b6] text-4xl text-inner-shadow">
                            Need help?
                        </span>
                        <a href="mailto:thematrixclan2026@gmail.com"
                            className="text-inner-shadow hover:underline cursor-pointer">
                            thematrixclan2026@gmail.com
                        </a>
                        <a href="https://instagram.com/mepfest2026"
                            className="text-inner-shadow hover:underline cursor-pointer">
                            @mepfest2026
                        </a>
                        <a href="tel:+919086222000"
                            className="text-inner-shadow hover:underline cursor-pointer">
                            +919086222000
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
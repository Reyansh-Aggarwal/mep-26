import { cn } from "../utils"

export const Navbar = () => {
    return (
        <div id="navbar"
            className={cn(
                "fixed top-0 left-0 w-full h-fit px-8 py-4 z-20"
            )}>
            <div className={cn(
                "flex flex-row justify-between w-full lg:gap-32",
            )}>
                <button id="logo"
                    className={cn(
                        "px-4 py-2",
                        "text-white rounded-2xl bg-black",
                        "shadow-[0_4px_0_#333333]",
                        "active:translate-y-[4px] active:shadow-[0_0_0_0]"
                    )}>
                    <img alt="MEP" />

                </button>
                <div id="scrollButtons"
                    className={cn(
                        "flex flex-row gap-4 bg-black px-4 py-2",
                        "text-white rounded-2xl w-full lg:justify-between",
                        "shadow-[0_4px_0_#333333]")}>
                    <button id="gallery"
                        className={cn(
                            "active:shadow-[0_-2px_0_#333333]",
                            "active:translate-y-[4px]",
                            "px-2 rounded-lg basis-1/3")}>
                        gallery
                    </button>
                    <button id="mep"
                        className={cn(
                            "active:shadow-[0_-2px_0_#333333]",
                            "active:translate-y-[4px]",
                            "px-2 rounded-lg basis-1/3")}>
                        mep'26
                    </button>
                    <button id="team"
                        className={cn(
                            "active:shadow-[0_-2px_0_#333333]",
                            "active:translate-y-[4px]",
                            "px-2 rounded-lg basis-1/3")}>
                        our team
                    </button>
                </div>
                <button id="alumni"
                    className={cn(
                        "px-4 py-2",
                        "text-white rounded-2xl bg-black",
                        "shadow-[0_4px_0_#333333]",
                        "active:translate-y-[4px] active:shadow-[0_0_0_0]",
                    )}>
                    alumni

                </button>
            </div>
        </div>
    )
}
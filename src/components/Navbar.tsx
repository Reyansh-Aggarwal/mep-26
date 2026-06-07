import { useEffect, useState } from "react";
import { cn } from "../utils";
import mepLogo from "../assets/logos/mep_logo.png";
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="Navbar"
            className={cn(
                "w-full fixed top-0 z-50 transition-all duration-300 ease-in-out flex justify-center items-center pt-4",
            )}>
            <div
                className={cn(
                    "hidden",
                )}>
                <div className={cn(
                    "flex justify-center items-center w-fit transition-all duration-300 ease-out ",
                    "px-8 bg-myblack z-10",
                    "outline-solid outline-4 outline-black",
                    "transition-all duration-600 ease-in-out",
                    isScrolled ? "opacity-100" : "opacity-0",

                )}>
                    <img src={mepLogo} className={cn(
                        "h-12 transition-all duration-600 ease-in-out",
                        isScrolled ? "opacity-100" : "opacity-0",
                    )} alt="MEP Logo" />
                </div>
                <div className={cn(
                    "flex justify-center items-center w-fit transition-all duration-300 ease-out",
                    "px-8 bg-white z-0",
                    "outline outline-solid outline-4 outline-black",
                    "transition-all duration-600 ease-in-out absolute",
                    isScrolled ? "opacity-100 mt-4 mr-4" : "opacity-0",
                )}>
                    <img src={mepLogo} className="h-12" alt="MEP Logo" />
                </div>
            </div>


        </div >
    );
}
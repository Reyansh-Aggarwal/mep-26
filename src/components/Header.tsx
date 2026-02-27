import { useEffect, useState } from "react";
import { cn } from "../utils";
import { Link } from "react-router-dom";

export const Header = () => {
    
    const currentPath = window.location.pathname;
    const atHome = (currentPath == "/home" || currentPath == "") ? true : false;
    const [isScrolled, setIsScrolled] = atHome ?  useState(false) : useState(true);
    useEffect(() => {
        if (atHome){
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 500);
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };   
        }
    }, []);
    
    return (
        <div className = {
            cn("h-fit w-full pt-2 font-clash-display text-white  items-center fixed z-60",
                isScrolled ? "bg-black/50 backdrop-blur-sm" : ""
        )}>
            <div className = {
                cn("flex flex-row justify-center md:justify-between px-6 transition-all duration-300", 
                isScrolled ? "opacity-100 " : "opacity-0")}>
                <div id = "brochure-button" className ="gap-2 align-center text-center items-center outline outline-solid rounded px-2 w-28 hover:bg-white hover:text-black transition-all ease-in-out z-10  hidden md:block">
                <span>Brochure</span>
                </div>
                <Link to={'/home'} className = "tracking-[0.125rem]" >
                    M E P
                </Link>
                <div id = "brochure-button" className ="gap-2 align-center text-center items-center outline outline-solid rounded px-2 w-28 hover:bg-white hover:text-black transition-all ease-in-out hidden md:block">
                    <span>Register</span>
                </div>
            </div>
            <hr className = {cn("mt-2 transition-opacity duration-300", isScrolled ? "opacity-100" : "opacity-0")}/>
        </div>
    );
}
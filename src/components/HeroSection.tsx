import { Link } from "react-router-dom"
import { cn } from "../utils";

export const HeroSection = () => {
    return (
        <div className = "w-full h-dvh ">
            <div className = "w-full h-full flex flex-col font-blackheat text-[10rem] md:text-[10rem] xl:text-[12rem] items-center justify-around relative z-50 pointer-events-none pb-4">
                
                <Link to="/matrix" 
                className= "hover:scale-110 hover:text-green-600 text-green-600 md:text-white transition-transform ease-in pointer-events-auto">MATRIX</Link>
                <Link to="/ecommbuzz" 
                className= "hover:scale-110 hover:text-blue-600 text-blue-600 md:text-white transition-transform ease-in pointer-events-auto">ECOMM</Link>
                <Link to="/psynapse" 
                className= "hover:scale-110 hover:text-pink-600 text-pink-600 md:text-white transition-transform ease-in pointer-events-auto">PSYNAPSE</Link>
                
                <div id = "buttons" 
                className = "font-clash-display text-xl flex flex-row gap-8 pointer-events-auto">
                    <button id = "registerButton"
                    className = {
                        cn("py-4 px-12 text-4xl md:py-4 md:px-6 md:text-2xl",
                            "bg-white text-black font-medium rounded-full",
                            "hover:bg-transparent hover:text-white hover:outline hover:outline-white"
                        )}>
                        Register
                    </button>
                    <button id = "brochureButton"
                    className = {
                        cn("py-4 px-12 text-4xl md:py-4 md:px-6 md:text-2xl",
                            "bg-white text-black font-medium rounded-full",
                            "hover:bg-transparent hover:text-white hover:outline hover:outline-white"
                        )}>
                        Brochure
                    </button>
                </div>
            </div>
        </div>
    );
}
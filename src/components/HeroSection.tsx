import { Link } from "react-router-dom"

export const HeroSection = () => {
    return (
        <div className = "w-full h-dvh ">
            <div className = "w-full h-full flex flex-col font-blackheat text-[8rem] md:text-[10rem] xl:text-[12rem] items-center justify-center relative z-[50] pointer-events-none">
                <Link to="/matrix" className= "hover:scale-125 hover:text-green-600 transition-transform ease-in pointer-events-auto">MATRIX</Link>
                <Link to="/ecommbuzz" className= "hover:scale-125 hover:text-blue-600 transition-transform ease-in pointer-events-auto">ECOMM</Link>
                <Link to="/psynapse" className= "hover:scale-125 hover:text-pink-600 transition-transform ease-in pointer-events-auto">PSYNAPSE</Link>
            </div>
        </div>
    );
}
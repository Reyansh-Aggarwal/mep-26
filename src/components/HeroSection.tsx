import { Link } from "react-router-dom"

export const HeroSection = () => {
    return (
        <div className = "w-full h-dvh ">
            <div className = "h-full flex flex-col font-blackheat md:text-[10rem] xl:text-[12rem] items-center justify-center z-10">
                <a>

                </a>
                <Link to="/matrix" className= "hover:scale-125 hover:text-green-600 transition-transform ease-in">MATRIX</Link>
                <Link to="/ecommbuzz" className= "hover:scale-125 hover:text-blue-600 transition-transform ease-in">ECOMM</Link>
                <Link to="/psynapse" className= "hover:scale-125 hover:text-pink-600 transition-transform ease-in">PSYNAPSE</Link>
            </div>
            
        </div>
    )
}
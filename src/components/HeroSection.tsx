import halftone_bg from "../assets/halftone.png";

export const HeroSection = () => {
    return (
        <div className="min-h-dvh w-full bg-myblack overflow-hidden flex text-center items-center justify-center ">
            <img src={halftone_bg} className="absolute w-full h-full object-cover z-0" alt="Halftone Background" />
            <div className="md:text-[10rem] font-eternalo flex flex-col w-full px-2 md:px-8 select-none z-10 leading-40">
                <span className="hover:text-green transition-all duration-300 ease-in-out">
                    Matrix
                </span>
                <span className="hover:text-blue transition-all duration-300 ease-in-out">
                    Ecomm
                </span>
                <span className="hover:text-pink transition-all duration-300 ease-in-out">
                    Psynapse
                </span>
            </div>
        </div >
    );
}
import { cn } from "../utils";
import small_glass from "../assets/images/glass_small.png";
import { forwardRef } from "react";

export const HeroSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className="min-h-dvh w-full ioverflow-hidden flex text-center items-center justify-center ">

            <div className="text-[6rem] md:text-[10rem] font-eternalo flex flex-col w-full select-none z-10 leading-28 md:leading-40">
                <span id="Matrix"
                    className={cn(
                        "text-green md:text-white hover:text-green",
                        "transition-all duration-300 ease-in-out"
                    )}>
                    Matrix
                    <div className="absolute left-1/2 -translate-y-[6rem] ">
                        <div id="glassShard1"
                            className={cn(
                                "w-[80px] h-[80px] md:w-[120px] md:h-[120px] ",
                                "bg-black/10 backdrop-blur-xs md:scale-80",
                                "[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]",

                            )}
                            style={{
                                maskImage: `url(${small_glass})`,
                                WebkitMaskImage: `url(${small_glass})`
                            }}
                        />
                    </div>


                </span>
                <span id="Ecomm"
                    className={cn(
                        "text-blue md:text-white hover:text-blue",
                        " transition-all duration-300 ease-in-out"
                    )}>
                    Ecomm
                    <div id="glassShard1"
                        className={cn(
                            "absolute left-1/2 -translate-x-[100%] -translate-y-[6rem]  w-[80px] h-[80px] md:w-[120px] md:h-[120px]",
                            "bg-black/10 backdrop-blur-xs md:scale-80 rotate-45",
                            "[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]")}
                        style={{
                            maskImage: `url(${small_glass})`,
                            WebkitMaskImage: `url(${small_glass})`
                        }}
                    />
                </span>
                <span id="Psynapse"
                    className={cn(
                        "text-pink md:text-white hover:text-pink",
                        "transition-all duration-300 ease-in-out"
                    )}>
                    Psynapse
                    <div id="glassShard1"
                        className={cn(
                            "absolute left-1/2 translate-x-[2rem] -translate-y-[7rem] md:-translate-y-[9rem] w-[80px] h-[80px] md:w-[120px] md:h-[120px]",
                            "bg-black/10 backdrop-blur-xs md:scale-80 rotate-240",
                            "[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]")}
                        style={{
                            maskImage: `url(${small_glass})`,
                            WebkitMaskImage: `url(${small_glass})`
                        }}
                    />
                </span>
            </div>
        </div >
    );
});

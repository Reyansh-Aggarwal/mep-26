import { cn } from "../utils"

export const MatrixHero = () => {
    return (
    <div id = "matrixHero" 
    className = "w-full h-dvh">
        <div className = {cn(
            "w-full h-full flex flex-col",
            "font-blackheat text-[12rem] md:text-[12rem] xl:text-[14rem] items-center justify-between relative z-50 pointer-events-none pb-4",
            "justify-around"
        )}>
            <span className = "text-green-600 scale-110">
                Matrix
            </span>
        </div>
    </div>
    )
}
import { cn } from "../utils";

interface ButtonProps {
    text: string;
    onclick: () => void;
    visibility?: string;
}

export const Button = ({ text, onclick, visibility }: ButtonProps) => {
    return (
        <div id="brochure" className={cn("relative w-fit rounded-full group")}>
            <div onClick={() => { onclick() }}
                className={cn(
                    "px-6 md:px-10 py-2.5 text-center flex cursor-focus",
                    "text-white/40 bg-blue-100/20 backdrop-blur-md",
                    "border border-white/20 rounded-full",
                    "font-secondary font-bold tracking-wider uppercase",
                    "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                    "transition-all duration-200 cursor-none",
                    "hover:text-white hover:border-yellow/40 hover:shadow-[0_4px_0_#726d84]",
                    "active:translate-y-1 active:shadow-none active:bg-black active:text-white",
                    visibility == "sm" ? "flex md:hidden py-4 text-xl" : visibility == "md" ? "hidden md:flex" : ""
                )}
            >
                {text}
            </div>
        </div>
    );
}
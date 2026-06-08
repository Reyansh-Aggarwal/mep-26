import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mepLogo from "../assets/logos/mep_logo.png";
import { cn } from "../utils";
import { useNavigate } from "react-router";
// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export const BriefingSection = forwardRef<HTMLDivElement>((_, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerSectionRef = useRef<HTMLDivElement>(null);
    const registerRef = useRef<HTMLDivElement>(null);
    const brochureRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const registerClicked = () => {
        const registerButton = registerRef.current;
        registerButton.classList.add("mr-7", "mt-7");

        console.log("Register clicked");
        setTimeout(() => {
            navigate('/register');
        }, 200);

    }
    const brochureClicked = () => {
        const brochureButton = brochureRef.current;
        brochureButton.classList.add("mr-7", "mt-7");

        console.log("brochure clicked");
        setTimeout(() => {
            navigate('/brochure');
        }, 200);
    }
    useEffect(() => {
        const container = containerRef.current;
        const triggerSection = triggerSectionRef.current;
        if (!container || !triggerSection) return;

        // Create the GSAP tween
        const ctx = gsap.context(() => {
            gsap.to(triggerSection, {
                opacity: 1,
                scrollTrigger: {
                    trigger: triggerSection,
                    start: "top 20%",
                    end: "top 0%",
                    scrub: 0.8,
                    markers: false,
                },
            });

        });

        return () => ctx.revert(); // Clean up on unmount to prevent memory leaks
    }, []);

    return (
        // We use standard inline style or hex colors for GSAP to interpolate smoothly
        <div ref={(node) => {
            containerRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.RefObject<HTMLDivElement | null>).current = node;
        }} className="text-white transition-colors duration-300 min-h-dvh overflow-hiddeni py-36">
            <section
                ref={triggerSectionRef}
                className="h-screen flex flex-col items-center justify-around opacity-0"
            >
                <div id="mep"
                    className="items-center justify-center flex w-fit p-2">
                    <div
                        className={cn(
                            "flex justify-center items-center w-fit",
                            "px-8 md:px-24 bg-white z-10",
                            "outline-solid outline-4 outline-black",
                            "absolute mr-8 mt-8"
                        )}
                    >
                        <img
                            src={mepLogo}
                            className="h-56 lg:h-[16rem]"
                            alt="MEP Logo"
                        />
                    </div>
                    {/* Main Layer */}
                    <div
                        className={cn(
                            "flex justify-center items-center w-fit",
                            "px-8 md:px-24 bg-myblack z-10",
                            "outline-solid outline-4 outline-black",
                        )}
                    >
                        <img
                            src={mepLogo}
                            className="h-56 lg:h-[16rem]"
                            alt="MEP Logo"
                        />
                    </div>
                </div>

                <div id="title"
                    className="w-full font-eternalo text-myblack text-5xl md:text-8xl text-center">
                    what are we waiting for?

                </div>
                <div id="buttons"
                    className={cn(
                        "flex flex-col md:flex-row gap-12 ",
                        "md:justify-around w-full px-24",
                        "text-3xl font-anime md:text-4xl")}>
                    <button id="register" onClick={registerClicked}
                        className="w-full md:w-fit ">
                        <div
                            className="items-center justify-center flex w-full md:w-fit p-2">
                            <div
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8 md:p-12 bg-white z-10",
                                    "outline-solid outline-4 outline-black",
                                    "absolute mr-7 mt-7",

                                )}
                            >
                                REGISTER <br /> NOW!
                            </div>
                            {/* Main Layer */}
                            <div
                                ref={registerRef}
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8  md:p-12 bg-myblack z-10",
                                    "outline-solid outline-4 outline-black",
                                    "md:text-left absolute ",
                                    "transition-all duration-100 ease-out "
                                )}
                            >
                                REGISTER <br /> NOW!
                            </div>
                        </div>
                    </button>
                    <button id="brochure" onClick={brochureClicked}
                        className="w-full md:w-fit">
                        <div
                            className="items-center justify-center flex w-full md:w-fit p-2">
                            <div
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8 md:p-12 bg-white z-10",
                                    "outline-solid outline-4 outline-black",
                                    "absolute mr-7 mt-7"

                                )}
                            >
                                VIEW <br /> BROCHURE
                            </div>
                            {/* Main Layer */}
                            <div
                                ref={brochureRef}
                                className={cn(
                                    "flex justify-center items-center md:w-fit",
                                    "px-32 py-8  md:p-12 bg-myblack z-10",
                                    "outline-solid outline-4 outline-black",
                                    "md:text-left absolute",
                                    "transition-all duration-100 ease-out"
                                )}
                            >
                                VIEW <br /> BROCHURE
                            </div>
                        </div>
                    </button>
                </div>

            </section>

        </div >
    );
});
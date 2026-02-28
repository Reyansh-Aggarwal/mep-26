import { cn } from "../utils"

export const AboutUs = () => {

    return (
        <div  id = "aboutUs" className = "min-h-dvh">
            <div className = {cn(
                "h-full flex flex-col gap-0 text-center md:text-left",
                "font-blackheat text-[6rem] md:text-[8rem] xl:text-[10rem]",
                "pt-32 pb-16 px-12 relative z-50 pointer-events-none"
                )}>
            <span>About Us</span>
            <span id = "content"
            className = {cn(
                "text-xl md:text-2xl xl:text-3xl font-clash-display md:-mt-8"
            )}>
                The wait is over. The 25th Bro. Aloysius Matrix Ecomm Psynapse Fest is back—bigger, bolder, and more thrilling than ever. This isn’t just an event; it’s the highlight of the year.
                Celebrating sharp minds and standout skills across Computer Science, Economics, and Psychology. Participants will take on intense challenges in tech, business, and behavioral science—designed to discover the best young talent out there.
                What sets this fest apart? No hand-holding. It’s all you—your skill, your grit, your game. Only the exceptional will rise, making this a true test of mastery.
                This year promises to be unforgettable—a space to learn, connect, and shine.
                This isn’t just an event—it’s a journey of growth. Step in, rise up, and remember: every moment counts.
            </span>
            </div>
        </div>
    )
}
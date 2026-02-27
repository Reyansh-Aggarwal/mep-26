import { cn } from "../utils"

export const AboutUs = () => {
    return (
        <div id = "aboutUs" className = "min-h-dvh">
            <div className = {cn(
                "h-full flex flex-col gap-0 text-center md:text-left",
                "font-blackheat text-[6rem] md:text-[8rem] xl:text-[10rem]",
                "pt-32 pb-16 px-12 relative z-50 pointer-events-none"
                )}>
            <span>About Us</span>
            <span id = "content"
            className = "text-xl md:text-2xl xl:text-3xl font-clash-display md:-mt-8">
                Founded in 2000, the Matrix Clan at Mount St. Mary School, Delhi Cantt., has grown into a leading technology club in Delhi. While led by students from classes XI and XII, it actively involves all Marians in exploring new tech frontiers. Its strong presence at inter-school events highlights its reputation for innovation and technological excellence.
                At the heart of its initiatives is Matrix Ecomm Psynapse, an annual event co-founded by the club that anchors the school’s tech calendar. This event not only showcases student talent but also offers a platform for creative expression. Beyond events, the club supports various school tech and design projects, contributing richly to its digital environment.
                Guided by its motto—"to make a dent in the universe, one keystroke at a time"—the Matrix Clan fosters innovation, creativity, and leadership, making a lasting impact on both everyday projects and major school initiatives.
            </span>
            </div>
        </div>
    )
}
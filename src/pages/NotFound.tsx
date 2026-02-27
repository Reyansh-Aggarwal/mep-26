import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const NotFound = () => {
    return (
    <div className = "bg-black text-white min-w-dvw min-h-dvh">
        
        <Header />
        <div className = "pt-32 items-center flex flex-col justify-center">
            <span className = "font-blackheat text-[12rem]">
                404
            </span>
            <span className = "font-blackheat text-[6rem]">
                NOT FOUnD
            </span>

            <Link to = "/home"
            className = "font-clash-display outline px-6 py-2 rounded-full hover:text-black hover:bg-white">
                Go to Home
            </Link>
        </div>
        
    </div>
    );
};
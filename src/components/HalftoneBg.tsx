import halftone_bg from "../assets/halftone.png";

export const HalftoneBg = () => {

    return (
        <img
            src={halftone_bg}
            className="absolute h-dvh w-full object-cover z-0"
            alt="Halftone Background"
        />
    );
}
import halftone_bg from "../assets/images/halftone_bg.png";

export const HalftoneBg = () => {

    return (
        <img
            src={halftone_bg}
            className="absolute h-full w-full object-cover z-0"
            alt="Halftone Background"
        />

    );
}
export const Header = () => {
    return (
        <div className = "h-fit w-full py-2 font-clash-display text-white items-center fixed">
            <div className = "flex flex-row justify-between px-6">
                <div id = "brochure-button" className ="gap-2 align-center text-center items-center outline outline-solid rounded px-2 w-28 hover:bg-white hover:text-black transition-all ease-in-out z-10">
                <span>Brochure</span>
                </div>
                <div>
                    MEP
                </div>
                <div id = "brochure-button" className ="gap-2 align-center text-center items-center outline outline-solid rounded px-2 w-28 hover:bg-white hover:text-black transition-all ease-in-out">
                    <span>Register</span>
                </div>
            </div>
        </div>
    )
}
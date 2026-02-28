import { Header } from "../components/Header";
import { MatrixHero } from "../components/MatrixHero";

export const Matrix = () => {
    return (
    <div className="min-h-dvh min-w-dvw overflow-x-hidden select-none bg-grid bg-repeat md:bg-cover text-white m-0 p-0">
                
                <Header />

                <MatrixHero />
                
            </div>
    );
};
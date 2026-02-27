import { AboutUs } from '../components/AboutUs'
import { Canvas3D } from '../components/Canvas3D'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import '../index.css'

export const Home = () => {
    return (
        <div className="min-h-dvh max-w-dvw overflow-x-hidden select-none bg-grid bg-repeat md:bg-cover text-white m-0 p-0">
            
            <Header />

            <Canvas3D />
            
            <HeroSection />

            <AboutUs />
            
        </div>
    )
}
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import '../index.css'

export const Home = () => {
    return (
        <div className="min-h-dvh min-w-dvw overflow-x-hidden bg-black text-white m-0 p-0">
            
            <Header />
            
            <HeroSection />
        </div>
    )
}
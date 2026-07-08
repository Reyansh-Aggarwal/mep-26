import { clubData as clubs } from "../../data/clubs";
import { navTo } from "../Navbar";
import { ClubSection } from "../Team/ClubSection";
import { Button } from "../Button.tsx";
import { cn, useInView } from "../../utils.tsx";

export const MembersSection = () => {
    const { ref, isVisible } = useInView({ threshold: 0.3 });

    return (
        <div id="membersSection" className="min-h-screen w-full flex flex-col items-center relative overflow-hidden py-24 z-10 bg-black">


            {/* Clubs Grid */}
            <div className="flex flex-col items-center">
                {clubs.map((club, idx) => (
                    <ClubSection key={idx} club={club} isLast={idx === clubs.length - 1} showExec={false} />
                ))}
            </div>

            {/* View More Button — reveals on scroll */}
            <div
                ref={ref}
                className={cn(
                    "transition-all duration-700 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
            >
                <Button onclick={() => { navTo("/members") }} text="MEET THE REST" />
            </div>
        </div>
    );
};
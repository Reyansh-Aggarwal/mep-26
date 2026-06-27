import { cn } from "../../utils";
import { clubData as clubs } from "../../data/clubs";
import { navTo } from "../Navbar";
import { ClubSection } from "../Team/ClubSection";

export const MembersSection = () => {

    return (
        <div id="membersSection" className="min-h-screen w-full flex flex-col items-center relative overflow-hidden py-24 z-10">
            {/* Ambient backdrop glow layers */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-matrix)]/5 rounded-full blur-[140px] pointer-events-none top-10 left-10" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-ecomm)]/5 rounded-full blur-[120px] pointer-events-none top-1/2 right-10" />
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-psynapse)]/5 rounded-full blur-[140px] pointer-events-none bottom-10 left-1/4" />


            {/* Clubs Grid */}
            <div className="flex flex-col items-center">
                {clubs.map((club, idx) => (
                    <ClubSection key={idx} club={club} isLast={idx === clubs.length - 1} showExec={false} />
                ))}
            </div>

            {/* View More Button */}
            <div className="mt-24 relative z-10 flex flex-row gap-4">
                <div onClick={() => navTo("members")}
                    className={cn(
                        "px-6 md:px-10 py-2.5 text-center",
                        ` text-white/40  bg-blue-100/20 backdrop-blur-md`,
                        ` border border-white/20 rounded-full`,
                        "font-secondary font-bold tracking-wider uppercase",
                        "shadow-[0_4px_0_#524f5f] [-webkit-text-stroke:1px_#ffffff40]",
                        "active:mt-1 active:shadow-none active:bg-black active:text-white")
                    }>
                    MEET THE REST OF US
                </div>
            </div>
        </div>
    );
};
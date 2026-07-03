import { clubData as clubs } from "../../data/clubs";
import { navTo } from "../Navbar";
import { ClubSection } from "../Team/ClubSection";
import { Button } from "../Button.tsx";

export const MembersSection = () => {

    return (
        <div id="membersSection" className="min-h-screen w-full flex flex-col items-center relative overflow-hidden py-24 z-10 bg-black">


            {/* Clubs Grid */}
            <div className="flex flex-col items-center">
                {clubs.map((club, idx) => (
                    <ClubSection key={idx} club={club} isLast={idx === clubs.length - 1} showExec={false} />
                ))}
            </div>

            {/* View More Button */}
            <Button onclick={() => { navTo("/members") }} text="MEET THE REST" />
        </div>
    );
};
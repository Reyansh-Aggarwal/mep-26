import { Link } from "react-router";
import { cn } from "../utils";


// 🔹 Mock Data Structure (Replace with your CMS/API data)
const clubsData = [
    {
        name: "Tech Club",
        colorClass: "text-blue-500",
        positions: [
            { role: "President", name: "Alex Johnson" },
            { role: "Vice President", name: "Maria Garcia" },
            { role: "General Secretary", name: "David Kim" },
            { role: "Joint Secretary", name: "Sarah Chen" },
        ],
        executives: Array.from({ length: 8 }, (_, i) => ({
            role: "Executive Member",
            name: `Executive Member ${i + 1}`,
        })),
    },
    {
        name: "Design Club",
        colorClass: "text-pink-500",
        positions: [
            { role: "President", name: "James Wilson" },
            { role: "Vice President", name: "Emma Davis" },
            { role: "General Secretary", name: "Liam Brown" },
            { role: "Joint Secretary", name: "Olivia Taylor" },
        ],
        executives: Array.from({ length: 8 }, (_, i) => ({
            role: "Executive Member",
            name: `Executive Member ${i + 1}`,
        })),
    },
    // Add more clubs as needed
];

export const MembersPage = () => {

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-offwhite relative overflow-hidden">
            {/* Ambient Backdrop Glows (Exact from Citation 3) */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-matrix)]/5 rounded-full blur-[140px] pointer-events-none top-10 left-10" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-ecomm)]/5 rounded-full blur-[120px] pointer-events-none top-1/2 right-10" />
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-psynapse)]/5 rounded-full blur-[140px] pointer-events-none bottom-10 left-1/4" />

            {/* Back to Home */}
            <div className="absolute top-6 left-6 md:top-8 md:left-12 z-20">
                <Link to="/" className="text-offwhite/60 hover:text-yellow transition-colors duration-300 text-sm uppercase tracking-widest flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Home
                </Link>
            </div>

            {/* Header Section */}
            <div className="text-center mt-24 mb-20 relative z-10 px-4 select-none">
                <h2 className="font-primary text-7xl md:text-9xl text-offwhite tracking-wider uppercase text-shadow-[0_0_8px_#ffffff50]">
                    EXECUTIVE COMMITTEE
                </h2>
                <p className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mt-3">
                    Leadership & Core Team
                </p>
            </div>

            {/* Clubs Container */}
            <div className="w-full max-w-7xl px-4 md:px-12 flex flex-col gap-32 relative z-10 pb-24">
                {clubsData.map((club, idx) => (
                    <div key={idx} className="flex flex-col gap-10">
                        {/* Club Title */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <h3 className={cn("font-primary text-6xl md:text-7xl uppercase", club.colorClass)}>
                                {club.name}
                            </h3>
                            <div className="h-[2px] flex-grow bg-white/10 hidden md:block rounded-full"></div>
                        </div>

                        {/* Core Positions Grid (4 Members) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {club.positions.map((member, mIdx) => (
                                <MemberCard key={mIdx} member={member} clubColorClass={club.colorClass} />
                            ))}
                        </div>

                        {/* Executive Members Grid (8 Members) */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-secondary text-lg uppercase tracking-widest text-offwhite/60 border-b border-white/10 pb-2 w-fit">
                                Executive Members
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {club.executives.map((member, eIdx) => (
                                    <MemberCard key={eIdx} member={member} clubColorClass={club.colorClass} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 🔹 Reusable Member Card (Exact styling from Citations 1 & 2)
function MemberCard({ member, clubColorClass }: { member: { name: string; role: string }; clubColorClass: string }) {
    return (
        <div className="flex flex-col items-center group ">
            {/* Photo Placeholder */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative mb-4 transition-all duration-300 group-hover:border-yellow/50 group-hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>

            {/* Member Details */}
            <h4 className="font-secondary font-bold text-2xl text-offwhite uppercase group-hover:text-yellow transition-colors duration-300 text-center">
                {member.name}
            </h4>
            <p className={cn("font-secondary text-sm md:text-base tracking-widest uppercase mt-1 text-center", clubColorClass)}>
                {member.role}
            </p>
        </div>
    );
}

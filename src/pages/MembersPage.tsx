import { cn } from "../utils";
import { Navbar } from "../components/Navbar";
import { Cursor } from "../components/Cursor";


// 🔹 Mock Data Structure (Replace with your CMS/API data)
const clubs = [
    {
        name: "Matrix",
        colorClass: "text-[var(--color-matrix)]",
        members: [
            { role: "President", name: "Reyansh Aggarwal" },
            { role: "Vice-President", name: "Ishaan Garg" },
            { role: "General Secretary", name: "Atharv Sharma" },
            { role: "Joint Secretary", name: "Prayag Nagar" },
        ],
        executives: [
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
            { name: "hello", role: "executive" },
        ]
    },
    {
        name: "Ecommbuzz",
        colorClass: "text-[var(--color-ecomm)]",
        members: [
            { role: "President", name: "Krishiv Dua" },
            { role: "Vice-President", name: "Sharanya Sarin" },
            { role: "General Secretary", name: "Srishti Pandey" },
            { role: "Joint Secretary", name: "Gaurav Kumar" },
        ],
        executives: [
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
        ]
    },
    {
        name: "Psynapse",
        colorClass: "text-[var(--color-psynapse)]",
        members: [
            { role: "President", name: "Mahi Agrawal" },
            { role: "Vice-President", name: "Anishka Patel" },
            { role: "General Secretary", name: "Rutvija Mohite" },
            { role: "Joint Secretary", name: "Mariah Susane Robins" },
        ],
        executives: [
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
            { name: "hello", role: "executive member" },
        ]
    }
];
export const MembersPage = () => {

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-offwhite relative overflow-hidden md:cursor-none">
            {/* Ambient Backdrop Glows (Exact from Citation 3) */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-matrix)]/5 rounded-full blur-[140px] pointer-events-none top-10 left-10" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-ecomm)]/5 rounded-full blur-[120px] pointer-events-none top-1/2 right-10" />
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-psynapse)]/5 rounded-full blur-[140px] pointer-events-none bottom-10 left-1/4" />

            <Navbar />
            <Cursor />

            {/* Header Section */}
            <div className="text-center mt-24 mb-20 relative z-10 px-4 select-none animate-fade-in">
                <h2 className="font-primary text-7xl md:text-9xl text-offwhite tracking-wider uppercase text-shadow-[0_0_8px_#ffffff50]">
                    MEP
                </h2>
                <p className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mt-3">
                    the core team
                </p>
            </div>

            <div className="w-full max-w-7xl px-4 md:px-12 flex flex-col gap-32 relative z-10 pb-24 animate-fade-in">
                {clubs.map((club, idx) => (
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
                            {club.members.map((member, mIdx) => (
                                <MemberCard key={mIdx} member={member} clubColorClass={club.colorClass} />
                            ))}
                        </div>

                        {/* Executive Members Grid (8 Members) */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-secondary text-lg uppercase tracking-widest text-offwhite/60 border-b border-white/10 pb-2 w-full text-center md:text-left">
                                Executive Members
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
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

function MemberCard({ member, clubColorClass }: { member: { name: string; role: string }; clubColorClass: string }) {
    return (
        <div className="flex flex-col items-center group ">
            {/* Photo */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative mb-4 transition-all duration-300 group-hover:border-yellow/50 group-hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>

            {/* Details */}
            <h4 className="font-secondary font-bold text-2xl text-offwhite uppercase group-hover:text-yellow transition-colors duration-300 text-center">
                {member.name}
            </h4>
            <p className={cn("font-secondary text-sm md:text-base tracking-widest uppercase mt-1 text-center", clubColorClass)}>
                {member.role}
            </p>
        </div>
    );
}

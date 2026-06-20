import { cn } from "../utils";

const clubs = [
    {
        name: "Matrix",
        colorClass: "text-[var(--color-matrix)]",
        members: [
            { role: "President", name: "Reyansh Aggarwal" },
            { role: "Vice-President", name: "Ishaan Garg" },
            { role: "General Secretary", name: "Atharv Sharma" },
            { role: "Joint Secretary", name: "Prayag Nagar" },
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
        ]
    },
    {
        name: "Psynapse",
        colorClass: "text-[var(--color-psynapse)]",
        members: [
            { role: "President", name: "Mahi Agrawal" },
            { role: "Vice-President", name: "Anishka Patel" },
            { role: "General Secretary", name: "" },
            { role: "Joint Secretary", name: "Mariah Robins" },
        ]
    }
];

export const MembersSection = () => {
    return (
        <div id="membersSection" className="min-h-screen w-full bg-black flex flex-col items-center relative overflow-hidden py-24 z-10">
            {/* Ambient backdrop glow layers */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-matrix)]/5 rounded-full blur-[140px] pointer-events-none top-10 left-10" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-ecomm)]/5 rounded-full blur-[120px] pointer-events-none top-1/2 right-10" />
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-psynapse)]/5 rounded-full blur-[140px] pointer-events-none bottom-10 left-1/4" />

            {/* Header */}
            <div className="text-center mb-20 relative z-10 px-4 select-none">
                <h2 className="font-primary text-7xl md:text-9xl text-offwhite tracking-wider uppercase text-shadow-[0_0_8px_#ffffff50]">
                    OUR TEAM
                </h2>
                <p className="font-secondary text-yellow text-sm md:text-base tracking-[0.25em] uppercase mt-3">
                    The minds behind it all
                </p>
            </div>

            {/* Clubs Grid */}
            <div className="w-full max-w-7xl px-4 md:px-12 flex flex-col gap-24 relative z-10">
                {clubs.map((club, idx) => (
                    <div key={idx} className="flex flex-col gap-8">
                        {/* Club Title */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <h3 className={cn("font-primary text-8xl md:text-7xl uppercase", club.colorClass)}>
                                {club.name}
                            </h3>
                            <div className="h-[2px] flex-grow bg-white/10 hidden md:block rounded-full"></div>
                        </div>

                        {/* Members Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {club.members.map((member, mIdx) => (
                                <div key={mIdx} className="flex flex-col items-center group cursor-pointer">
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
                                    <p className={cn("font-secondary text-sm md:text-base tracking-widest uppercase mt-1 text-center", club.colorClass)}>
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="mt-24 relative z-10">
                <button className="bg-yellow px-8 py-4 text-black hover:underline font-bold cursor-pointer shadow-[0_4px_0_#837600] transition-all duration-100 ease-in active:translate-y-[4px] active:shadow-[0_0_0_#837600]">
                    VIEW MORE
                </button>
            </div>
        </div>
    );
};
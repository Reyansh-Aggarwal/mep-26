import { cn } from "../../utils";
import MatrixPrez from "../../assets/images/members/matrix/prez.jpeg"
import MatrixVP from "../../assets/images/members/matrix/vp.jpeg"
import MatrixGen from "../../assets/images/members/matrix/gen.jpeg"
import MatrixJoint from "../../assets/images/members/matrix/joint.jpeg"
import MatrixMedia from "../../assets/images/members/matrix/media.jpeg"
import EcommPrez from "../../assets/images/members/ecomm/prez.jpeg"
import EcommVP from "../../assets/images/members/ecomm/vp.png"
import EcommGen from "../../assets/images/members/ecomm/gen.jpeg"
import EcommJoint from "../../assets/images/members/ecomm/joint.jpeg"
import EcommMedia from "../../assets/images/members/ecomm/media.jpeg"
import PsyPrez from "../../assets/images/members/psynapse/prez.jpeg"
import PsyVP from "../../assets/images/members/psynapse/vp.jpeg"
import PsyGen from "../../assets/images/members/psynapse/gen.jpeg"
import PsyJoint from "../../assets/images/members/psynapse/joint.jpeg"
import PsyMedia from "../../assets/images/members/psynapse/media.jpeg"

const clubs = [
    {
        name: "Matrix",
        colorClass: "text-[var(--color-matrix)]",
        members: [
            { role: "President", name: "Reyansh Aggarwal", image: MatrixPrez },
            { role: "Vice-President", name: "Ishaan Garg", image: MatrixVP },
            { role: "General Secretary", name: "Atharv Sharma", image: MatrixGen },
            { role: "Joint Secretary", name: "Prayag Nagar", image: MatrixJoint },
            { role: "Media Head", name: "Atharv Shankar Saxena", image: MatrixMedia },
        ]
    },
    {
        name: "Ecommbuzz",
        colorClass: "text-[var(--color-ecomm)]",
        members: [
            { role: "President", name: "Krishiv Dua", image: EcommPrez },
            { role: "Vice-President", name: "Sharanya Sarin", image: EcommVP },
            { role: "General Secretary", name: "Srishti Pandey", image: EcommGen },
            { role: "Joint Secretary", name: "Gaurav Kumar", image: EcommJoint },
            { role: "Media Head", name: "Vanya Bajaj", image: EcommMedia },
        ]
    },
    {
        name: "Psynapse",
        colorClass: "text-[var(--color-psynapse)]",
        members: [
            { role: "President", name: "Mahi Agrawal", image: PsyPrez },
            { role: "Vice-President", name: "Anishka Patel", image: PsyVP },
            { role: "General Secretary", name: "Rutvija Mohite", image: PsyGen },
            { role: "Joint Secretary", name: "Mariah Susane Robins", image: PsyJoint },
            { role: "Media Head", name: "Kyna Sooden", image: PsyMedia },
        ]
    }
];

export const MembersSection = () => {
    return (
        <div id="membersSection" className="min-h-screen w-full flex flex-col items-center relative overflow-hidden py-24 z-10">
            {/* Ambient backdrop glow layers */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-matrix)]/5 rounded-full blur-[140px] pointer-events-none top-10 left-10" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-ecomm)]/5 rounded-full blur-[120px] pointer-events-none top-1/2 right-10" />
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-psynapse)]/5 rounded-full blur-[140px] pointer-events-none bottom-10 left-1/4" />

            {/* Header */}
            <div className="text-center mb-20 relative z-10 px-4 select-none">

            </div>

            {/* Clubs Grid */}
            <div className="w-full max-w-7xl px-4 md:px-12 flex flex-col gap-24 relative z-10">
                {clubs.map((club, idx) => (
                    <div key={idx} className="flex flex-col gap-8">
                        {/* Club Title */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <h3 className={cn("font-primary text-5xl md:text-7xl uppercase", club.colorClass)}>
                                {club.name}
                            </h3>
                            <div className="h-[2px] flex-grow bg-white/10 hidden md:block rounded-full"></div>
                        </div>

                        {/* Members Grid */}
                        <div className="grid grid-cols-1 sm:flex flex-wrap justify-center gap-8 sm:gap-0">
                            {club.members.map((member, mIdx) => (
                                <div key={mIdx} className={cn(
                                    "flex flex-col items-center group sm:mb-12",
                                    member.role === "President" ? "sm:basis-full lg:basis-1/2" : member.role === "Vice President" ? "sm:basis-full lg:basis-1/2" : "sm:basis-1/2 lg:basis-1/3")}>

                                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative mb-4 transition-all duration-300 group-hover:border-yellow/50 group-hover:scale-105">
                                        <img src={member.image} />
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
            <div className="mt-24 relative z-10 flex flex-row gap-4">
                <div
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
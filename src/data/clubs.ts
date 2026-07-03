import MatrixPrez from "../assets/images/members/matrix/prez.jpeg"
import MatrixVP from "../assets/images/members/matrix/vp.jpeg"
import MatrixGen from "../assets/images/members/matrix/gen.jpeg"
import MatrixJoint from "../assets/images/members/matrix/joint.jpeg"
import MatrixMedia from "../assets/images/members/matrix/media.jpeg"
import EcommPrez from "../assets/images/members/ecomm/prez.jpeg"
import EcommVP from "../assets/images/members/ecomm/vp.png"
import EcommGen from "../assets/images/members/ecomm/gen.jpeg"
import EcommJoint from "../assets/images/members/ecomm/joint.jpeg"
import EcommMedia from "../assets/images/members/ecomm/media.jpeg"
import PsyPrez from "../assets/images/members/psynapse/prez.jpeg"
import PsyVP from "../assets/images/members/psynapse/vp.jpeg"
import PsyGen from "../assets/images/members/psynapse/gen.jpeg"
import PsyJoint from "../assets/images/members/psynapse/joint.jpeg"
import PsyMedia from "../assets/images/members/psynapse/media.jpeg"
import EcommExecJamwal from "../assets/images/members/ecomm/execs/jamwal.jpeg"
import EcommExecSaachi from "../assets/images/members/ecomm/execs/saachi.jpeg"
import EcommExecAvreen from "../assets/images/members/ecomm/execs/avreen.jpeg"
import EcommExecDivyaansh from "../assets/images/members/ecomm/execs/divyaansh.jpeg"
import EcommExecUddeshya from "../assets/images/members/ecomm/execs/uddeshya.jpeg"
import EcommExecIvanya from "../assets/images/members/ecomm/execs/ivanya.jpeg"
import EcommExecShreyansh from "../assets/images/members/ecomm/execs/shreyansh.jpeg"
import EcommExecSaira from "../assets/images/members/ecomm/execs/saira.jpeg"
import matrixLogo from "../assets/logos/matrix_logo.png";
import ecommLogo from "../assets/logos/ecomm_logo.png";
import psynapseLogo from "../assets/logos/psynapse_logo.png";

export { matrixLogo, ecommLogo, psynapseLogo };

export const clubData = [
    {
        name: "Matrix",
        colorClass: "text-[var(--color-matrix)]",
        accentVar: "var(--color-matrix)",
        members: [
            { role: "President", name: "Reyansh Aggarwal", image: MatrixPrez },
            { role: "Vice-President", name: "Ishaan Garg", image: MatrixVP },
            { role: "General Secretary", name: "Atharv Sharma", image: MatrixGen },
            { role: "Joint Secretary", name: "Prayag Nagar", image: MatrixJoint },
            { role: "Media Head", name: "Atharv Saxena", image: MatrixMedia },
        ],
        executives: [
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
        ]
    },
    {
        name: "Ecommbuzz",
        colorClass: "text-[var(--color-ecomm)]",
        accentVar: "var(--color-ecomm)",
        members: [
            { role: "President", name: "Krishiv Dua", image: EcommPrez },
            { role: "Vice-President", name: "Sharanya Sarin", image: EcommVP },
            { role: "General Secretary", name: "Srishti Pandey", image: EcommGen },
            { role: "Joint Secretary", name: "Gaurav Kumar", image: EcommJoint },
            { role: "Media Head", name: "Vanya Bajaj", image: EcommMedia },
        ],
        executives: [
            { name: "Ivanya Sehrawat", role: "executive", image: EcommExecIvanya },
            { name: "Saachipreet Kaur", role: "executive", image: EcommExecSaachi },
            { name: "Avreen Kaur", role: "executive", image: EcommExecAvreen },
            { name: "Shauryavir Singh Jamwal", role: "executive", image: EcommExecJamwal },
            { name: "Divyaansh Gautam", role: "executive", image: EcommExecDivyaansh },
            { name: "Uddeshya Singh Negi", role: "executive", image: EcommExecUddeshya },
            { name: "Saira Kumar", role: "executive", image: EcommExecSaira },
            { name: "Shreyansh Khandelwal", role: "executive", image: EcommExecShreyansh },
        ]
    },
    {
        name: "Psynapse",
        colorClass: "text-[var(--color-psynapse)]",
        accentVar: "var(--color-psynapse)",
        members: [
            { role: "President", name: "Mahi Agrawal", image: PsyPrez },
            { role: "Vice-President", name: "Anishka Patel", image: PsyVP },
            { role: "General Secretary", name: "Rutvija Mohite", image: PsyGen },
            { role: "Joint Secretary", name: "Mariah Susane Robins", image: PsyJoint },
            { role: "Media Head", name: "Kyna Sooden", image: PsyMedia },
        ],
        executives: [
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
            { name: "hello", role: "executive", image: undefined },
        ]
    }
];

export const socialData = {
    matrix: {
        logo: matrixLogo,
        insta: "thematrixclan.msm",
        phone: "+919086222000",
        email: "thematrixclan2026@gmail.com"
    },
    ecomm: {
        logo: ecommLogo,
        insta: "theecommbuzz",
        phone: "+919311286331",
        email: "ecommbuzz2026@gmail.com"
    },
    psynapse: {
        logo: psynapseLogo,
        insta: "psynapse.msm",
        phone: "+919311352507",
        email: "psynapse.msm2026@gmail.com"
    }
}
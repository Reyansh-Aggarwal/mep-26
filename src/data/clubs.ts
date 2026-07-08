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
import PsyExecYashika from "../assets/images/members/psynapse/execs/yashika.jpeg"
import PsyExecVrinda from "../assets/images/members/psynapse/execs/vrinda.jpeg"
import PsyExecAkshita from "../assets/images/members/psynapse/execs/akshita.jpeg"
import PsyExecDiya from "../assets/images/members/psynapse/execs/diya.jpeg"
import PsyExecAyanna from "../assets/images/members/psynapse/execs/ayanna.jpeg"
import PsyExecEshita from "../assets/images/members/psynapse/execs/eshita.jpeg"
import PsyExecAnika from "../assets/images/members/psynapse/execs/anika.jpeg"
import PsyExecKhanak from "../assets/images/members/psynapse/execs/khanak.jpeg"

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
            { name: "Vrinda Gulati", role: "executive", image: PsyExecVrinda },
            { name: "Akshita Sharma", role: "executive", image: PsyExecAkshita },
            { name: "Diya Pillai", role: "executive", image: PsyExecDiya },
            { name: "Ayanna Gupta", role: "executive", image: PsyExecAyanna },
            { name: "Yashika", role: "executive", image: PsyExecYashika },
            { name: "Eshita", role: "executive", image: PsyExecEshita },
            { name: "Anika Vishwakarma", role: "executive", image: PsyExecAnika },
            { name: "Khanak Choudhary", role: "executive", image: PsyExecKhanak }
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
        phone: "+919311352507",
        email: "ecommbuzz2026@gmail.com"
    },
    psynapse: {
        logo: psynapseLogo,
        insta: "psynapse.msm",
        phone: "+919311286331",
        email: "psynapse.msm2026@gmail.com"
    }
}

export interface AlumniMember {
    name: string;
    role: string;
}

export interface AlumniClub {
    name: string;
    colorClass: string;
    accentVar: string;
    coreMembers: AlumniMember[];
    executives: AlumniMember[];
}

export interface AlumniYear {
    year: number;
    clubs: AlumniClub[];
}

export const alumniData: AlumniYear[] = [
    // ── 2025 (Batch of 2024-2025) ──────────────────────────────
    {
        year: 2025,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Ishaan Bhandari", role: "President" },
                    { name: "Aditya Kumar Sharma", role: "Vice-President" },
                    { name: "Harikarthik V K", role: "General Secretary" },
                    { name: "Aarush Sood", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Daniel Andrew Johnson", role: "Executive" },
                    { name: "Avneet Kaur", role: "Executive" },
                    { name: "Ranbir Arora", role: "Executive" },
                    { name: "Akshat Tiwari", role: "Executive" },
                    { name: "Akshit Raj", role: "Executive" },
                    { name: "Arnav Vishwakarma", role: "Executive" },
                    { name: "Awismit Rana", role: "Executive" },
                    { name: "Dominic Savio D'lima", role: "Executive" },
                    { name: "Leon Saljo", role: "Executive" },
                    { name: "Lucien Gorlier", role: "Executive" },
                    { name: "Nixon Paul Khokhar", role: "Executive" },
                    { name: "Rakshitesh Sinha", role: "Executive" },
                    { name: "Rishav Chahar", role: "Executive" },
                    { name: "Samuel Joseph", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Ida Kaushik", role: "President" },
                    { name: "Swayam Seth", role: "Vice-President" },
                    { name: "Anischka Banga", role: "General Secretary" },
                    { name: "Aryan Thakur", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Alfrin Samuel", role: "Executive" },
                    { name: "Ayush Ranjan", role: "Executive" },
                    { name: "Takshi Pathania", role: "Executive" },
                    { name: "Unnati Boyat", role: "Executive" },
                    { name: "Deepanshi Gupta", role: "Executive" },
                    { name: "Shaivi Lohia", role: "Executive" },
                    { name: "Purav Aggarwal", role: "Executive" },
                    { name: "Harshita Joshi", role: "Executive" },
                    { name: "R Seba Regan", role: "Executive" },
                    { name: "Narayani Sikka", role: "Executive" },
                    { name: "Renu Pawar", role: "Executive" },
                    { name: "Kanusha Bopanna", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2024 (Batch of 2023-2024) ──────────────────────────────
    {
        year: 2024,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Shashwat Upadhay", role: "President" },
                    { name: "Anish Kapila", role: "Vice-President" },
                    { name: "Ishan Khanna", role: "General Secretary" },
                    { name: "Khushhal Sharma", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Samyak Singh", role: "Executive" },
                    { name: "Manan Trivedi", role: "Executive" },
                    { name: "Chinmayee Khanna", role: "Executive" },
                    { name: "Arham Jain", role: "Executive" },
                    { name: "Aarav Tiwari", role: "Executive" },
                    { name: "Allen Wilson", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Shubaan Manuja", role: "President" },
                    { name: "Parham Kanth", role: "Vice-President" },
                    { name: "Leesha Dwivedi", role: "General Secretary" },
                    { name: "Jahnavi Verma", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Mahima Soam", role: "Executive" },
                    { name: "Avraaj Singh Anand", role: "Executive" },
                    { name: "Ikjot Singh Anand", role: "Executive" },
                    { name: "Kajsimar Kour", role: "Executive" },
                    { name: "Karunay Malik", role: "Executive" },
                    { name: "Prajnav S. Murthy", role: "Executive" },
                    { name: "Sakshi Kumari", role: "Executive" },
                    { name: "Vikrant Sethi", role: "Executive" },
                ],
            },
            {
                name: "Psynapse",
                colorClass: "text-[var(--color-psynapse)]",
                accentVar: "var(--color-psynapse)",
                coreMembers: [
                    { name: "Tavleen Kaur", role: "President" },
                    { name: "Daksha Bisht", role: "Vice-President" },
                    { name: "Jyotsana Chaudhary", role: "General Secretary" },
                    { name: "Daksh", role: "Joint Secretary" },
                ],
                executives: [],
            },
        ],
    },

    // ── 2023 (Batch of 2022-2023) ──────────────────────────────
    {
        year: 2023,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Palash Gupta", role: "President" },
                    { name: "Prakhar Alok Semwal", role: "Vice-President" },
                    { name: "Hans James", role: "General Secretary" },
                    { name: "Rishabh Aggarwal", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Abhigyan Singh Negi", role: "Executive" },
                    { name: "Ajay Dhalla", role: "Executive" },
                    { name: "Bhavay Yadav", role: "Executive" },
                    { name: "Lakshya Gupta", role: "Executive" },
                    { name: "Pious Babu", role: "Executive" },
                    { name: "Poorva Dwivedi", role: "Executive" },
                    { name: "Samarth Arora", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Arjun Sehrawat", role: "President" },
                    { name: "Parth Jain", role: "Vice-President" },
                    { name: "Andrew Puttam", role: "General Secretary" },
                    { name: "Nikunj Hasteer", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Khyaati Bhadauria", role: "Executive" },
                    { name: "Jaiditya Hora", role: "Executive" },
                    { name: "Arnav Manchanda", role: "Executive" },
                    { name: "Rayna Adlakha", role: "Executive" },
                    { name: "Noor Dhingra", role: "Executive" },
                    { name: "Aquin Manuvel", role: "Executive" },
                    { name: "Ayushi Gupta", role: "Executive" },
                    { name: "Aditya Jacob Bijoy", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2022 (Batch of 2021-2022) ──────────────────────────────
    {
        year: 2022,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Navneeth Ramesh", role: "President" },
                    { name: "Saksham Lamba", role: "Vice-President" },
                    { name: "Eshaan Gupta", role: "General Secretary" },
                    { name: "Arhan Airy", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Viraj Chhikara", role: "Executive" },
                    { name: "Rishit Rastogi", role: "Executive" },
                    { name: "Kyna Marwah", role: "Executive" },
                    { name: "Alisha Elizabeth Jacob", role: "Executive" },
                    { name: "Arohan Tewatia", role: "Executive" },
                    { name: "Palash Gupta", role: "Executive" },
                    { name: "Rishabh Aggarwal", role: "Executive" },
                    { name: "Ajay Dhalla", role: "Executive" },
                    { name: "Samarth Arora", role: "Executive" },
                    { name: "Prakhar Alok Semwal", role: "Executive" },
                    { name: "Hans James", role: "Executive" },
                    { name: "Lakshya Gupta", role: "Executive" },
                    { name: "Krissh Kewat", role: "Executive" },
                    { name: "Yash", role: "Executive" },
                    { name: "Nikhil Banerjee", role: "Executive" },
                    { name: "Pranav Kunnamkudath Roy", role: "Executive" },
                    { name: "Bhavay Yadav", role: "Executive" },
                    { name: "Preet Arjun Beer Singh", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Jonathan Felix D'Lima", role: "President" },
                    { name: "Hansin Sadhu", role: "Vice-President" },
                    { name: "Gazal Singh", role: "General Secretary" },
                    { name: "Sneha Sharma", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Arohan Tewatia", role: "Executive" },
                    { name: "Diya Rajesh Gulia", role: "Executive" },
                    { name: "Pia Mehra", role: "Executive" },
                    { name: "Kyna Marwah", role: "Executive" },
                    { name: "Parth Jain", role: "Executive" },
                    { name: "Pradan Samuel", role: "Executive" },
                    { name: "Arjun Sehrawat", role: "Executive" },
                    { name: "Gurpriya Kaur", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2021 (Batch of 2020-2021) ──────────────────────────────
    {
        year: 2021,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Manvendra Singh", role: "President" },
                    { name: "Kartikeya Sinha", role: "Vice-President" },
                    { name: "Steve Sojan", role: "General Secretary" },
                    { name: "M. Deekshita Reddy", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Zanmeiyui Ningshen", role: "Executive" },
                    { name: "Tobin Rajesh", role: "Executive" },
                    { name: "Eric Kujur", role: "Executive" },
                    { name: "Shrishti Bachchan", role: "Executive" },
                    { name: "Panav Trivedi", role: "Executive" },
                    { name: "Allen Singh", role: "Executive" },
                    { name: "Daksh Suryavanshi", role: "Executive" },
                    { name: "Kshitij Rawat", role: "Executive" },
                    { name: "Shaurya D Rai", role: "Executive" },
                    { name: "Saksham Lamba", role: "Executive" },
                    { name: "Eshaan Gupta", role: "Executive" },
                    { name: "Navneeth Ramesh", role: "Executive" },
                    { name: "Kyna Marwah", role: "Executive" },
                    { name: "Adhithya Iyer", role: "Executive" },
                    { name: "Palash Gupta", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Kisha Jain", role: "President" },
                    { name: "Raghav Kapoor", role: "Vice-President" },
                    { name: "Arjun Mandal", role: "General Secretary" },
                    { name: "Vanshika Rai", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Garima Tanwar", role: "Executive" },
                    { name: "Dishti Girotra", role: "Executive" },
                    { name: "Shimona Dandona", role: "Executive" },
                    { name: "Janvi Jain", role: "Executive" },
                    { name: "Shlok Nanda", role: "Executive" },
                    { name: "Reha Khajuria", role: "Executive" },
                    { name: "Gauri Rampal", role: "Executive" },
                    { name: "Jonathan D'Lima", role: "Executive" },
                    { name: "Pia Mehra", role: "Executive" },
                    { name: "Lavanya Dua", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2020 (Batch of 2019-2020) ──────────────────────────────
    {
        year: 2020,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Aditya Pratap Singh", role: "President" },
                    { name: "Lakshya Tyagi", role: "Vice-President" },
                    { name: "Jaskaran Singh", role: "General Secretary" },
                    { name: "Abhinav Chaudhary", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Aditya Deshpande", role: "Executive" },
                    { name: "Alanna Geo", role: "Executive" },
                    { name: "Ishaan Thairanil", role: "Executive" },
                    { name: "Shivansh Verma", role: "Executive" },
                    { name: "Allen Singh", role: "Executive" },
                    { name: "Kartikey Sinha", role: "Executive" },
                    { name: "M. Deekshitha Reddy", role: "Executive" },
                    { name: "Srishti Bachchan", role: "Executive" },
                    { name: "Steve Sojan", role: "Executive" },
                    { name: "Zanmeiyui Ningshen", role: "Executive" },
                    { name: "Manvendra Singh", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Sona Serene", role: "President" },
                    { name: "Vaibhav Seth", role: "Vice-President" },
                    { name: "Anirudh Ghildiyal", role: "General Secretary" },
                    { name: "Ann Riya Rajeev", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Dhriti Lakhnpal", role: "Executive" },
                    { name: "Meher Saini", role: "Executive" },
                    { name: "Rijul Chadha", role: "Executive" },
                    { name: "Aarav Tanwar", role: "Executive" },
                    { name: "Alex Damien Ekka", role: "Executive" },
                    { name: "Tanisha Kataria", role: "Executive" },
                    { name: "Janhavi Narang", role: "Executive" },
                    { name: "Shreya Gupta", role: "Executive" },
                    { name: "Swastika Dahiya", role: "Executive" },
                    { name: "Vanshika Rai", role: "Executive" },
                    { name: "Arjun Mandal", role: "Executive" },
                    { name: "Kisha Jain", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2019 (Batch of 2018-2019) ──────────────────────────────
    {
        year: 2019,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Paavan Nagpal", role: "President" },
                    { name: "Oliver Raphael", role: "Vice-President" },
                    { name: "Thomas Kannanthara", role: "General Secretary" },
                    { name: "Abhishek Gayan", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Govind Arora", role: "Executive" },
                    { name: "Jayant Rohilla", role: "Executive" },
                    { name: "Agamdeep Bains", role: "Executive" },
                    { name: "Arnav Andrew Jose", role: "Executive" },
                    { name: "Harmann Singh", role: "Executive" },
                    { name: "Ashish A Joseph", role: "Executive" },
                    { name: "Bernard Thomas", role: "Executive" },
                    { name: "Hridhaye Bir Singh", role: "Executive" },
                    { name: "Lakshya Tyagi", role: "Executive" },
                    { name: "Aditya Pratap Singh", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Eshaan Tandon", role: "President" },
                    { name: "Kevin Jones", role: "Vice-President" },
                    { name: "Rochelle Prakash", role: "General Secretary" },
                    { name: "Teesha Seth", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Shikhar Singh", role: "Executive" },
                    { name: "Yajat Gulia", role: "Executive" },
                    { name: "Conchita Sahu", role: "Executive" },
                    { name: "Chhavi Garg", role: "Executive" },
                    { name: "Joshua Mario Xavier", role: "Executive" },
                    { name: "Rashmika Gupta", role: "Executive" },
                    { name: "Aditi Singh", role: "Executive" },
                    { name: "Kush Badola", role: "Executive" },
                    { name: "Vaibhav Seth", role: "Executive" },
                    { name: "Raymond Joseph", role: "Executive" },
                    { name: "Anirudh Ghildiyal", role: "Executive" },
                    { name: "Sona Serene", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2018 (Batch of 2017-2018) ──────────────────────────────
    {
        year: 2018,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Manan Sharma", role: "President" },
                    { name: "Adhiraj Singh", role: "Vice-President" },
                    { name: "Shrey Shukla", role: "General Secretary" },
                    { name: "Amogh Sinha", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Arvind Raju", role: "Executive" },
                    { name: "Chirag Chauhan", role: "Executive" },
                    { name: "Paras Godara", role: "Executive" },
                    { name: "Jayant Kumar", role: "Executive" },
                    { name: "Sarthak Yadav", role: "Executive" },
                    { name: "Sucheta Nain", role: "Executive" },
                    { name: "Govind Arora", role: "Executive" },
                    { name: "Paavan Nagpal", role: "Executive" },
                    { name: "Oliver Raphael", role: "Executive" },
                    { name: "Ashish Sharma", role: "Executive" },
                    { name: "Thomas Kannanthara", role: "Executive" },
                    { name: "Atikant Ahluvwalia", role: "Executive" },
                    { name: "Abhishek Gayan", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Animan Parashar", role: "President" },
                    { name: "Manushrie Verma", role: "Vice-President" },
                    { name: "Snigdha Sharma", role: "General Secretary" },
                    { name: "Jiya Sharma", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Eshaan Tandon", role: "Executive" },
                    { name: "Rashmika Gupta", role: "Executive" },
                    { name: "Kevin Jones", role: "Executive" },
                    { name: "Shikhar Singh", role: "Executive" },
                    { name: "Conchita Sahu", role: "Executive" },
                    { name: "Teesha Seth", role: "Executive" },
                    { name: "Shivansh Sood", role: "Executive" },
                    { name: "Tanvi Anand", role: "Executive" },
                    { name: "Dikshant Tanwar", role: "Executive" },
                    { name: "Himmat Singh", role: "Executive" },
                    { name: "Abhimanyu Deswal", role: "Executive" },
                    { name: "George Toppo", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2017 (Batch of 2016-2017) ──────────────────────────────
    {
        year: 2017,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Raghav Byala", role: "President" },
                    { name: "Jisbin Joseph", role: "Vice-President" },
                    { name: "Jaidev Singh", role: "General Secretary" },
                    { name: "Abhinav Geo", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Arvind Raju", role: "Executive" },
                    { name: "Akshaan Khanna", role: "Executive" },
                    { name: "Vikrant Dayal", role: "Executive" },
                    { name: "Chetan Kandpal", role: "Executive" },
                    { name: "Gurjas Singh", role: "Executive" },
                    { name: "Parth Behl", role: "Executive" },
                    { name: "Dhananjay Sachdeva", role: "Executive" },
                    { name: "Rohan Dua", role: "Executive" },
                    { name: "Manan Sharma", role: "Executive" },
                    { name: "Amogh Sinha", role: "Executive" },
                    { name: "Shrey Shukla", role: "Executive" },
                    { name: "Yashardhan Shukla", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Prableen Kaur Chandhok", role: "President" },
                    { name: "Ashwin Bhanot", role: "Vice-President" },
                    { name: "Kalyani Nair", role: "General Secretary" },
                    { name: "Kartik Vinayak", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Utkarsh Kakkar", role: "Executive" },
                    { name: "Anni Bhardwaj", role: "Executive" },
                    { name: "Bhawesh Sahni", role: "Executive" },
                    { name: "Devansh Bhardwaj", role: "Executive" },
                    { name: "Dhruv Tiwari", role: "Executive" },
                    { name: "Sandeep Malhotra", role: "Executive" },
                    { name: "Snigdha Sharma", role: "Executive" },
                    { name: "Manushrie Verma", role: "Executive" },
                    { name: "Jiya Sharma", role: "Executive" },
                    { name: "Tanvi Anand", role: "Executive" },
                    { name: "Animan Parashar", role: "Executive" },
                    { name: "Himmat Singh", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2016 (Batch of 2015-2016) ──────────────────────────────
    {
        year: 2016,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Kumar Shashwat", role: "President" },
                    { name: "Kush Parmar", role: "Vice-President" },
                    { name: "Rasik Raj", role: "General Secretary" },
                    { name: "Chris George", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Kalhan Sapru", role: "Executive" },
                    { name: "James Kannanthara", role: "Executive" },
                    { name: "Parikansh Ahluwalia", role: "Executive" },
                    { name: "Jatin Gupta", role: "Executive" },
                    { name: "Aryaman Mohapatra", role: "Executive" },
                    { name: "Aditya Sheshaadri", role: "Executive" },
                    { name: "Jisbin Joseph", role: "Executive" },
                    { name: "Raghav Byala", role: "Executive" },
                    { name: "Ritesh Dutta", role: "Executive" },
                    { name: "Rohan Dua", role: "Executive" },
                    { name: "Mathew Kannanthara", role: "Executive" },
                    { name: "Abhinav Geo", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Chaitanya Chadha", role: "President" },
                    { name: "Shaurya Pokhriyal", role: "Vice-President" },
                    { name: "Jason Lobo", role: "General Secretary" },
                    { name: "Paul Babu", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Apoorv Phillips", role: "Executive" },
                    { name: "Arjan Singh", role: "Executive" },
                    { name: "Ashley Wilkinson", role: "Executive" },
                    { name: "Navya Achantani", role: "Executive" },
                    { name: "Pranay Sundriyal", role: "Executive" },
                    { name: "Rishabh Chauhan", role: "Executive" },
                    { name: "Anni Bhardwaj", role: "Executive" },
                    { name: "Ashwin Bhanot", role: "Executive" },
                    { name: "Kalyani Nair", role: "Executive" },
                    { name: "Kartik Vinayak", role: "Executive" },
                    { name: "Prableen Kaur", role: "Executive" },
                    { name: "Vedika Dewan", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2015 (Batch of 2014-2015) ──────────────────────────────
    {
        year: 2015,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Jibin Joseph", role: "President" },
                    { name: "Samarth Chugh", role: "Vice-President" },
                    { name: "Rakshit Joshi", role: "General Secretary" },
                    { name: "Samar Rawat", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Mohit Sharma", role: "Executive" },
                    { name: "Harshil Sharma", role: "Executive" },
                    { name: "Dhruv Singh", role: "Executive" },
                    { name: "Devansh Rathore", role: "Executive" },
                    { name: "Suyash Agarwal", role: "Executive" },
                    { name: "Rishabh Rastogi", role: "Executive" },
                    { name: "Mayank", role: "Executive" },
                    { name: "Chris George", role: "Executive" },
                    { name: "Kumar Shashwat", role: "Executive" },
                    { name: "Jatin Gupta", role: "Executive" },
                    { name: "Kush Parmar", role: "Executive" },
                    { name: "Akshit Raghav", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2014 (Batch of 2013-2014) ──────────────────────────────
    {
        year: 2014,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Rohan Gulati", role: "President" },
                    { name: "Divye Girotra", role: "Vice-President" },
                    { name: "Kanwar Pratap Singh", role: "General Secretary" },
                    { name: "Jibin Joseph", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Yashasvi Bhatti", role: "Executive" },
                    { name: "Paras Pandey", role: "Executive" },
                    { name: "Aditya Bagaria", role: "Executive" },
                    { name: "Sahil Sharma", role: "Executive" },
                    { name: "Joe Joseph", role: "Executive" },
                    { name: "Samarth Chugh", role: "Executive" },
                    { name: "Samar Rawat", role: "Executive" },
                    { name: "Harshil Sharma", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Sharath Chandran", role: "President" },
                    { name: "Dhruv Dua", role: "Vice-President" },
                    { name: "Kshitij Dua", role: "General Secretary" },
                    { name: "Karan Chauhan", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Chinmay Indurkar", role: "Executive" },
                    { name: "Shivanker Tandon", role: "Executive" },
                    { name: "Kartik Sood", role: "Executive" },
                    { name: "Sahib S Bawa", role: "Executive" },
                    { name: "Janesh Jain", role: "Executive" },
                    { name: "Pratinav Girsa", role: "Executive" },
                    { name: "Shouriya Sirohi", role: "Executive" },
                    { name: "Devanjal Singh", role: "Executive" },
                    { name: "Neil Jacob Oomen", role: "Executive" },
                    { name: "Parth Malik", role: "Executive" },
                    { name: "Shashank Sharma", role: "Executive" },
                    { name: "Deepansh Garg", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2013 (Batch of 2012-2013) ──────────────────────────────
    {
        year: 2013,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Gurshabad Grover", role: "President" },
                    { name: "Rahul Bisht", role: "Vice-President" },
                    { name: "Manu Kadyan", role: "General Secretary" },
                    { name: "Yaman Arora", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Judhjit Ganguli", role: "Executive" },
                    { name: "Karan Gupta", role: "Executive" },
                    { name: "Kirti Dhwaj Singh", role: "Executive" },
                    { name: "Rahul Sharma", role: "Executive" },
                    { name: "Ravpreet Grover", role: "Executive" },
                    { name: "Divye Girotra", role: "Executive" },
                    { name: "Kanwar Pratap Singh", role: "Executive" },
                    { name: "Rohan Gulati", role: "Executive" },
                    { name: "Yashasvi Bhatti", role: "Executive" },
                    { name: "Jibin Joseph", role: "Executive" },
                    { name: "Shivam Mittal", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Prateek Paul", role: "President" },
                    { name: "Amanbir Bajwa", role: "Vice-President" },
                    { name: "Anurag Jacob", role: "General Secretary" },
                    { name: "Dominic Xavier", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Devesh Sethi", role: "Executive" },
                    { name: "Shrrey Mehta", role: "Executive" },
                    { name: "Jaskaran Singh Narang", role: "Executive" },
                    { name: "Kushagra Ahuja", role: "Executive" },
                    { name: "Jatin Bhagat", role: "Executive" },
                    { name: "Konish Naidu", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2012 (Batch of 2011-2012) ──────────────────────────────
    {
        year: 2012,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Vishal Gupta", role: "President" },
                    { name: "Asheesh Aggarwal", role: "Vice-President" },
                    { name: "Stanzin Namgyal", role: "General Secretary" },
                    { name: "Vinayak Mishra", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Param Adiseshiah", role: "Executive" },
                    { name: "Raghav Pande", role: "Executive" },
                    { name: "Abhinav S. Verma", role: "Executive" },
                    { name: "Aditya Bhanot", role: "Executive" },
                    { name: "Mihir Sharma", role: "Executive" },
                    { name: "Ashish Mathew", role: "Executive" },
                    { name: "Divye Girotra", role: "Executive" },
                    { name: "Kanwar Pratap Singh", role: "Executive" },
                    { name: "Rohan Gulati", role: "Executive" },
                    { name: "Yashasvi Bhatti", role: "Executive" },
                    { name: "Jibin Joseph", role: "Executive" },
                    { name: "Shivam Mittal", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Raag Bhasin", role: "President" },
                    { name: "Mark Pavarmani", role: "Vice-President" },
                    { name: "Roy Mathew Joseph", role: "General Secretary" },
                    { name: "", role: "" },
                ],
                executives: [
                    { name: "Hetish Singh", role: "Executive" },
                    { name: "Nitish Gupta", role: "Executive" },
                    { name: "Anurag Yadav", role: "Executive" },
                    { name: "Aniket Gawas", role: "Executive" },
                ],
            },
        ],
    },

    // ── 2011 (Batch of 2010-2011) ──────────────────────────────
    {
        year: 2011,
        clubs: [
            {
                name: "Matrix",
                colorClass: "text-[var(--color-matrix)]",
                accentVar: "var(--color-matrix)",
                coreMembers: [
                    { name: "Arjun Narain", role: "President" },
                    { name: "Akshay Nandakumar", role: "Vice-President" },
                    { name: "Utkarsh Dubey", role: "General Secretary" },
                    { name: "Himanshu Dabar", role: "Joint Secretary" },
                ],
                executives: [
                    { name: "Rajat Saxena", role: "Executive" },
                    { name: "Anjandeep Shani", role: "Executive" },
                    { name: "Rushil Punj", role: "Executive" },
                    { name: "Rishabh Saxena", role: "Executive" },
                    { name: "Sidhesh Badrinarayan", role: "Executive" },
                    { name: "Yuvraj Wahi", role: "Executive" },
                    { name: "Mayank Sharma", role: "Executive" },
                    { name: "Leo Lukose", role: "Executive" },
                    { name: "Arjun Chhilla", role: "Executive" },
                    { name: "Steve Mario", role: "Executive" },
                    { name: "Prajagar Vashisht", role: "Executive" },
                    { name: "Ananay Singh", role: "Executive" },
                    { name: "Manraj Singh", role: "Executive" },
                    { name: "Vishal Gupta", role: "Executive" },
                    { name: "Mihir Sharma", role: "Executive" },
                    { name: "Vinayak Mishra", role: "Executive" },
                    { name: "Ashish Mathew", role: "Executive" },
                    { name: "Stanzin Namgyal", role: "Executive" },
                ],
            },
            {
                name: "Ecommbuzz",
                colorClass: "text-[var(--color-ecomm)]",
                accentVar: "var(--color-ecomm)",
                coreMembers: [
                    { name: "Ayushman Mohan", role: "President" },
                    { name: "Raag Bhasin", role: "Vice-President" },
                    { name: "Manav Bhalla", role: "Joint Secretary" },
                    { name: "", role: "" },
                ],
                executives: [
                    { name: "Aviral Gupta", role: "Executive" },
                    { name: "Ayush Khanijo", role: "Executive" },
                    { name: "Abhinav Sethi", role: "Executive" },
                    { name: "Anuj Jhokani", role: "Executive" },
                    { name: "Deepak Malyala", role: "Executive" },
                    { name: "Madhav Dhir Kohli", role: "Executive" },
                    { name: "Vikram Deep Singh Dayal", role: "Executive" },
                    { name: "Aniket Gawas", role: "Executive" },
                    { name: "Mark Pavamani", role: "Executive" },
                    { name: "Hetish Raj Singh", role: "Executive" },
                    { name: "Roy Joseph", role: "Executive" },
                    { name: "Manaved Nambiar", role: "Executive" },
                    { name: "Nitish Aggarwal", role: "Executive" },
                ],
            },
        ],
    },


];
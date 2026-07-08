/* ─────────────── Results data ───────────────
 * Year-wise compiled results. Each year holds a sequence of events; each event
 * holds a list of awards (award title + recipient school). `rank` drives the
 * medal styling: 1 = gold (winner / "Best"), 2 = silver (runner-up), 0 = special
 * category award (no podium rank, e.g. "Best Editor", "Best Speaker").
 */

export type Award = {
    title: string;
    recipient: string;
    rank: 0 | 1 | 2;
};

export type ResultEvent = {
    name: string;
    awards: Award[];
};

export type YearResult = {
    year: number;
    events: ResultEvent[];
};

export const resultsData: YearResult[] = [
    {
        year: 2024,
        events: [
            {
                name: "Xero Day",
                awards: [
                    { title: "Best Coder", recipient: "Army Public School, D.K", rank: 1 },
                    { title: "2nd Best Coder", recipient: "St. Xavier's", rank: 2 },
                ],
            },
            {
                name: "Tactus Gramen",
                awards: [
                    { title: "Best Gamer", recipient: "St. Columba's School", rank: 1 },
                    { title: "2nd Best Gamer", recipient: "St. Xavier's Sr. Secondary School", rank: 2 },
                ],
            },
            {
                name: "A/V Sync",
                awards: [
                    { title: "Best Movie", recipient: "Army Public School, D.K", rank: 1 },
                    { title: "2nd Best Movie", recipient: "Loreto Convent", rank: 2 },
                    { title: "Best Editor", recipient: "Army Public School, D.K", rank: 0 },
                    { title: "Best Director", recipient: "Mater Dei School", rank: 0 },
                ],
            },
            {
                name: "Techtures",
                awards: [
                    { title: "1st", recipient: "Delhi Public School, RKP", rank: 1 },
                    { title: "2nd", recipient: "Air Force Golden Jubilee Institute", rank: 2 },
                ],
            },
            {
                name: "Project R",
                awards: [
                    { title: "1st", recipient: "Air Force Bal Bharti", rank: 1 },
                    { title: "2nd", recipient: "Delhi Public School, RKP", rank: 2 },
                ],
            },
            {
                name: "Mindcraft",
                awards: [
                    { title: "1st", recipient: "Air Force Bal Bharti", rank: 1 },
                    { title: "2nd", recipient: "Air Force Golden Jubilee", rank: 2 },
                ],
            },
            {
                name: "Soundwave",
                awards: [
                    { title: "1st", recipient: "Delhi Public School, RKP", rank: 1 },
                ],
            },
            {
                name: "Brand Ad",
                awards: [
                    { title: "Best Advertisement", recipient: "Mater Dei School", rank: 1 },
                ],
            },
            {
                name: "Symposium",
                awards: [
                    { title: "Best Team", recipient: "Tagore International School", rank: 1 },
                    { title: "Best Speaker", recipient: "Mater Dei School", rank: 0 },
                    { title: "Best Interjector", recipient: "Convent of Jesus and Mary", rank: 0 },
                    { title: "Best Visual Aid", recipient: "Mount Carmel School, Dwarka", rank: 0 },
                ],
            },
            {
                name: "Bidding Bankers",
                awards: [
                    { title: "Best Bid", recipient: "Tagore International School, Vasant Vihar", rank: 1 },
                    { title: "Best Venture Capitalist", recipient: "Air Force Bal Bharti School", rank: 0 },
                ],
            },
            {
                name: "Pitch Perfect",
                awards: [
                    { title: "Best Pitch", recipient: "Air Force Bal Bharti School", rank: 1 },
                    { title: "2nd Best Pitch", recipient: "Convent of Jesus and Mary", rank: 2 },
                ],
            },
            {
                name: "Diorama",
                awards: [
                    { title: "Best Poster", recipient: "Delhi Public School, RKP", rank: 1 },
                    { title: "Best Photography", recipient: "Convent of Jesus and Mary", rank: 0 },
                ],
            },
            {
                name: "Quizzardry",
                awards: [
                    { title: "1st position", recipient: "Delhi Public School, RKP", rank: 1 },
                    { title: "2nd position", recipient: "Loreto Convent", rank: 2 },
                ],
            },
            {
                name: "Psynapse (Stage Play)",
                awards: [
                    { title: "1st position", recipient: "Loreto Convent", rank: 1 },
                    { title: "2nd position", recipient: "Mater Dei", rank: 2 },
                ],
            },
        ],
    },
];

export interface ContestantResponse {
    id:         string;
    userName:   string;
    imageUrl:   string;
    fullName?:   string;
    socialLink?: string;
    contests: number;
    fullScore: number;
    fullPenalty: number;
}

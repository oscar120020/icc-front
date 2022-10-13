

export interface UserRank {
    rank: number;
    userName: string;
    score: number;
    penalty: number,
    image: string;
}


export interface Competitor {
    username: string,
    fullname: string,
    score: number,
    penalty: number
}


export interface RankingProps {
    competitors: Competitor[],
}
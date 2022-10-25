import { RakingGlobal } from "./seasonResponse";


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
    globalRanking: RakingGlobal[],
}

<<<<<<< HEAD
=======
export interface Season {
    name: string,
    numberCompetitors: number,
    numberChanllenges: number,
    beginning: string,
    end: string
}
>>>>>>> 700a7e12451b3661593898de0261c8ea552c82de


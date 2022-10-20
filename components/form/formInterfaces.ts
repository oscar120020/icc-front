
export interface SeasonFormValues {
    name: string;
    beginning: Date;
    end: Date;
}

export interface RankingFormValues {
    url: string;
    seasonId: string;
}

export interface LoginFormValues {
    username: string;
    password: string;
}

export interface ContestantFormValues {
    username: string;
    imageUrl: string;
    fullName?: string;
    socialLink?: string
}

export interface AdminUserFormValues {
    username: string;
    password: string;
}
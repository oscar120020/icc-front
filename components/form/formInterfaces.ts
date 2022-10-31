export interface SeasonFormValues {
  id?: string;
  name: string;
  beginning: Date;
  end: Date;
}

export interface RankingFormValues {
  id?: string;
  url: string;
  date: Date;
  seasonId: string;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface ContestantFormValues {
  id?: string;
  username?: string;
  imageUrl: string;
  fullName?: string;
  socialLink?: string;
}

export interface AdminUserFormValues {
  username: string;
  password: string;
}

export interface EventFormValues {
  id?: string;
  name: string;
  imageUrl?: string;
  rankingId?: string;
  date: Date;
}

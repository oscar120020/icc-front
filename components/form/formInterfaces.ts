export interface SeasonFormValues {
  id?: string;
  name: string;
  beginning: Date;
  end: Date;
}

export interface RankingFormValues {
  id?: string;
  rankingUrl: string;
  name: string;
  begin: Date;
  end: Date;
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

export interface OrganizerFormValues {
  id?: string;
  fullName: string;
  imageUrl?: string;
  socialLink?: string;
  role: string;
}

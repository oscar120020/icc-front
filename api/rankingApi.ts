import axios from "axios";
import { RakingGlobal, Ranking, SeasonByIdResponse, SeasonResponse } from "../interfaces/seasonResponse";

export const rankingApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
});

export const getSeasons = async () => {
  return rankingApi.get<SeasonResponse[]>("/season").then((response) => response.data);
};

export const getSeasonById = async (id: string) => {
  return rankingApi.get<SeasonByIdResponse[]>(`/season/${id}`).then((response) => response.data);
  
};

export const getGlobalRaking = async (id:string) => {
  return rankingApi.get<RakingGlobal[]>(`/season/global-ranking?seasonId=${id}`).then((response) => response.data)
}


export const getAllRanking = async () => {
  return rankingApi.get<Ranking[]>(`/ranking/all`).then((response) => response.data)
}

export const getRankingById = async (id: string) => {
  return rankingApi.get<Ranking[]>(`/ranking/${id}`).then((response) => response.data)
}

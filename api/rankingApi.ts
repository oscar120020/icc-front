import axios from "axios";
import { RakingGlobal, SeasonByIdResponse, SeasonResponse } from "../interfaces/seasonResponse";

export const rankingApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
});

export const getSeasons = () => {
  return rankingApi.get<SeasonResponse[]>("/season").then((response) => response.data);
};

export const getSeasonById = (id: string) => {
  return rankingApi.get<SeasonByIdResponse[]>(`/season/${id}`).then((response) => response.data);
  
};

export const getGlobalRaking = (id:string) => {
  return rankingApi.get<RakingGlobal[]>(`/season/global-ranking?seasonId=${id}`).then((response) => response.data)
}

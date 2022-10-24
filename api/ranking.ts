import axios, { AxiosError } from "axios";
import { RankingFormValues } from "../components/form/formInterfaces";
import { RankingResponse } from "../interfaces/rankingsResponse";
import { SeasonCreatedResponse } from "../interfaces/seasonsResponse";
import { rankingApi } from ".";

export const getRankings = async () => {
  try {
    const response = await rankingApi.get<RankingResponse[]>("/ranking/all");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar los rankings");
  }
};

export const addRankingToSeason = async (
  body: RankingFormValues,
  token: string
) => {
  const { seasonId, url } = body;
  try {
    const response = await rankingApi.put<{ msg: string }>(
      `season/ranking/${seasonId}`,
      { rankingUrl: url },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error instanceof AxiosError) {
      throw new Error((error as any).response?.data.message);
    } else {
      throw new Error("Error al crear ranking - intente más tarde");
    }
  }
};

export const removeRanking = async (rankingId: string, token: string) => {
  try {
    const response = await rankingApi.delete<SeasonCreatedResponse>(
      `ranking/${rankingId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error instanceof AxiosError) {
      throw new Error((error as any).response?.data.message);
    } else {
      throw new Error("Error al eliminar - intente más tarde");
    }
  }
};

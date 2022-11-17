import axios, { AxiosError } from "axios";
import { RankingFormValues } from "../components/form/formInterfaces";
import { RankingResponse } from "../interfaces/rankingsResponse";
import { Ranking, SeasonCreatedResponse } from "../interfaces/seasonsResponse";
import { rankingApi } from ".";

export const getAllRanking = async () => {
  try {
    const response = await rankingApi.get<RankingResponse[]>("/ranking/all");
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los rankings");
  }
};

export const addRankingToSeason = async (
  body: RankingFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.post<{ msg: string }>(
      `season/ranking`,
      body,
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
      throw new Error("Error al crear competencia - intente más tarde");
    }
  }
};

export const updateRanking = async (
  rankingId: string,
  body: RankingFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.put<RankingResponse>(
      `ranking/${rankingId}`,
      {date: body.end},
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
      throw new Error("Error al actualizar - intente más tarde");
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

export const getRankingById = async (id: string) => {
  try {
    const response = await rankingApi.get<Ranking>(`/ranking/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar el ranking");
  }
}

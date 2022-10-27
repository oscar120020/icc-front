import axios, { AxiosError } from "axios";
import { SeasonFormValues } from "../components/form/formInterfaces";
import {
    AllRecorsdResponse,
  SeasonCreatedResponse,
  SeasonsResponse,
} from "../interfaces/seasonsResponse";
import { rankingApi } from ".";
import { RakingGlobal, SeasonByIdResponse } from "../interfaces/seasonResponse";

export const getSeasons = async () => {
  try {
    const response = await rankingApi.get<SeasonsResponse[]>("/season");
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar las seasons");
  }
};

export const createSeason = async (body: SeasonFormValues, token: string) => {
  try {
    const response = await rankingApi.post<SeasonCreatedResponse>(
      "season",
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
      throw new Error("Error al crear - intente más tarde");
    }
  }
};

export const updateSeason = async (
  seasonId: string,
  body: SeasonFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.put<SeasonCreatedResponse>(
      `season/${seasonId}`,
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
      throw new Error("Error al actualizar - intente más tarde");
    }
  }
};

export const deleteSeason = async (seasonId: string, token: string) => {
  try {
    const response = await rankingApi.delete<SeasonCreatedResponse>(
      `season/${seasonId}`,
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

export const getSeasonById = async (id: string) => {
  try {
    const response = await rankingApi.get<SeasonByIdResponse>(`/season/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar las seasons");
  }
};

export const getGlobalRaking = async (id: string) => {
  try {
    const response = await rankingApi.get<RakingGlobal[]>(`/season/global-ranking?seasonId=${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar las seasons");
  }
};

export const getAllInformation = async () => {
  try {
    const response = await rankingApi.get<AllRecorsdResponse>(
      "/season/all-info"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar los datos");
  }
};

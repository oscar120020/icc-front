import fetchAdapter from "@vespaiach/axios-fetch-adapter";
import axios, { AxiosError } from "axios";
import {
  LoginFormValues,
  SeasonFormValues,
} from "../components/form/formInterfaces";
import { AdminUserResponse } from "../interfaces/adminUsersResponse";
import { ContestantsResponse } from "../interfaces/contestansResponse";
import { RankingResponse } from "../interfaces/rankingsResponse";
import { SeasonCreatedResponse, SeasonsResponse } from "../interfaces/seasonsResponse";

export const rankingApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  adapter: fetchAdapter,
});

export const getSeasons = async () => {
  try {
    const response = await rankingApi.get<SeasonsResponse[]>("/season");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar las seasons");
  }
};

export const getRankings = async () => {
  try {
    const response = await rankingApi.get<RankingResponse[]>("/ranking/all");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar los rankings");
  }
};

export const getContestants = async () => {
  try {
    const response = await rankingApi.get<ContestantsResponse[]>("/competitor");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar los participantes");
  }
};

export const getAdminUsers = async (token: string) => {
  try {
    const response = await rankingApi.get<AdminUserResponse[]>("/auth/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar los participantes");
  }
};

export const loginToAdmin = async (body: LoginFormValues) => {
  try {
    const response = await rankingApi.post<{ token: string }>(
      "/auth/login",
      body
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error instanceof AxiosError) {
      throw new Error((error as any).response?.data.message);
    } else {
      throw new Error("Error al logearse - intente más tarde");
    }
  }
};

export const revalidateToken = async (token: string) => {
  try {
    const response = await rankingApi.get<{ token: string }>(
      "/auth/revalidate",
      {
        headers: {
          cookie: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error instanceof AxiosError) {
      throw new Error("Token invalido");
    } else {
      throw new Error("Error al validar la información");
    }
  }
};

export const createSeason = async (body: SeasonFormValues, token: string) => {
  try {
    const response = await rankingApi.post<SeasonCreatedResponse>("season", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error instanceof AxiosError) {
      throw new Error((error as any).response?.data.message);
    } else {
      throw new Error("Error al crear - intente más tarde");
    }
  }
};

export const updateSeason = async (seasonId: string, body: SeasonFormValues, token: string) => {
  try {
    const response = await rankingApi.put<SeasonCreatedResponse>(`season/${seasonId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    const response = await rankingApi.delete<SeasonCreatedResponse>(`season/${seasonId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error instanceof AxiosError) {
      throw new Error((error as any).response?.data.message);
    } else {
      throw new Error("Error al eliminar - intente más tarde");
    }
  }
};
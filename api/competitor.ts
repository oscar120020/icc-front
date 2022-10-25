import axios, { AxiosError } from "axios";
import { ContestantFormValues } from "../components/form/formInterfaces";
import { ContestantResponse } from "../interfaces/contestansResponse";
import { SeasonCreatedResponse } from "../interfaces/seasonsResponse";
import { rankingApi } from ".";

export const getContestants = async () => {
  try {
    const response = await rankingApi.get<ContestantResponse[]>("/competitor");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar los participantes");
  }
};

export const updateCompetitor = async (
  competitorId: string,
  body: ContestantFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.put<ContestantResponse>(
      `competitor/${competitorId}`,
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

export const removeCompetitor = async (competitorId: string, token: string) => {
  try {
    const response = await rankingApi.delete<SeasonCreatedResponse>(
      `competitor/${competitorId}`,
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

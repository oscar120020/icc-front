import axios, { AxiosError } from "axios";
import { rankingApi } from ".";
import { OrganizerFormValues } from "../components/form/formInterfaces";
import { OrganizerResponse } from "../interfaces/organizerReponse";

export const getOrganizer = async () => {
  try {
    const response = await rankingApi.get<OrganizerResponse[]>("/organizer");
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los organizadores");
  }
};

export const createOrganizer = async (
  body: OrganizerFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.post<OrganizerResponse>(
      "organizer",
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

export const updateOrganizer = async (
  organizerId: string,
  body: OrganizerFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.put<OrganizerResponse>(
      `organizer/${organizerId}`,
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

export const removeOrganizer = async (organizerId: string, token: string) => {
  try {
    const response = await rankingApi.delete<OrganizerResponse>(
      `organizer/${organizerId}`,
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

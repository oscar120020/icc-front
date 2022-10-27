import axios, { AxiosError } from "axios";
import { rankingApi } from ".";
import { EventFormValues } from "../components/form/formInterfaces";
import { EventResponse } from "../interfaces/eventResponse";

export const getEvents = async () => {
  try {
    const response = await rankingApi.get<EventResponse[]>("/event");
    return response.data;
  } catch (error) {
    throw new Error("Error al cargar los eventos");
  }
};

export const createEvent = async (body: EventFormValues, token: string) => {
  try {
    const response = await rankingApi.post<EventResponse>(
      "event",
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

export const updateEvent = async (
  eventId: string,
  body: EventFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.put<EventResponse>(
      `event/${eventId}`,
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

export const deleteEvent = async (eventId: string, token: string) => {
  try {
    const response = await rankingApi.delete<EventResponse>(
      `event/${eventId}`,
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

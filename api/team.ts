import { rankingApi } from ".";
import { OrganizerResponse } from "../interfaces/organizerReponse";

export const getOrganizer = async () => {
    try {
      const response = await rankingApi.get<OrganizerResponse[]>("/organizer");
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw new Error("Error al cargar los organizadores");
    }
  };
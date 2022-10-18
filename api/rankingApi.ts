import axios from "axios";
import { SeasonsResponse } from "../interfaces/seasonsResponse";

export const rankingApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
});

export const getSeasons = async() => {
  try {
    const response = await rankingApi.get<SeasonsResponse[]>("/season");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar las seasons")
  }
};

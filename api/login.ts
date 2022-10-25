import axios, { AxiosError } from "axios";
import { LoginFormValues } from "../components/form/formInterfaces";
import { rankingApi } from ".";

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

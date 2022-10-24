import axios, { AxiosError } from "axios";
import { AdminUserFormValues } from "../components/form/formInterfaces";
import { AdminUserResponse } from "../interfaces/adminUsersResponse";
import { rankingApi } from ".";

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

export const removeAdmin = async (adminId: string, token: string) => {
  try {
    const response = await rankingApi.delete(`auth/user/${adminId}`, {
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

export const createUserAdmin = async (
  body: AdminUserFormValues,
  token: string
) => {
  try {
    const response = await rankingApi.post<AdminUserResponse>(
      "auth/create-user",
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

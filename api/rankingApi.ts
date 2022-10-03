import axios from "axios";

export const rankingApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`
})
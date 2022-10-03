import axios from "axios";

export const rankingApi = axios.create({
    baseURL: 'http://localhost:3006/api/v1'
})
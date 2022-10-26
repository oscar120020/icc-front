import fetchAdapter from "@vespaiach/axios-fetch-adapter";
import axios from "axios";

export const rankingApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  adapter: fetchAdapter,
});

export * from './admin'
export * from './competitor'
export * from './login'
export * from './ranking'
export * from './season'
export * from './event'


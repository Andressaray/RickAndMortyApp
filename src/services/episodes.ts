import axios from "axios";
import { API_URL } from "../constants";

export const getEpisodes = async (params: any) => {
  const response = await axios.get(`${API_URL}/episode`, {
    params,
  });
  return response.data;
};
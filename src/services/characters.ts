import axios from "axios";
import { API_URL } from "../constants";

export const getCharacters = async (params: any) => {
  const response = await axios.get(`${API_URL}/character`, {
    params,
  });
  return response.data;
};

export const getCharacter = async (id: number) => {
  const response = await axios.get(`${API_URL}/character/${id}`);
  return response.data;
};

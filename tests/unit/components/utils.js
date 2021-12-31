import axios from "axios";

export const BASE_URL = "https://api.thecatapi.com/v1";

export const fetchCategory = async () => {
  try {
    return await axios.get(`${BASE_URL}/categories`);
  } catch (e) {
    return [];
  }
};
export const fetchBreed = async () => {
  try {
    return await axios.get(`${BASE_URL}/breeds`);
  } catch (e) {
    return [];
  }
};
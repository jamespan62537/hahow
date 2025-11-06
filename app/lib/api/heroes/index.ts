import API from "../createClient";
import type { HeroType } from "./types";

const getHeroes = async (): Promise<HeroType[]> => {
  try {
    const response = await API.get("/heroes");
    return response.data;
  } catch (error) {
    console.error("Error fetching heroes", error);
    return [];
  }
};

export { getHeroes };

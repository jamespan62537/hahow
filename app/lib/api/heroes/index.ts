import API from "../createClient";
import type { HeroType, HeroProfileType } from "./types";
import { ApiError } from "../api";

export const getHeroes = async (): Promise<HeroType[]> => {
  try {
    const response = await API.get("/heroes");
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      return [];
    }
    throw error;
  }
};

export const getHeroProfile = async (
  heroId: string
): Promise<HeroProfileType | null> => {
  try {
    const response = await API.get(`/heroes/${heroId}/profile`);
    return response.data;
  } catch (error) {
    if (error instanceof ApiError) {
      return null;
    }
    throw error;
  }
};

export const patchHeroProfile = async (
  heroId: string,
  profile: HeroProfileType
) => {
  try {
    const response = await API.patch(`/heroes/${heroId}/profile`, profile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

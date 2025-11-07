import API from "../createClient";
import type { HeroType, HeroProfileType } from "./types";

const getHeroes = async (): Promise<HeroType[]> => {
  try {
    const response = await API.get("/heroes");
    return response.data;
  } catch (error) {
    console.error("Error fetching heroes", error);
    return [];
  }
};

const getHeroProfile = async (
  heroId: string
): Promise<HeroProfileType | null> => {
  try {
    const response = await API.get(`/heroes/${heroId}/profile`);
    return response.data;
  } catch (error) {
    return null;
  }
};

const patchHeroProfile = async (heroId: string, profile: HeroProfileType) => {
  try {
    const response = await API.patch(`/heroes/${heroId}/profile`, profile);
    return response.data;
  } catch (error) {
    console.error("Error patching hero profile", error);
    return null;
  }
};

export { getHeroes, getHeroProfile, patchHeroProfile };

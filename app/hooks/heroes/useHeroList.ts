import { useQuery } from "@tanstack/react-query";

import { getHeroes } from "~/lib/api/heroes";

const useHeroesList = () =>
  useQuery({
    queryKey: ["heroes"],
    queryFn: async () => {
      try {
        const heroes = await getHeroes();
        return heroes;
      } catch (error) {
        console.error("Error fetching heroes", error);
        return [];
      }
    },
    initialData: [],
  });

export default useHeroesList;

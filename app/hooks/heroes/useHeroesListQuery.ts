import { useQuery } from "@tanstack/react-query";

import { getHeroes } from "~/lib/api/heroes";

const useHeroesListQuery = () =>
  useQuery({
    queryKey: ["heroes"],
    queryFn: async () => {
      const heroes = await getHeroes();
      return heroes;
    },
    initialData: [],
  });

export default useHeroesListQuery;

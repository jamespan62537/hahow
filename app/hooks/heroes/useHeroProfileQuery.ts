import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import { getHeroProfile } from "~/lib/api/heroes";

const useHeroProfileQuery = () => {
  const heroId = useParams()?.heroId || "";
  return useQuery({
    queryKey: ["hero-profile", heroId],
    queryFn: async () => {
      const response = await getHeroProfile(heroId);
      return response;
    },
    enabled: !!heroId,
    refetchOnWindowFocus: false,
  });
};

export default useHeroProfileQuery;

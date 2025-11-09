import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { patchHeroProfile } from "~/lib/api/heroes";
import type { HeroProfileType } from "~/lib/api/heroes/types";

const useHeroProfileMutation = () => {
  const queryClient = useQueryClient();
  const heroId = useParams()?.heroId || "";

  return useMutation({
    mutationFn: async ({
      heroId,
      profile,
    }: {
      heroId: string;
      profile: HeroProfileType;
    }) => {
      const response = await patchHeroProfile(heroId, profile);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hero-profile", heroId] });
    },
  });
};

export default useHeroProfileMutation;

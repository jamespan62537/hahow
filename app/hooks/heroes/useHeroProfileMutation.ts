import { useMutation } from "@tanstack/react-query";

import { patchHeroProfile } from "~/lib/api/heroes";
import type { HeroProfileType } from "~/lib/api/heroes/types";

const useHeroProfileMutation = () => {
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
  });
};

export default useHeroProfileMutation;

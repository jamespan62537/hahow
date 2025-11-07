import { Outlet } from "react-router";

import HeroList from "~/components/heroes/HeroList";
import useHeroesListQuery from "~/hooks/heroes/useHeroesListQuery";
import HeroListSkeleton from "~/components/heroes/HeroListSkeleton";

const Heroes = () => {
  const { data: heroesList, isLoading } = useHeroesListQuery();

  return (
    <>
      {isLoading ? (
        <HeroListSkeleton />
      ) : (
        <HeroList heroesList={heroesList ?? []} />
      )}
      <Outlet />
    </>
  );
};

export default Heroes;

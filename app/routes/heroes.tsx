import { Outlet } from "react-router";

import HeroList from "~/components/heroes/HeroList";
import useHeroesListQuery from "~/hooks/heroes/useHeroesListQuery";
import HeroListSkeleton from "~/components/heroes/HeroListSkeleton";

const Heroes = () => {
  const { data: heroesList, isLoading } = useHeroesListQuery();

  /**
   * Error handling example:
   * const { data: heroesList, isLoading, error } = useHeroesListQuery();
   * if (error) {
   *   if (error instanceof ApiError) {
   *     return <div>Error: {error.message}</div>;
   *   }
   *   return <div>Unexpected error</div>;
   * }
   */

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

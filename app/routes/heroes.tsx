import { Outlet } from "react-router";

import HeroList from "~/components/heroes/HeroList";
import useHeroesListQuery from "~/hooks/heroes/useHeroesListQuery";

const Heroes = () => {
  const { data: heroesList } = useHeroesListQuery();

  return (
    <>
      <HeroList heroesList={heroesList} />
      <Outlet />
    </>
  );
};

export default Heroes;

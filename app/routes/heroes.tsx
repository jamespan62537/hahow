import { Outlet } from "react-router";

import HeroList from "~/components/heroes/HeroList";

const Heroes = () => {
  return (
    <>
      <HeroList />
      <Outlet />
    </>
  );
};

export default Heroes;

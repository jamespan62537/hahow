import React from "react";
import { Link } from "react-router";

import { Container } from "./styles";
import useHeroesList from "~/hooks/heroes/useHeroList";
import HeroCard from "../HeroCard";

const HeroList = React.memo(() => {
  const { data: heroesList } = useHeroesList();

  return (
    <Container>
      {heroesList.map((hero) => (
        <Link key={hero.id} to={`/heroes/${hero.id}`}>
          <HeroCard hero={hero} />
        </Link>
      ))}
    </Container>
  );
});

export default HeroList;

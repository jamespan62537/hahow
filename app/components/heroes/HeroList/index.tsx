import React from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

import { Container } from "./styles";
import HeroCard from "../HeroCard";
import type { HeroType } from "~/lib/api/heroes/types";

const HeroList = React.memo(({ heroesList }: { heroesList: HeroType[] }) => {
  const heroId = useParams()?.heroId || "";

  return (
    <Container>
      {heroesList.map((hero) => (
        <Link key={hero.id} to={heroId && heroId === hero.id ? "/heroes" : `/heroes/${hero.id}`}>
          <HeroCard hero={hero} />
        </Link>
      ))}
    </Container>
  );
});

export default HeroList;

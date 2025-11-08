import React from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

import { Container } from "./styles";
import HeroCard from "../HeroCard";
import type { HeroType } from "~/lib/api/heroes/types";
import useHeroesStore from "~/lib/stores/heroes/heroesStore";
import useModalStore from "~/lib/stores/common/modalStore";

const HeroList = React.memo(({ heroesList }: { heroesList: HeroType[] }) => {
  const heroId = useParams()?.heroId || "";
  const { isEdited } = useHeroesStore();
  const { openModal } = useModalStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isEdited) {
      e.preventDefault();
      openModal({
        title: "Oops!",
        description: "請先儲存屬性變更",
      });
    }
  };

  return (
    <Container>
      {heroesList.map((hero) => (
        <Link
          key={hero.id}
          to={heroId && heroId === hero.id ? "/heroes" : `/heroes/${hero.id}`}
          onClick={handleClick}
        >
          <HeroCard hero={hero} />
        </Link>
      ))}
    </Container>
  );
});

export default HeroList;

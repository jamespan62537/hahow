import React from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

import { Container } from "./styles";
import HeroCard from "../HeroCard";
import type { HeroType } from "~/lib/api/heroes/types";
import useHeroesStore from "~/lib/stores/heroes/heroesStore";
import useModalStore from "~/lib/stores/common/modalStore";

const HeroLink = ({
  hero,
  children,
}: {
  hero: HeroType;
  children: React.ReactNode;
}) => {
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
    <Link
      key={hero.id}
      to={heroId && heroId === hero.id ? "/heroes" : `/heroes/${hero.id}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
const HeroList = React.memo(({ heroesList }: { heroesList: HeroType[] }) => {
  if (heroesList.length === 0) {
    return <div>No heroes found</div>;
  }

  return (
    <Container>
      {heroesList.map((hero) => (
        // encapsulate the Link component to avoid re-render issue
        <HeroLink key={hero.id} hero={hero}>
          <HeroCard hero={hero} />
        </HeroLink>
      ))}
    </Container>
  );
});

export default HeroList;

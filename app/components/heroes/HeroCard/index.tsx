import { useParams } from "react-router";

import { Container, HeroName, StyledImage } from "./styles";
import type { HeroType } from "~/lib/api/heroes/types";

const HeroCard = ({ hero }: { hero: HeroType }) => {
  const heroId = useParams()?.heroId || "";
  const isHeroCardSelected = heroId === hero.id;

  return (
    <Container isSelected={isHeroCardSelected}>
      <StyledImage src={hero.image} alt={hero.name} loading="lazy" />
      <HeroName>{hero.name}</HeroName>
    </Container>
  );
};

export default HeroCard;

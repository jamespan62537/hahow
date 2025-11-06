import { Container, HeroName, StyledImage } from "./styles";
import type { HeroType } from "~/lib/api/heroes/types";

const HeroCard = ({ hero }: { hero: HeroType }) => {
  return (
    <Container>
      <StyledImage src={hero.image} alt={hero.name} />
      <HeroName>{hero.name}</HeroName>
    </Container>
  );
};

export default HeroCard;

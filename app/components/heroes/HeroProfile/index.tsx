import { useParams } from "react-router";

import {
  Container,
  AttributesBlock,
  AttributeLabel,
  DecreaseButton,
  IncreaseButton,
  AttributeValue,
  InfoBlock,
  RemainingPoints,
  SaveButton,
} from "./styles";
import type { HeroProfileType } from "~/lib/api/heroes/types";
import usePointCalculation from "~/hooks/heroes/usePointCalculation";
import { patchHeroProfile } from "~/lib/api/heroes";

type AttributeKey = "str" | "int" | "agi" | "luk";

const AttributesList: { key: AttributeKey; label: string }[] = [
  { key: "str", label: "STR" },
  { key: "int", label: "INT" },
  { key: "agi", label: "AGI" },
  { key: "luk", label: "LUK" },
];

const HeroProfile = ({
  heroProfile,
}: {
  heroProfile: HeroProfileType | null;
}) => {
  if (!heroProfile) return null;

  const heroId = useParams()?.heroId || "";

  const { profile, remainingPoints, onDecrease, onIncrease } =
    usePointCalculation(heroProfile);

  // TODO: Add error handler
  const handleSaveAttributes = async () => await patchHeroProfile(heroId, profile);

  return (
    <Container>
      <AttributesBlock>
        {AttributesList.map((attr) => (
          <>
            <AttributeLabel key={attr.key}>{attr.label}</AttributeLabel>
            <DecreaseButton
              disabled={profile[attr.key] <= 0}
              onClick={() => onDecrease(attr.key)}
            >
              -
            </DecreaseButton>
            <AttributeValue>{profile[attr.key]}</AttributeValue>
            <IncreaseButton
              disabled={remainingPoints <= 0}
              onClick={() => onIncrease(attr.key)}
            >
              +
            </IncreaseButton>
          </>
        ))}
      </AttributesBlock>
      <InfoBlock>
        <RemainingPoints>剩餘點數：{remainingPoints}</RemainingPoints>
        <SaveButton onClick={handleSaveAttributes}>儲存</SaveButton>
      </InfoBlock>
    </Container>
  );
};

export default HeroProfile;

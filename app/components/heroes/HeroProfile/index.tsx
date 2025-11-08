import { Fragment } from "react/jsx-runtime";
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
import useHeroProfileMutation from "~/hooks/heroes/useHeroProfileMutation";
import Loading from "~/components/common/Loading";
import useHeroesStore from "~/lib/stores/heroes/heroesStore";

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
  const { mutateAsync: patchHeroProfile, isPending } = useHeroProfileMutation();
  const { setIsEdited } = useHeroesStore();

  const { profile, remainingPoints, onDecrease, onIncrease } =
    usePointCalculation(heroProfile);

  const handleSaveAttributes = async () => {
    if (remainingPoints > 0) return;
    setIsEdited(false);
    await patchHeroProfile({ heroId, profile });
  };

  return (
    <Container>
      {isPending && <Loading />}
      <AttributesBlock>
        {AttributesList.map((attr) => (
          <Fragment key={attr.key}>
            <AttributeLabel>{attr.label}</AttributeLabel>
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
          </Fragment>
        ))}
      </AttributesBlock>
      <InfoBlock>
        <RemainingPoints>剩餘點數：{remainingPoints}</RemainingPoints>
        <SaveButton
          disabled={remainingPoints > 0}
          onClick={handleSaveAttributes}
        >
          儲存
        </SaveButton>
      </InfoBlock>
    </Container>
  );
};

export default HeroProfile;

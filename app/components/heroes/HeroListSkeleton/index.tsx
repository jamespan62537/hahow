import { styled } from "styled-components";

import SkeletonBox from "~/components/common/SkeletonBox";

const Container = styled.div`
  width: 100%;
  height: 240px;
`;


const HeroListSkeleton = () => {
  return (
    <Container>
      <SkeletonBox width="100%" height="100%" borderRadius={7} />
    </Container>
  );
};

export default HeroListSkeleton;

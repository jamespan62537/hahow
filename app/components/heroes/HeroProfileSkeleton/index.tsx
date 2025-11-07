import { styled } from "styled-components";

import SkeletonBox from "~/components/common/SkeletonBox";

const Container = styled.div`
  width: 100%;
  height: 236px;
  margin-top: 20px;
`;

const HeroProfileSkeleton = () => {
  return (
    <Container>
      <SkeletonBox width="100%" height="100%" borderRadius={7} />
    </Container>
  );
};

export default HeroProfileSkeleton;

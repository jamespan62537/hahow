import { Container } from "./styles";

type SkeletonBox = {
  width: string | number;
  height: string | number;
  borderRadius?: number;
};

const SkeletonBox = ({ width, height, borderRadius = 0 }: SkeletonBox) => {
  return (
    <Container width={width} height={height} borderRadius={borderRadius} />
  );
};

export default SkeletonBox;

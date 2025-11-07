import { styled } from "styled-components";

export const Container = styled.div<{
  width: string | number;
  height: string | number;
  borderRadius?: number;
}>`
  background-color: #e0e0e0ba;
  animation: loaderAnimation 1.5s ease-in-out infinite forwards;
  width: ${({ width }) =>
    typeof width === "number" ? `${width}px` : width};
  height: ${({ height}) =>
    typeof height === "number" ? `${height}px` : height};
  border-radius: ${({ borderRadius }) => borderRadius && `${borderRadius}px`};

  @keyframes loaderAnimation {
    0% { opacity: 1}
    50% { opacity: 0.5}
    100% { opacity: 1}
  }
`;

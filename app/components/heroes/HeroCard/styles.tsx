import { styled } from "styled-components";

export const Container = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 280px;
  background-color: ${({ isSelected }) => (isSelected ? "#000000e6" : "#fff")};
  border-radius: 7px;
  padding: 10px;
  justify-content: space-between;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  transition:
    background-color 0.1s ease-in-out,
    color 0.1s ease-in-out;
`;

export const HeroName = styled.div`
  text-align: center;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  object-fit: cover;

  // show the image smoothly
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

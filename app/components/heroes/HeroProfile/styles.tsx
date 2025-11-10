import { css, styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 20px;
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 7px;
  padding: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const AttributesBlock = styled.div`
  display: grid;
  grid-template-columns: 64px 32px 32px 32px;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
`;

export const AttributeLabel = styled.div`
  grid-column: 1;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const DecreaseButton = styled(Button)<{ disabled: boolean }>`
  grid-column: 2;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export const IncreaseButton = styled(Button)<{ disabled: boolean }>`
  grid-column: 4;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export const AttributeValue = styled.div`
  grid-column: 3;
  text-align: center;
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
  align-items: start;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const RemainingPoints = styled.div`
  grid-row: 3;
  align-self: end;

  @media (max-width: 480px) {
    grid-row: 1;
  }
`;

export const SaveButton = styled.div<{ disabled: boolean }>`
  grid-row: 3;
  padding: 4px 50px;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  grid-row: 4;
  ${({ disabled }: { disabled: boolean }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  @media (max-width: 480px) {
    grid-row: 2;
    text-align: center;

  }
`;

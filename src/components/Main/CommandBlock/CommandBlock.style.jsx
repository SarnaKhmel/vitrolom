import styled from "styled-components";

export const CommandBlockElement = styled.div`
  height: 550px;
  width: 100%;

  background: radial-gradient(
    circle at 2% 59%,
    rgba(255, 255, 0, 1) 0%,
    rgba(22, 78, 95, 0.92) 0%,
    rgba(255, 255, 255, 1) 50%
  );

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 500;
`;

export const Line = styled.div`
  border: 1px solid green;
  width: 80vw;

  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`;

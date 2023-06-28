import styled from "styled-components";

export const Block = styled.div`
  height: 100vh;
`;

export const Background = styled.div`
  height: 100vh;
  background: radial-gradient(
    50% 100% at 100% 50%,
    #164e5f 0%,
    rgba(22, 78, 95, 0) 100%
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Circle = styled.div`
  position: absolute;
  box-sizing: border-box;

  position: absolute;
  width: 550px;
  height: 550px;
  left: -236px;
  top: -173px;
  border-radius: 50%;
  z-index: -1;
  border: 1px dashed rgba(59, 62, 67, 0.5);
`;
export const Circle2 = styled.div`
  position: absolute;
  box-sizing: border-box;

  position: absolute;
  width: 850px;
  height: 850px;
  left: -236px;
  top: -173px;
  border-radius: 50%;
  z-index: -1;
  border: 1px dashed rgba(59, 62, 67, 0.5);
`;

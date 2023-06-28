import styled from "styled-components";

import a1 from "./aboutV1.svg";
import a2 from "./aboutV2.svg";
export const AboutBlockComponent = styled.div`
  height: 550px;

  ${"" /* border-radius: 5px; */}
  background: var(--164-e-5-f, #164E5F);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutInfoBlock = styled.div`
  width: 50%;
  max-width: 550px;
  height: 40%;
  border: 1px solid red;

  color: #fff;
  font-size: 14px;

  font-weight: 600;
`;

export const AboutImage = styled.div`
  height: 450px;
  width: 450px;
  border: 1px solid red;
  background-image: url(${a1});
  transition: background-image 0.5s ease;

  &:hover {
    background-image: url(${a2});
  }
`;

// export const LayoutBlock = styled.div`
//   background-image: url(${bg});
//   min-height: 80vh;
//   height: 100vh - 334px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   overflow: auto;
//   z-index: 1;
// `;

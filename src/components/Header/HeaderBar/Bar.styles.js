import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  display: contents;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const BarBtn = styled.a`
  margin: 10px;
  padding: 5px;
  color: #164e5f;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
`;

export const BarBtnHelp = styled.a`
  margin: 10px;
  padding: 10px;
  background-color: #c98f3b;
  border-radius: 30px;
  color: #fff;

  &:hover,
  &:focus {
    background: linear-gradient(
    93.81deg,
    #164e5f 6.36%,
    rgba(22, 78, 95, 0.53) 102.94%
  );
    color: white;
    cursor: pointer;
    ${
      "" /* box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  } */
    }
`;

export const BarMobile = styled.div`
  display: none;
`;

export const BarImage = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: contents;
  }
`;

export const BarLabel = styled.label`
  display: none;
  @media screen and (max-width: 600px) {
    display: contents;
  }
`;

export const BarInput = styled.img`
  display: none;
`;

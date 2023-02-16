import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  align-items: center;
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
    cursor: pointer;
    box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
`;

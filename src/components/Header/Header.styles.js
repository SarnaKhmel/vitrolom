import styled from "styled-components";

export const Box = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0px 10px 0px;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: white;

  box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

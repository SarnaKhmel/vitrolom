import React from "react";
import styled from "styled-components";
const OnePerson = () => {
  return (
    <Block>
      <Image />
      <Header>Зеник Козицький</Header>
      <Title>Медійник</Title>
    </Block>
  );
};

const Block = styled.div`
  border: 1px solid orange;

  width: 200px;
  height: 200px;

  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 139px;
  height: 139px;
  border: none;
  border-radius: 50%;
  background-color: grey;
`;

const Header = styled.div`
  color: #000;
  font-size: 14px;
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-size: 12px;
`;

export default OnePerson;

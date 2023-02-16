import styled from "styled-components";

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.img`
  &:hover,
  &:focus {
    box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
`;

export const SocialBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialLink = styled.a``;

export const SocialImg = styled.img`
  max-height: 24px;
  margin-left: 5px;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.5));
    box-shadow: inset 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
`;

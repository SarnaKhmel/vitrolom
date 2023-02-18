import styled from "styled-components";

export const Block = styled.div`
  height: 500px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #164e5f;
`;

export const BtnBlock = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Btn1 = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: white;
  background: linear-gradient(
    93.81deg,
    #164e5f 6.36%,
    rgba(22, 78, 95, 0.53) 102.94%
  );
  border-radius: 30px;
`;

export const Btn2 = styled.div`
  margin-left: 10px;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #3b3e43;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  background-color: white;
  @media screen and (max-width: 600px) {
    padding-left: -10px;
  }
`;

export const Block2 = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title2 = styled.p``;

export const Block2Img = styled.img`
  margin-left: 10px;
`;
